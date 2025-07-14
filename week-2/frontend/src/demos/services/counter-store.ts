import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
const COUNT_BY_VALUES = [1, 3, 5] as const;
type CountByValues = (typeof COUNT_BY_VALUES)[number];

type SignalState = {
  by: CountByValues;
  current: number;
};

export const CounterStore = signalStore(
  withState<SignalState>({
    by: 3,
    current: 0,
  }),
  withProps(() => {
    return {
      values: COUNT_BY_VALUES,
    };
  }),
  withMethods((store) => {
    return {
      setCountBy: (by: CountByValues) => patchState(store, { by }),
      increment: () =>
        patchState(store, { current: store.current() + store.by() }),
      decrement: () =>
        patchState(store, { current: store.current() - store.by() }),
    };
  }),
  withComputed((store) => {
    return {
      decrementDisabled: computed(() => store.current() - store.by() < 0),
      isEven: computed(() => store.current() % 2 === 0),
    };
  }),
);
