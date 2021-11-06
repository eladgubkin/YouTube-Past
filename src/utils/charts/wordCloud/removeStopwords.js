import { stopwords } from "./stopwords";

export const removeStopwords = (str) => {
  const res = [];
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word_clean = words[i].split(".").join("");
    if (!stopwords.includes(word_clean)) {
      res.push(word_clean);
    }
  }

  return res.join(" ");
};
