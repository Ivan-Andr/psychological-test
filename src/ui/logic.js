"use strict";
import { stopTestTimer, btnInstruction, btnNextStage, btnStart, stageID, btnResult } from "./buttons.js";
import { labelTimer } from "./timer.js";
import { tableSpace } from "./table/table.js";
import { mistakeAlert } from "./lang.js";
import { stageEndModal } from "./modal.js";
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
  if (stageID === 3 || stageID === 4) {
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
        curElement1++;
        console.log("Color change mistake");
        console.log(arr[curElement1].index);
        testArray.push(2);
      } else {
        testArray.push(2);
        console.log("Color change mistake");
        index = 48 - index;
      }
      if (stageID === 1) {
        let colorChangeErrorArray = testArray.slice(-4);
        //console.log(colorChangeErrorArray);
        if (colorChangeErrorArray.toString() === [2, 2, 2, 2].toString()) {
          console.log("Color change error! Stage reset!");
          mistakeAlert();
          stageReset();
        }
      } else if (stageID === 3 || stageID === 4) {
        let colorChangeErrorArray = testArray.slice(-8);
        //console.log(colorChangeErrorArray);
        if (colorChangeErrorArray.toString() === [2, 2, 2, 2, 2, 2, 2, 2].toString()) {
          console.log("Color change error! Stage reset!");
          mistakeAlert();
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
      (number === arr[curElement1 + 1].index && curElement1 < 24) ||
      (number === arr[curElement1 + 2].index && curElement1 < 23)
    ) {
      //CHECK if clicked cell is greater than order number
      console.log("Skip Mistake");
      testArray.push(3);
      curElement1 = index + 1;
      console.log(arr[curElement1].index);
    } else if (curElement1 < 19 && number > arr[curElement1 + 6].index) {
      console.log("You skip more than 7 numbers! Stage reset!");
      mistakeAlert();
      stageReset();
    } else if (curElement1 < 22 && number > arr[curElement1 + 2].index) {
      let skipDelta = number - arr[curElement1].index;
      console.log("Skip Mistake2");
      for (let k = 0; k < skipDelta; k++) {
        testArray.push(3);
      }
      curElement1 = index + 1;
      console.log(arr[curElement1].index);
    } else if (curElement1 >= 6 && number < arr[curElement1 - 6].index) {
      console.log("You returned more than 7 numbers ! Stage reset!");
      mistakeAlert();
      stageReset();
    } else if (curElement1 >= 4 && number < arr[curElement1 - 3].index) {
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
        console.log("Return Mistake");
        testArray.push(5);
        curElement1 = index + 1;
        console.log(arr[curElement1].index);
      }
    } else if (number === arr[curElement1 - 1].index && color === "black") {
      console.log("Double Click Mistake");
      testArray.push(4);
    }
  }
  if (stageID === 1) {
    if ((number === startNum + 24 && testArray.length > 10) || curElement1 === 25) {
      console.log(testArray, "Stage completed!");
      localStorage.setItem("Stage1Time", JSON.stringify(labelTimer.textContent));
      localStorage.setItem("Stage1MistakesArray", JSON.stringify(testArray));
      stopTestTimer();
      btnNextStage.removeAttribute("disabled");
      btnNextStage.style.pointerEvents = "auto";
      tableSpace.style.pointerEvents = "none";
      stageEndModal();
    }
  }
};

