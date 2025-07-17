import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntity, setEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, mergeMap, pipe, tap } from 'rxjs';
import {
  clearError,
  setError,
  withErrorDisplay,
} from './error-display-feature';
import { LinkApiItem, LinksApiService } from './links-api';

import { tapResponse } from '@ngrx/operators';
import {
  setFulfilled,
  setLoading,
  withResourceState,
} from '../../shared/resource-state-feature';

export type ApiLinkCreateItem = Omit<LinkApiItem, 'id'>;

type SortOptions = 'href' | 'description';
type LinkSortState = {
  sortingBy: SortOptions;
};
export const LinksStore = signalStore(
  withErrorDisplay(),
  withEntities<LinkApiItem>(),
  withResourceState(),
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
      clearError: () => patchState(store, clearError()),
      addLink: rxMethod<ApiLinkCreateItem>(
        pipe(
          mergeMap((link) =>
            service.addLink(link).pipe(
              tapResponse(
                (newLink) => patchState(store, addEntity(newLink)),
                () => patchState(store, setError('Failed adding ' + link.href)),
              ),
            ),
          ),
        ),
      ),
      setSortingBy: (sortingBy: SortOptions) =>
        patchState(store, { sortingBy }),
      _load: rxMethod<void>(
        pipe(
          tap(() => patchState(store, setLoading())),
          exhaustMap(() =>
            service
              .getLinks()
              .pipe(
                tap((links) =>
                  patchState(store, setEntities(links), setFulfilled),
                ),
              ),
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
