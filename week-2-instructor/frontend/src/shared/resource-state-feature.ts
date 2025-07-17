import { computed } from '@angular/core';
import { signalStoreFeature, withComputed, withState } from '@ngrx/signals';

export type RequestStatus = 'idle' | 'pending' | 'fulfilled';
export type RequestStatusState = { requestStatus: RequestStatus };

export function withResourceState() {
  return signalStoreFeature(
    withState<RequestStatusState>({
      requestStatus: 'idle',
    }),
    withComputed((store) => {
      return {
        isIdle: computed(() => store.requestStatus() === 'idle'),
        isPending: computed(() => store.requestStatus() === 'pending'),
        isFulfilled: computed(() => store.requestStatus() === 'fulfilled'),
        isLoading: computed(() => store.requestStatus() === 'pending'),
      };
    }),
  );
}

export function setLoading(): RequestStatusState {
  return { requestStatus: 'pending' };
}
export function setFulfilled(): RequestStatusState {
  return { requestStatus: 'fulfilled' };
}
