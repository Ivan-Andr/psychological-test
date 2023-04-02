/* eslint-disable */
//TODO remove the line above

export const stage2Logic = function (number, curElement2, color, index, startNum, arr) {
  //CHECK if clicked cell is in correct order
  if (arr[curElement2].index <= startNum) {
    if (color === "red") {
      if (number === arr[curElement2].index) {
        console.log("correct");
        return { inputArray: [1], curElement2: curElement2++ };
        // testArray.push(1);
        // curElement2++;
      } else if (number === arr[curElement2 + 1].index || number === arr[curElement2 + 2].index) {
        //CHECK if clicked cell is greater than order number
        console.log("Skip Mistake");
        return { inputArray: [3], curElement2: index + 1 };
        // testArray.push(3);
        // curElement2 = index + 1;
        // console.log(arr[curElement2].index);
      } else if (curElement2 < 42 && number < arr[curElement2 + 7].index) {
        console.log("You skip more than 7 numbers! Stage reset!");
        return { inputArray: [10], curElement2 };
        // stageReset();
      } else if (number < arr[curElement2 + 2].index) {
        let skipDelta = number - arr[curElement2].index;
        console.log("Skip Mistake2");
        const testArray = [];
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(3);
        }
        return { inputArray: testArray, curElement2: index + 1 };
        // curElement2 = index + 1;
        // console.log(arr[curElement2].index);
      } else if (curElement2 >= 27) {
        if (number === arr[curElement2 - 2].index || number === arr[curElement2 - 3].index) {
          //CHECK if clicked cell is less than order number
          console.log("Return Mistake");
          testArray.push(5);
          curElement2 = index + 1;
          console.log(curElement2);
        }
      } else if (curElement2 >= 31 && number > arr[curElement2 - 7].index) {
        console.log("You returned more than 7 numbers ! Stage reset!");
        stageReset();
      } else if (curElement2 >= 28 && number > arr[curElement2 - 4].index) {
        let skipDelta = number - arr[curElement2].index;
        console.log("Return Mistake2");
        for (let k = 0; k < skipDelta; k++) {
          testArray.push(5);
        }
        curElement2 = index + 1;
        console.log(arr[curElement2].index);
      } else if (number === arr[curElement2 - 1].index) {
        //CHECK user did doubleclick on one number
        console.log("Double Click Mistake");
        testArray.push(4);
      }
    } else if (color === "black") {
      if (number === arr[curElement2].index) {
        curElement2 = 48 - index + 1;
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
  } else if (arr[curElement2].index === startNum - 23 || number === startNum - 23) {
    console.log(testArray, "Stage completed!");
    localStorage.setItem("Stage2Time", JSON.stringify(`Stage 2 time ${labelTimer.textContent}`));
    localStorage.setItem("Stage2MistakesArray", JSON.stringify(testArray));
    stopTestTimer();
    btnNextStage.removeAttribute("disabled");
    btnNextStage.style.pointerEvents = "auto";
  }
};
