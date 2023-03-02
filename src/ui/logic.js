"use strict";
import { stopTestTimer, btnInstruction } from "./buttons.js";
import { labelTimer } from "./timer.js";
import { tableSpace } from "./table/table.js";
let curNum = 1;
let stageID = 1;
const testArray = [];
export function stagesLogic(number, color) {
  const startNum = Number(JSON.parse(localStorage.user).tableNumber);
  if (stageID === 1) {
    stage1Logic(number, color, startNum);
  }
}

export const stage1Logic = function (number, color, startNum) {
  //CHECK if clicked cell is in correct order

  number = Number(number);
  if (curNum < startNum + 24) {
    if (color === "black") {
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
      } else if (number > curNum + 7) {
        console.log("You skip more than 7 numbers! Stage reset!");
        stageReset();
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
      } else if (number < curNum - 8) {
        console.log("You returned more than 7 numbers ! Stage reset!");
        stageReset();
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
    } else if (color === "red") {
      if (number === curNum) {
        console.log("Color change mistake");
        curNum++;
        testArray.push(2);
        let colorChangeErrorArray = testArray.slice(-4);
        console.log(colorChangeErrorArray);
        //CHECK if user changed color and carried on without correcting mistake
        if (colorChangeErrorArray.toString() === [2, 2, 2, 2].toString()) {
          console.log("Fatal error! Stage reset!");
          stageReset();
        }
      } else {
        testArray.push(2);
        console.log("Color change mistake");
      }
    }
  } else if (curNum === startNum + 24 || number === startNum + 24) {
    console.log(testArray, "Stage completed!");
    localStorage.setItem(
      "Stage1Time",
      JSON.stringify(`Stage 1 time ${labelTimer.textContent}`)
    );
    localStorage.setItem("StageMistakesArray", JSON.stringify(testArray));
    stopTestTimer();
  }
};
export const stageReset = function () {
  stopTestTimer();
  btnInstruction.removeAttribute("disabled");
  btnInstruction.style.pointerEvents = "auto";
  tableSpace.style.pointerEvents = "none";
  testArray.length = 0;
  curNum = 1;
};
