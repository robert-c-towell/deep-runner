import LZString from "lz-string";

const Hash = (state) => {
  return LZString.compress(state);
};

const Unhash = (hash) => {
  return LZString.decompress(hash);
};

export { Hash, Unhash };
