"use strict";
import {
  stopTestTimer,
  btnInstruction,
  btnNextStage,
  btnStart,
  stageID,
  buttons
} from "./buttons.js";
import { labelTimer } from "./timer.js";
import { tableSpace } from "./table/table.js";
let curElement = 0;
const testArray = [];
export function stagesLogic(number, color) {
  const sampleArr = JSON.parse(window.localStorage.getItem("blackRedArr"));

  // console.log(arr);
  // let sampleArray = [];
  // sampleArray = arr.forEach((element, i) => {
  //   sampleArray.push(arr[i].index);
  // });
  // console.log(sampleArray);
  if (stageID === 1) {
    const startNum1 = sampleArr[0].index;
    stage1Logic(number, color, startNum1, sampleArr);
  }
  // if (stageID === 2) {
  //   stage2Logic(number, color, startNum);
  // }
  // (stageID === 3) {
  //   stage3Logic(number, color, startNum);
  // }
}
export const stage1Logic = function (number, color, startNum, arr) {
  //CHECK if clicked cell is in correct order
  number = Number(number);
  if (arr[curElement].index < startNum + 24) {
    if (color === "black") {
      if (number === arr[curElement].index) {
        console.log("correct");
        testArray.push(1);
        curElement++;
      } else if (
        number === arr[curElement + 1].index ||
        number === arr[curElement + 2].index
      ) {
        //CHECK if clicked cell is greater than order number
        console.log("Skip Mistake");
        testArray.push(3);
        curElement = number - startNum + 1;
        console.log(arr[curElement].index);
      } else if (curElement < 19 && number > arr[curElement + 6].index) {
        console.log("You skip more than 7 numbers! Stage reset!");
        stageReset();
      } else if (number > arr[curElement + 2].index) {
        let skipDelta = number - arr[curElement].index;
        console.log("Skip Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(3);
        }
        curElement = number - startNum + 1;
        console.log(arr[curElement].index);
      } else if (
        number === arr[curElement - 2].index ||
        number === arr[curElement - 3].index
      ) {
        //CHECK if clicked cell is less than order number
        console.log("Return Mistake");
        testArray.push(5);
        curElement = number - startNum + 1;
        console.log(curElement);
      } else if (curElement >= 7 && number < arr[curElement - 7].index) {
        console.log("You returned more than 7 numbers ! Stage reset!");
        stageReset();
      } else if (curElement >= 4 && number < arr[curElement - 4].index) {
        let skipDelta = arr[curElement].index - number;
        console.log("Return Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(5);
        }
        curElement = number - startNum + 1;
        console.log(arr[curElement].index);
      } else if (number === arr[curElement - 1].index) {
        //CHECK user did doubleclick on one number
        console.log("Double Click Mistake");
        testArray.push(4);
      }
    } else if (color === "red") {
      if (number === arr[curElement].index) {
        curElement = number - startNum + 1;
        console.log("Color change mistake");
        testArray.push(2);
      } else {
        testArray.push(2);
        console.log("Color change mistake");
      }
      let colorChangeErrorArray = testArray.slice(-4);
      console.log(colorChangeErrorArray);
      if (colorChangeErrorArray.toString() === [2, 2, 2, 2].toString()) {
        console.log("Fatal error! Stage reset!");
        stageReset();
      }
    }
  } else if (
    arr[curElement].index === startNum + 24 ||
    number === startNum + 24
  ) {
    console.log(testArray, "Stage completed!");
    localStorage.setItem(
      "Stage1Time",
      JSON.stringify(`Stage 1 time ${labelTimer.textContent}`)
    );
    localStorage.setItem("StageMistakesArray", JSON.stringify(testArray));
    stopTestTimer();
    btnNextStage.removeAttribute("disabled");
    btnNextStage.style.pointerEvents = "auto";
  }
};
export const stageReset = function () {
  stopTestTimer();
  btnInstruction.removeAttribute("disabled");
  btnInstruction.style.pointerEvents = "auto";
  tableSpace.style.pointerEvents = "none";
  btnStart.removeAttribute("disabled");
  btnStart.style.pointerEvents = "auto";
  testArray.length = 0;
  curElement = 0;
};
