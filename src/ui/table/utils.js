"use strict";

/**
 * function to create array of 49 elements (25 and 24 integer numbers)
 * @param startEl is starting element of array (1, 2, 3 etc.)
 * @returns an array of 49 numbers
 */

export const getBlackRedArr = function (startEl) {
  console.log(startEl);
  const blackArr = [];
  const redArr = [];
  for (let i = startEl; i <= 24 + startEl; i++) {
    blackArr.push({ index: i, color: "black" });
  }
  for (let i = startEl; i <= 23 + startEl; i++) {
    redArr.push({ index: i, color: "red" });
  }
  const blackRedArr = blackArr.concat(redArr);
  return blackRedArr;
};

/**
 * function to shuffle (mix) elements of array in random order
 * @param array is array which we want to mix
 */
export const shuffledArray = function (array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