////////STAGE_2//////////////////////////////
export const stage2Logic = function (number, color, index, startNum, arr) {
  number = Number(number);
  if (arr[curElement2].index <= startNum) {
    if (color === "black") {
      if (number === arr[curElement2].index) {
        if (curElement2 != 48) curElement2++;
        console.log("Color change mistake");
        testArray.push(2);
      } else {
        testArray.push(2);
        console.log("Color change mistake");
        index = 48 - index;
      }
      if (stageID === 2) {
        let colorChangeErrorArray = testArray.slice(-4);
        if (colorChangeErrorArray.toString() === [2, 2, 2, 2].toString()) {
          console.log("Color change error! Stage reset!");
          mistakeAlert();
          stageReset();
        }
      } else if (stageID === 3 || stageID === 4) {
        let colorChangeErrorArray = testArray.slice(-8);
        if (colorChangeErrorArray.toString() === [2, 2, 2, 2, 2, 2, 2, 2].toString()) {
          console.log("Color change error! Stage reset!");
          mistakeAlert();
          stageReset();
        }
      }
    }
    if (number === arr[curElement2].index && color === "red") {
      curElement2++;
      console.log("correct");
      testArray.push(1);
      // console.log(arr[curElement2].index);
    } else if (number === arr[curElement2 - 1].index && color === "red") {
      console.log("Double Click Mistake");
      testArray.push(4);
    } else if (
      (curElement2 < 48 && number === arr[curElement2 + 1].index) ||
      (curElement2 < 47 && number === arr[curElement2 + 2].index)
    ) {
      testArray.push(3);
      curElement2 = index + 1;
      console.log("Skip Mistake");
    } else if (curElement2 < 43 && number <= arr[curElement2 + 6].index) {
      console.log("You skip more than 7 numbers! Stage reset!");
      mistakeAlert();
      stageReset();
    } else if (curElement2 < 46 && number < arr[curElement2 + 2].index) {
      let skipDelta = arr[curElement2].index - number;
      for (let k = 0; k < skipDelta; k++) {
        testArray.push(3);
      }
      console.log(testArray);
      curElement2 = index + 1;
      console.log("Skip Mistake2");
    } else if (curElement2 >= 30 && number >= arr[curElement2 - 6].index) {
      console.log("You returned more than 7 numbers ! Stage reset!");
      mistakeAlert();
      stageReset();
    } else if (curElement2 >= 28 && number >= arr[curElement2 - 4].index) {
      let skipDelta = number - arr[curElement2].index;
      for (let k = 0; k < skipDelta; k++) {
        testArray.push(5);
      }
      curElement2 = index + 1;
      console.log("Return Mistake2");
      //console.log(arr[curElement2].index);
    } else if (curElement2 >= 27) {
      if (number === arr[curElement2 - 2].index || number === arr[curElement2 - 3].index) {
        testArray.push(5);
        curElement2 = index + 1;
        console.log("Return Mistake");
        //console.log(arr[curElement2].index);
      }
    }
  }
  if (stageID === 2) {
    if ((number === startNum - 23 && testArray.length > 10) || curElement2 === 49) {
      console.log(testArray, "Stage completed!");
      tableSpace.style.pointerEvents = "none";
      localStorage.setItem("Stage2Time", JSON.stringify(`${labelTimer.textContent}`));
      localStorage.setItem("Stage2MistakesArray", JSON.stringify(testArray));
      stopTestTimer();
      btnNextStage.removeAttribute("disabled");
      btnNextStage.style.pointerEvents = "auto";
      stageEndModal();
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
  redDecrease = false;
  blackIncrease = false;
  console.log(stageID);
};

////////STAGE_3//////////////////////////////
export const stage3Logic = function (number, color, index, sampleArr) {
  const startNum1 = sampleArr[0].index;
  const startNum2 = sampleArr[25].index;
  if (stage3status === "blackIncrease") {
    stage1Logic(number, color, index, startNum1, sampleArr);
    if (!redDecrease) stage3status = "redDecrease";
    if ((number === startNum1 + 24 && testArray.length > 10) || curElement1 === 25) {
      blackIncrease = true;
      console.log(blackIncrease);
    }
  } else if (stage3status === "redDecrease") {
    stage2Logic(number, color, index, startNum2, sampleArr);
    if (!blackIncrease) stage3status = "blackIncrease";
    if ((number === startNum2 - 23 && testArray.length > 10) || curElement2 === 49) {
      redDecrease = true;
      console.log(redDecrease);
    }
  }
  if (redDecrease && blackIncrease) {
    console.log("Test complete");
    stopTestTimer();
    tableSpace.style.pointerEvents = "none";
    if (stageID === 3) {
      localStorage.setItem("Stage3Time", JSON.stringify(`${labelTimer.textContent}`));
      localStorage.setItem("Stage3MistakesArray", JSON.stringify(testArray));
      btnNextStage.removeAttribute("disabled");
      btnNextStage.style.pointerEvents = "auto";
      stageEndModal();
    } else if (stageID === 4) {
      localStorage.setItem("Stage4Time", JSON.stringify(`${labelTimer.textContent}`));
      localStorage.setItem("Stage4MistakesArray", JSON.stringify(testArray));
      stageEndModal();
    }
    redDecrease = false;
    blackIncrease = false;
    btnResult.removeAttribute("disabled");
    btnResult.style.pointerEvents = "auto";
  }
};
