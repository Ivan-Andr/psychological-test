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
let curElement1 = 0;
let curElement2 = 48;
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
  if (stageID === 2) {
    const startNum2 = sampleArr[48].index;
    stage2Logic(number, color, startNum2, sampleArr);
  }
  // (stageID === 3) {
  //   stage3Logic(number, color, startNum);
  // }
}
export const stage1Logic = function (number, color, startNum, arr) {
  //CHECK if clicked cell is in correct order
  number = Number(number);
  if (arr[curElement1].index < startNum + 24) {
    if (color === "black") {
      if (number === arr[curElement1].index) {
        console.log("correct");
        testArray.push(1);
        curElement1++;
        console.log(arr[curElement1].index);
        //console.log(arr.indexOf(number));
      } else if (
        number === arr[curElement1 + 1].index ||
        number === arr[curElement1 + 2].index
      ) {
        //CHECK if clicked cell is greater than order number
        console.log("Skip Mistake");
        testArray.push(3);
        curElement1 = number - startNum + 1;
        console.log(arr[curElement1].index);
      } else if (curElement1 < 19 && number > arr[curElement1 + 6].index) {
        console.log("You skip more than 7 numbers! Stage reset!");
        stageReset();
      } else if (number > arr[curElement1 + 2].index) {
        let skipDelta = number - arr[curElement1].index;
        console.log("Skip Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(3);
        }
        curElement1 = number - startNum + 1;
        console.log(arr[curElement1].index);
      } else if (
        number === arr[curElement1 - 2].index ||
        number === arr[curElement1 - 3].index
      ) {
        //CHECK if clicked cell is less than order number
        console.log("Return Mistake");
        testArray.push(5);
        curElement1 = number - startNum + 1;
        console.log(curElement1);
      } else if (curElement1 >= 7 && number < arr[curElement1 - 7].index) {
        console.log("You returned more than 7 numbers ! Stage reset!");
        stageReset();
      } else if (curElement1 >= 4 && number < arr[curElement1 - 4].index) {
        let skipDelta = arr[curElement1].index - number;
        console.log("Return Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(5);
        }
        curElement1 = number - startNum + 1;
        console.log(arr[curElement1].index);
      } else if (number === arr[curElement1 - 1].index) {
        //CHECK user did doubleclick on one number
        console.log("Double Click Mistake");
        testArray.push(4);
      }
    } else if (color === "red") {
      if (number === arr[curElement1].index) {
        curElement1 = number - startNum + 1;
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
    arr[curElement1].index === startNum + 24 ||
    number === startNum + 24
  ) {
    console.log(testArray, "Stage completed!");
    localStorage.setItem(
      "Stage1Time",
      JSON.stringify(`Stage 1 time ${labelTimer.textContent}`)
    );
    localStorage.setItem("Stage1MistakesArray", JSON.stringify(testArray));
    stopTestTimer();
    btnNextStage.removeAttribute("disabled");
    btnNextStage.style.pointerEvents = "auto";
  }
};

export const stage2Logic = function (number, color, startNum, arr) {
  //CHECK if clicked cell is in correct order
  number = Number(number);
  if (arr[curElement2].index > startNum - 24) {
    if (color === "red") {
      if (number === arr[curElement2].index) {
        console.log("correct");
        testArray.push(1);
        curElement2--;
      } else if (
        number === arr[curElement2 - 1].index ||
        number === arr[curElement2 - 2].index
      ) {
        //CHECK if clicked cell is greater than order number
        console.log("Skip Mistake");
        testArray.push(3);
        curElement2 = 24 + number - startNum;
        console.log(arr[curElement2].index);
      } else if (curElement2 > 30 && number > arr[curElement2 - 6].index) {
        console.log("You skip more than 7 numbers! Stage reset!");
        stageReset();
      } else if (number < arr[curElement2 - 2].index) {
        let skipDelta = arr[curElement2].index - number;
        console.log("Skip Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(3);
        }
        curElement2 = arr.indexOf(number) - 1;
        console.log(arr[curElement2].index);
      } else if (
        number === arr[curElement2 + 2].index ||
        number === arr[curElement2 + 3].index
      ) {
        //CHECK if clicked cell is less than order number
        console.log("Return Mistake");
        testArray.push(5);
        curElement2 = 24 + number - startNum;
        console.log(curElement2);
      } else if (curElement2 <= 42 && number > arr[curElement2 + 7].index) {
        console.log("You returned more than 7 numbers ! Stage reset!");
        stageReset();
      } else if (curElement2 <= 45 && number < arr[curElement2 + 4].index) {
        let skipDelta = arr[curElement2].index - number;
        console.log("Return Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(5);
        }
        curElement2 = arr.indexOf(number) - 1;
        console.log(arr[curElement2].index);
      } else if (number === arr[curElement2 + 1].index) {
        //CHECK user did doubleclick on one number
        console.log("Double Click Mistake");
        testArray.push(4);
      }
    } else if (color === "black") {
      if (number === arr[curElement2].index) {
        curElement2 = 24 + number - startNum;
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
    arr[curElement2].index === startNum - 24 ||
    number === startNum - 23
  ) {
    console.log(testArray, "Stage completed!");
    localStorage.setItem(
      "Stage2Time",
      JSON.stringify(`Stage 2 time ${labelTimer.textContent}`)
    );
    localStorage.setItem("Stage2MistakesArray", JSON.stringify(testArray));
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
  curElement1 = 0;
  curElement2 = 48;
};
