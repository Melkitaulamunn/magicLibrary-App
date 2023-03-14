export const upperFirstLetter = (sample = "") => {
  let words = sample.split(" ");

  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    let tempWord = "";
    for (let j = 0; j < words[i].length; j++) {
      if (j === 0) {
        tempWord += words[i][j].toLocaleUpperCase();
      } else {
        tempWord += words[i][j].toLocaleLowerCase();
      }
    }
    newWords.push(tempWord);
  }
  console.log("newWords", newWords);

  const newSample = newWords.join(" ");
  return newSample;
};

export const upperFirstLetter2 = (sample = "") => {
  return sample
    .split("")
    .map(
      (word) =>
        word.charAt(0).toLocaleUpperCase("tr-TR") +
        word.slice(1).toLocaleLowerCase("tr-TR")
    )
    .join("");
};
