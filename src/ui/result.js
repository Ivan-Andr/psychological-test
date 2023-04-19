"use strict";
import printJS from "print-js";
import { stageID } from "./buttons";

const btnPrint = document.querySelector("#btn--print");
const overlayResult = document.querySelector(".overlay-result");
const modalResult = document.querySelector(".modal-result");
const btnCloseResult = document.querySelector(".close-modal-result");
const resultUserName = document.querySelector("#user-name");
const resultUserProfession = document.querySelector("#user-profession");
const resultUserBirthYear = document.querySelector("#user-birthyear");
const resultTableVar = document.querySelector("#table-var");
const resultTestDate = document.querySelector("#test-date");
const stage1Array = document.querySelector("#stage1-arr");
const stage2Array = document.querySelector("#stage2-arr");
const stage3Array = document.querySelector("#stage3-arr");
const stage4Array = document.querySelector("#stage4-arr");
const stage1Time = document.querySelector("#stage1-time");
const stage2Time = document.querySelector("#stage2-time");
const stage3Time = document.querySelector("#stage3-time");
const stage4Time = document.querySelector("#stage4-time");
const colorChangeSt1 = document.querySelector("#color-change1");
const colorChangeSt2 = document.querySelector("#color-change2");
const colorChangeSt3 = document.querySelector("#color-change3");
const colorChangeSt4 = document.querySelector("#color-change4");
const skipSt1 = document.querySelector("#skip1");
const skipSt2 = document.querySelector("#skip2");
const skipSt3 = document.querySelector("#skip3");
const skipSt4 = document.querySelector("#skip4");
const returnSt1 = document.querySelector("#return1");
const returnSt2 = document.querySelector("#return2");
const returnSt3 = document.querySelector("#return3");
const returnSt4 = document.querySelector("#return4");
const doubleClickSt1 = document.querySelector("#double-click1");
const doubleClickSt2 = document.querySelector("#double-click2");
const doubleClickSt3 = document.querySelector("#double-click3");
const doubleClickSt4 = document.querySelector("#double-click4");
const resultTime = document.querySelector("#result-time");
export const showResult = function () {
  const userObj = JSON.parse(window.localStorage.getItem("user"));
  const stage1MistakesArray = JSON.parse(window.localStorage.getItem("Stage1MistakesArray"));
  const stage2MistakesArray = JSON.parse(window.localStorage.getItem("Stage2MistakesArray"));
  const stage3MistakesArray = JSON.parse(window.localStorage.getItem("Stage3MistakesArray"));
  const stage4MistakesArray = JSON.parse(window.localStorage.getItem("Stage4MistakesArray"));
  stage1Array.innerText = stage1MistakesArray;
  stage2Array.innerText = stage2MistakesArray;
  stage3Array.innerText = stage3MistakesArray;
  stage4Array.innerText = stage4MistakesArray;
  stage1Time.innerText = JSON.parse(window.localStorage.getItem("Stage1Time"));
  stage2Time.innerText = JSON.parse(window.localStorage.getItem("Stage2Time"));
  stage3Time.innerText = JSON.parse(window.localStorage.getItem("Stage3Time"));
  stage4Time.innerText = JSON.parse(window.localStorage.getItem("Stage4Time"));

  if (stage3MistakesArray) {
    skipSt3.innerText = getMistakes(stage3MistakesArray, 3);
    returnSt3.innerText = getMistakes(stage3MistakesArray, 5);
    doubleClickSt3.innerText = getMistakes(stage3MistakesArray, 4);
    colorChangeSt3.innerText = getMistakes(stage3MistakesArray, 2);
  }
  if (stage1MistakesArray) {
    skipSt1.innerText = getMistakes(stage1MistakesArray, 3);
    returnSt1.innerText = getMistakes(stage1MistakesArray, 5);
    doubleClickSt1.innerText = getMistakes(stage1MistakesArray, 4);
    colorChangeSt1.innerText = getMistakes(stage1MistakesArray, 2);
  }
  if (stage2MistakesArray) {
    skipSt2.innerText = getMistakes(stage2MistakesArray, 3);
    returnSt2.innerText = getMistakes(stage2MistakesArray, 5);
    doubleClickSt2.innerText = getMistakes(stage2MistakesArray, 4);
    colorChangeSt2.innerText = getMistakes(stage2MistakesArray, 2);
  }
  if (stage4MistakesArray) {
    skipSt4.innerText = getMistakes(stage4MistakesArray, 3);
    returnSt4.innerText = getMistakes(stage4MistakesArray, 5);
    doubleClickSt4.innerText = getMistakes(stage4MistakesArray, 4);
    colorChangeSt4.innerText = getMistakes(stage4MistakesArray, 2);
  }

  resultUserName.innerText = `${userObj.lastName} ${userObj.name}`;
  resultUserProfession.innerText = `Специальность: ${userObj.profession}`;
  resultUserBirthYear.innerText = `Год рождения: ${userObj.birthYear}`;
  resultTableVar.innerText = `Вариант теста: ${userObj.tableNumber}`;
  resultTestDate.innerText = `Дата: ${userObj.testDate.slice(0, 10)}`;
  resultTime.innerText = showResultTime();
  modalResult.classList.remove("hidden");
  overlayResult.classList.remove("hidden");
  btnPrint.addEventListener("click", printResult);
  btnCloseResult.addEventListener("click", closeResultModal);
  overlayResult.addEventListener("click", closeResultModal);
};

const closeResultModal = function () {
  modalResult.classList.add("hidden");
  overlayResult.classList.add("hidden");
};

const printResult = function () {
  printJS({
    printable: "result-window",
    type: "html",
    targetStyles: ["*"]
  });
};

const getMistakes = function (arr, num) {
  return arr.filter((item) => item === num).length;
};
const showResultTime = function () {
  let resultTimeStr = "";
  if (stageID === 3) {
    resultTimeStr = `T = C-(A+B) = ${stage3Time.innerText - stage2Time.innerText - stage1Time.innerText}.`;
  } else if (stageID === 4) {
    resultTimeStr = `T = C-(A+B) = ${
      stage3Time.innerText - stage2Time.innerText - stage1Time.innerText
    }. Ty = C' - C = ${stage4Time.innerText - stage3Time.innerText}`;
  }
  return resultTimeStr;
};
