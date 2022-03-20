export const isWordValid = (word, validGuessesList) => {
  return validGuessesList.includes(word.toLowerCase());
};

export const allMatchingLetter = (word, correctWord) => {
  let letterColors = [];
  for (let index = 0; index < word.length; index++) {
    const myLetter = word[index];
    let letterIndex = correctWord.indexOf(myLetter);

    if (letterIndex == -1) {
      // Color is grey
      letterColors.push("grey");
    } else {
      if (letterIndex == index) {
        letterColors.push("green");
      } else {
        letterColors.push("yellow");
      }
    }
  }
  console.log(letterColors);
  return letterColors;
};

export const isWin = (colorArray) => {
  for (let index = 0; index < colorArray.length; index++) {
    const element = colorArray[index];
    if (element != "green") return false;
  }
  return true;
};
