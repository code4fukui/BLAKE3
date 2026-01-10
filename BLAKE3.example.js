import { BLAKE3 } from "./BLAKE3.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

const res = BLAKE3.digest("hello!");
console.log(res, Base16.encode(res));
