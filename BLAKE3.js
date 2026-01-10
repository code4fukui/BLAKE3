import blake from "./src/index.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

const digest = (data) => {
  if (typeof data == "string") {
    data = new TextEncoder().encode(data);
  }
  const hex = blake.newRegular().update(data).finalize();
  return Base16.decode(hex);
};

export const BLAKE3 = {
  digest,
};
