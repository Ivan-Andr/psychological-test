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
let curElement2 = 25;
const testArray = [];
let stage3status = "blackIncrease"; //// 'redDecrease'
let redDecrease = false;
let blackIncrease = false;
export function stagesLogic(number, color) {
  const sampleArr = JSON.parse(window.localStorage.getItem("blackRedArr"));
  let index;
  for (let i = 0; i < sampleArr.length; i++) {
    if (sampleArr[i].index === number && sampleArr[i].color === color) {
      index = i;
    }
  }

  if (stageID === 1) {
    const startNum1 = sampleArr[0].index;
    stage1Logic(number, color, index, startNum1, sampleArr);
  }
  if (stageID === 2) {
    const startNum2 = sampleArr[25].index;
    stage2Logic(number, color, index, startNum2, sampleArr);
  }
  if (stageID === 3) {
    stage3Logic(number, color, index, sampleArr);
  }
}

////////STAGE_1//////////////////////////////
export const stage1Logic = function (number, color, index, startNum, arr) {
  //CHECK if clicked cell is in correct order
  number = Number(number);

  if (curElement1 < 25) {
    if (color === "red") {
      if (number === arr[curElement1].index) {
        curElement1 = 48 - index + 1;
        console.log(arr[curElement1].index);
        console.log("Color change mistake");
        testArray.push(2);
      } else {
        testArray.push(2);
        console.log("Color change mistake");
        index = 48 - index;
      }
      if (stageID === 1) {
        let colorChangeErrorArray = testArray.slice(-4);
        console.log(colorChangeErrorArray);
        if (colorChangeErrorArray.toString() === [2, 2, 2, 2].toString()) {
          console.log("Color changr error! Stage reset!");
          stageReset();
        }
      } else if (stageID === 3) {
        let colorChangeErrorArray = testArray.slice(-8);
        console.log(colorChangeErrorArray);
        if (
          colorChangeErrorArray.toString() ===
          [2, 2, 2, 2, 2, 2, 2, 2].toString()
        ) {
          console.log("Color change error! Stage reset!");
          stageReset();
        }
      }
    }
    if (number === arr[curElement1].index && color === "black") {
      console.log("correct");
      testArray.push(1);
      curElement1++;
      console.log(arr[curElement1].index);
    } else if (
      number === arr[curElement1 + 1].index ||
      number === arr[curElement1 + 2].index
    ) {
      //CHECK if clicked cell is greater than order number
      console.log("Skip Mistake");
      testArray.push(3);
      curElement1 = index + 1;
      console.log(arr[curElement1].index);
    } else if (curElement1 < 18 && number > arr[curElement1 + 7].index) {
      console.log("You skip more than 7 numbers! Stage reset!");
      stageReset();
    } else if (number > arr[curElement1 + 2].index) {
      let skipDelta = number - arr[curElement1].index;
      console.log("Skip Mistake2");
      for (let k = 0; k < skipDelta; k++) {
        testArray.push(3);
      }
      console.log(testArray);
      curElement1 = index + 1;
      console.log(arr[curElement1].index);
    } else if (curElement1 >= 7 && number < arr[curElement1 - 7].index) {
      console.log("You returned more than 7 numbers ! Stage reset!");
      stageReset();
    } else if (curElement1 >= 4 && number < arr[curElement1 - 4].index) {
      let skipDelta = arr[curElement1].index - number;
      console.log("Return Mistake2");
      for (let k = 0; k < skipDelta; k++) {
        testArray.push(5);
      }
      curElement1 = index + 1;
      console.log(arr[curElement1].index);
    } else if (
      (curElement1 >= 3 && number === arr[curElement1 - 3].index) ||
      (curElement1 >= 2 && number === arr[curElement1 - 2].index)
    ) {
      {
        //CHECK if clicked cell is less than order number
        console.log("Return Mistake");
        testArray.push(5);
        curElement1 = index + 1;
        console.log(arr[curElement1].index);
      }
    } else if (number === arr[curElement1 - 1].index && color === "black") {
      //CHECK user did doubleclick on one number
      console.log("Double Click Mistake");
      testArray.push(4);
    }
  }
  if (stageID === 1) {
    if (
      (number === startNum + 24 && testArray.length > 10) ||
      curElement1 === 25
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
      tableSpace.style.pointerEvents = "none";
    }
  }
};

