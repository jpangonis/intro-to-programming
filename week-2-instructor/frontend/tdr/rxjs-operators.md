# RxJs Operators

## Overview

When using the Angular HTTP client, it returns an Observable stream as a response. We use rxjs operators to "process" that stream before returning results to our application. There are a ton of operators.  [See Operators](https://rxjs.dev/guide/operators#what-are-operators)

## Examples

Two common operators and uses in our application are using `exhaustMap` and `mergeMap` when making HTTP requests.

### Guidance:

Consider using `exhaustMap` when making an HTTP request with no side-effects (a `GET` request). ExhaustMap will not run additional get requests until the first request is fulfilled.

This is useful because we don't want to "spam" the server with multiple requests.

Use `mergeMap` when doing HTTP operations that do have side effects (e.g. `POST`, `PUT`, `DELETE`) - mergeMap is saying "We care about and need to process *all* of these requests, and we know they might not be fulfilled in order. This allows us to create non-blocking interactions.

## Alternatives Considered

Like other libraries, you could mention `mergeMap` vs. `concatMap` etc.

## Triggers for Reevaluation

These are operators for RXJS. If we move in the future to something else (promises, signals, etc.) this should be reevaluted.