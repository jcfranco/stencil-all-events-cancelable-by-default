## stencil-all-events-cancelable-by-default

This repo demonstrates that all events are marked as cancelable by default even if a component may not support its cancelation.

### Steps to repro

1. run `npm i && npm run build`
2. note how the doc JSON shows `myCustomEvent` as cancelable even though the component does not do anything if it's canceled:
    ```json
       "events": [
            {
              "event": "someEvent",
              "detail": "void",
              "bubbles": true,
              "cancelable": true,
              "composed": true,
              "docs": "",
              "docsTags": []
            }
          ],
    ```