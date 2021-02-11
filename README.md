# incart-public-events

## Using types with inCart project

To use our types. Simply import us as your depdendcies like so

```sh
yarn add incart-public-events
```

This will allow you to:

```ts
import type { InCartPublicEvents } from 'incart-public-events'

const body: InCartPublicEvents = request.body
// Do your events handling with benefits of typings!
```

## Contribution

To declare your types. Update index.ts with your interface as you would normally did in TS project.

Make sure you export them.

Run

```sh
yarn build
```

Then publish it!
