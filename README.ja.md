# BLAKE3.js

[rvgrinsven/blake3-js](https://github.com/rvgrinsven/blake3-js) からフォークした、[BLAKE3](https://github.com/BLAKE3-team/BLAKE3-specs) のピュアJavaScript実装です。

## 使い方

```js
import { BLAKE3 } from "https://code4fukui.github.io/BLAKE3/BLAKE3.js";

console.log(BLAKE3.digest(new Uint8Array([1, 2, 3])));
console.log(BLAKE3.digest("hello!"));
```

## テスト

```sh
deno test -A BLAKE3.test.js
```

## 制限事項

- パフォーマンスは良くありませんが、改善の余地は多くあります。
  （u32データ型を型付き配列に切り替える予定であり、これにより少し改善される見込みです）

## ライセンス

本プロジェクトは Apache License, Version 2.0 の下でライセンスされています。
