import { signalStoreFeature, withState } from '@ngrx/signals';

type ErrorDisplayState = {
  hasError: boolean;
  errorMessage: string;
};
export function withErrorDisplay() {
  return signalStoreFeature(
    withState<ErrorDisplayState>({
      hasError: false,
      errorMessage: '',
    }),
  );
}

export function setError(msg: string): ErrorDisplayState {
  return {
    hasError: true,
    errorMessage: msg,
  };
}

export function clearError(): ErrorDisplayState {
  return {
    hasError: false,
    errorMessage: '',
  };
}
