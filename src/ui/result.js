"use strict";
const overlayResult = document.querySelector(".overlay-result");
const modalResult = document.querySelector(".modal-result");
const resultData = document.querySelector("#result-data");
const btnCloseResult = document.querySelector(".close-modal-result");

export const showResult = function () {
  const userObj = JSON.parse(window.localStorage.getItem("user"));
  const stage1Array = JSON.parse(window.localStorage.getItem("Stage1MistakesArray"));
  const stage2Array = JSON.parse(window.localStorage.getItem("Stage2MistakesArray"));
  const stage3Array = JSON.parse(window.localStorage.getItem("Stage3MistakesArray"));
  const stage4Array = JSON.parse(window.localStorage.getItem("Stage4MistakesArray"));
  const stage1Time = JSON.parse(window.localStorage.getItem("Stage1Time"));
  const stage2Time = JSON.parse(window.localStorage.getItem("Stage2Time"));
  const stage3Time = JSON.parse(window.localStorage.getItem("Stage3Time"));
  const stage4Time = JSON.parse(window.localStorage.getItem("Stage4Time"));
  const userData = `${userObj.lastName} ${userObj.name} \n
  Год рождения: ${userObj.birthYear} \n
  Профессия: ${userObj.profession} \n
  Вариант таблицы: ${userObj.tableNumber} \n
  Дата тестирования: ${userObj.testDate} \n
  Массив ошибок 1 задания: ${stage1Array} \n
  Время:${stage1Time} \n \n
  Массив ошибок 2 задания: ${stage2Array} \n
  Время:${stage2Time} \n \n
  Массив ошибок 3 задания: ${stage3Array} \n
  Время: ${stage3Time} \n
  Массив ошибок 4 задания: ${stage4Array} \n
  Время: ${stage4Time} \n`;
  modalResult.classList.remove("hidden");
  overlayResult.classList.remove("hidden");
  btnCloseResult.addEventListener("click", closeResultModal);
  overlayResult.addEventListener("click", closeResultModal);
  resultData.innerText = `${userData}`;
};

const closeResultModal = function () {
  modalResult.classList.add("hidden");
  overlayResult.classList.add("hidden");
};
