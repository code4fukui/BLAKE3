import * as t from "https://deno.land/std/testing/asserts.ts";
import { BLAKE3 } from "./BLAKE3.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

Deno.test("simlpe", () => {
  t.assertEquals(Base16.encode(BLAKE3.digest("hello!")), "0cac6414ccb21c104674359e6789bbe644db1db8fd740ed4cabff0e1c9d591f6");
});