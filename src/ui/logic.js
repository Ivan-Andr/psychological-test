"use strict";
import { userObject } from "./form.js";
//let stageID = 1;
const userObjectParsed = JSON.parse(localStorage.user);
const startNum = Number(userObjectParsed.tableNumber);
console.log(userObjectParsed);
let curNum = startNum;
const testArray = [];
export const stage1Logic = function (number, className) {
  //CHECK if clicked cell is in correct order
  number = Number(number);
  if (curNum < startNum + 24) {
    if (className === "table_cell_black") {
      if (number === curNum) {
        console.log("correct");
        testArray.push(1);
        curNum++;
      } else if (number === curNum + 1 || number === curNum + 2) {
        //CHECK if clicked cell is greater than order number
        console.log("Skip Mistake");
        testArray.push(3);
        curNum = number + 1;
        console.log(curNum);
      } else if (number > curNum + 2) {
        let skipDelta = number - curNum;
        console.log("Skip Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(3);
        }
        curNum = number + 1;
        console.log(curNum);
      } else if (number === curNum - 2 || number === curNum - 3) {
        //CHECK if clicked cell is less than order number
        console.log("Return Mistake");
        testArray.push(5);
        curNum = number + 1;
      } else if (number < curNum - 4) {
        let skipDelta = curNum - number;
        console.log("Return Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(5);
          console.log(curNum);
        }
        curNum = number + 1;
        console.log(curNum);
      } else if (number === curNum - 1) {
        //CHECK user did doubleclick on one number
        console.log("Double Click Mistake");
        testArray.push(4);
      }
    } else if (className === "table_cell_red") {
      if (number === curNum) {
        console.log("Color change mistake");
        curNum++;
        testArray.push(2);
        let colorChangeErrorArray = testArray.slice(-4);
        //CHECK if user changed color and carried on without correcting mistake
        if (colorChangeErrorArray.toString() === [2, 2, 2, 2].toString()) {
          console.log("Fatal error! Stage reset!");
        }
      } else {
        testArray.push(2);
        console.log("Color change mistake");
      }
    }
  } else if (curNum === startNum + 24 || number === startNum + 24) {
    console.log(testArray);
  }
};
