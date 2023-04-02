"use strict";
import { userObject } from "./form.js";

const overlayResult = document.querySelector(".overlay-result");
const modalResult = document.querySelector(".modal-result");
const resultData = document.querySelector("#result-data");
const btnCloseResult = document.querySelector(".close-modal-result");

export const showResult = function () {
  const userObj = JSON.parse(window.localStorage.getItem("user"));
  const stage1Array = JSON.parse(
    window.localStorage.getItem("Stage1MistakesArray")
  );
  const stage2Array = JSON.parse(
    window.localStorage.getItem("Stage2MistakesArray")
  );
  const stage3Array = JSON.parse(
    window.localStorage.getItem("Stage3MistakesArray")
  );
  const userData = `${userObj.lastName} ${userObj.name} \n
  Год рождения: ${userObj.birthYear} \n
  Профессия: ${userObj.profession} \n
  Вариант таблицы: ${userObj.tableNumber} \n
  Дата тестирования: ${userObj.testDate} \n
  Массив ошибок 1 задания: ${stage1Array} \n
  Массив ошибок 2 задания: ${stage2Array} \n
  Массив ошибок 3 задания: ${stage3Array} \n`;
  modalResult.classList.remove("hidden");
  overlayResult.classList.remove("hidden");
  resultData.innerText = `${userData}`;
};
