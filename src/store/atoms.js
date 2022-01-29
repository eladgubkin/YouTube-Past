import { atom } from "recoil"; // Recoil

export const watchHistoryAtom = atom({
  key: "watchHistory",
  default: [],
});

export const searchHistoryAtom = atom({
  key: "searchHistory",
  default: [],
});
