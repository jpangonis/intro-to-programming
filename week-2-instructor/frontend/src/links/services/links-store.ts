import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, pipe, tap } from 'rxjs';
import { LinkApiItem, LinksApiService } from './links-api';

export type ApiLinkCreateItem = Omit<LinkApiItem, 'id'>;

type SortOptions = 'href' | 'description';
type LinkSortState = {
  sortingBy: SortOptions;
};
export const LinksStore = signalStore(
  withEntities<LinkApiItem>(),
  withState<LinkSortState>({
    sortingBy: 'href',
  }),
  withComputed((store) => {
    return {
      sortedEntities: computed(() => {
        const entities = store.entities();
        return [...entities].sort((a, b) => {
          if (store.sortingBy() === 'href') {
            return a.href.localeCompare(b.href);
          } else {
            return a.description.localeCompare(b.description);
          }
        });
      }),
    };
  }),
  withMethods((store) => {
    const service = inject(LinksApiService);
    return {
      addLink: (link: ApiLinkCreateItem) => console.log('Adding link:', link),
      setSortingBy: (sortingBy: SortOptions) =>
        patchState(store, { sortingBy }),
      _load: rxMethod<void>(
        pipe(
          exhaustMap(() =>
            service
              .getLinks()
              .pipe(tap((links) => patchState(store, setEntities(links)))),
          ),
        ),
      ),
    };
  }),
  withHooks({
    onInit(store) {
      store._load();
    },
  }),
);
