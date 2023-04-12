"use strict";
const overlayResult = document.querySelector(".overlay-result");
const modalResult = document.querySelector(".modal-result");
//const resultData = document.querySelector("#result-data");
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

export const showResult = function () {
  const userObj = JSON.parse(window.localStorage.getItem("user"));
  stage1Array.innerText = JSON.parse(window.localStorage.getItem("Stage1MistakesArray"));
  stage2Array.innerText = JSON.parse(window.localStorage.getItem("Stage2MistakesArray"));
  stage3Array.innerText = JSON.parse(window.localStorage.getItem("Stage3MistakesArray"));
  stage4Array.innerText = JSON.parse(window.localStorage.getItem("Stage4MistakesArray"));
  stage1Time.innerText = JSON.parse(window.localStorage.getItem("Stage1Time"));
  stage2Time.innerText = JSON.parse(window.localStorage.getItem("Stage2Time"));
  stage3Time.innerText = JSON.parse(window.localStorage.getItem("Stage3Time"));
  stage4Time.innerText = JSON.parse(window.localStorage.getItem("Stage4Time"));

  resultUserName.innerText = `${userObj.lastName} ${userObj.name}`;
  resultUserProfession.innerText = userObj.profession;
  resultUserBirthYear.innerText = userObj.birthYear;
  resultTableVar.innerText = userObj.tableNumber;
  resultTestDate.innerText = userObj.testDate;

  modalResult.classList.remove("hidden");
  overlayResult.classList.remove("hidden");
  btnCloseResult.addEventListener("click", closeResultModal);
  overlayResult.addEventListener("click", closeResultModal);
  //resultData.innerText = `${userData}`;
};

const closeResultModal = function () {
  modalResult.classList.add("hidden");
  overlayResult.classList.add("hidden");
};
