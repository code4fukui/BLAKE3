# blake3-js

Pure JavaScript implementation of BLAKE3

## Usage

```js
import { BLAKE3 } from "https://code4fukui.github.io/BLAKE3/BLAKE3.js";

console.log(BLAKE3.digest(new Uint8Array([1, 2, 3])));
console.log(BLAKE3.digest("hello!"));
```

## Tests

```sh
deno test -A BLAKE3.test.js
```

## Limitations

- Performance is bad, many opportunities to improve this.
  (Will switch to typed arrays for the u32 data type which should improve this a bit)