////////STAGE_2//////////////////////////////
export const stage2Logic = function (number, color, index, startNum, arr) {
  number = Number(number);
  if (arr[curElement2].index <= startNum) {
    if (color === "black") {
      if (number === arr[curElement2].index) {
        curElement2 = 48 - index + 1;
        console.log("Color change mistake");
        testArray.push(2);
        console.log(`Next ${arr[curElement2].index}`);
      } else {
        testArray.push(2);
        console.log("Color change mistake");
        index = 48 - index;
      }
      if (stageID === 2) {
        let colorChangeErrorArray = testArray.slice(-4);
        console.log(colorChangeErrorArray);
        if (colorChangeErrorArray.toString() === [2, 2, 2, 2].toString()) {
          console.log("Color changr error! Stage reset!");
          stageReset();
        }
      } else if (stageID === 3) {
        let colorChangeErrorArray = testArray.slice(-8);
        console.log(colorChangeErrorArray);
        if (
          colorChangeErrorArray.toString() ===
          [2, 2, 2, 2, 2, 2, 2, 2].toString()
        ) {
          console.log("Color change error! Stage reset!");
          stageReset();
        }
      }
    } else if (number === arr[curElement2].index && color === "red") {
      curElement2++;
      console.log("correct");
      testArray.push(1);
    } else if (number === arr[curElement2 - 1].index && color === "red") {
      //CHECK user did doubleclick on one number
      console.log("Double Click Mistake");
      testArray.push(4);
    } else if (
      number === arr[curElement2 + 1].index ||
      number === arr[curElement2 + 2].index
    ) {
      //CHECK if clicked cell is greater than order number
      testArray.push(3);
      curElement2 = index + 1;
      console.log("Skip Mistake");
      // console.log(arr[curElement2].index);
    } else if (curElement2 < 42 && number <= arr[curElement2 + 7].index) {
      console.log("You skip more than 7 numbers! Stage reset!");
      stageReset();
    } else if (number < arr[curElement2 + 2].index) {
      let skipDelta = arr[curElement2].index - number;
      for (let k = 0; k < skipDelta; k++) {
        testArray.push(3);
      }
      console.log(testArray);
      curElement2 = index + 1;
      console.log("Skip Mistake2");
      // console.log(arr[curElement2].index);
    } else if (curElement2 >= 31 && number >= arr[curElement2 - 7].index) {
      console.log("You returned more than 7 numbers ! Stage reset!");
      stageReset();
    } else if (curElement2 >= 28 && number >= arr[curElement2 - 4].index) {
      let skipDelta = number - arr[curElement2].index;
      for (let k = 0; k < skipDelta; k++) {
        testArray.push(5);
      }
      curElement2 = index + 1;
      console.log("Return Mistake2");
      console.log(arr[curElement2].index);
    } else if (curElement2 >= 27) {
      if (
        number === arr[curElement2 - 2].index ||
        number === arr[curElement2 - 3].index
      ) {
        //CHECK if clicked cell is less than order number
        testArray.push(5);
        curElement2 = index + 1;
        console.log("Return Mistake");
        console.log(arr[curElement2].index);
      }
    }
  }
  if (stageID === 2) {
    if (
      (number === startNum - 23 && testArray.length > 10) ||
      curElement2 === 49
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
  }
};

////////STAGE_RESET//////////////////////////////
export const stageReset = function () {
  stopTestTimer();
  btnInstruction.removeAttribute("disabled");
  btnInstruction.style.pointerEvents = "auto";
  tableSpace.style.pointerEvents = "none";
  btnStart.removeAttribute("disabled");
  btnStart.style.pointerEvents = "auto";
  testArray.length = 0;
  curElement1 = 0;
  curElement2 = 25;
  stage3status = "blackIncrease";
};

////////STAGE_3//////////////////////////////
export const stage3Logic = function (number, color, index, sampleArr) {
  const startNum1 = sampleArr[0].index;
  const startNum2 = sampleArr[25].index;
  if (stage3status === "blackIncrease") {
    stage1Logic(number, color, index, startNum1, sampleArr);
    if (!redDecrease) stage3status = "redDecrease";
    if (
      (number === startNum1 + 24 && testArray.length > 10) ||
      curElement1 === 25
    ) {
      blackIncrease = true;
      console.log(blackIncrease);
    }
  } else if (stage3status === "redDecrease") {
    stage2Logic(number, color, index, startNum2, sampleArr);
    if (!blackIncrease) stage3status = "blackIncrease";
    if (
      (number === startNum2 - 23 && testArray.length > 10) ||
      curElement2 === 49
    ) {
      redDecrease = true;
      console.log(redDecrease);
    }
  }
  if (redDecrease && blackIncrease) {
    console.log("Test complete");
    localStorage.setItem(
      "Stage3Time",
      JSON.stringify(`Stage 3 time ${labelTimer.textContent}`)
    );
    localStorage.setItem("Stage3MistakesArray", JSON.stringify(testArray));
    stopTestTimer();
    redDecrease = false;
    blackIncrease = false;
  }
};
