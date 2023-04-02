"use strict";
import { userObject } from "./form.js";
const overlayResult = document.querySelector(".overlay-result");
const modalResult = document.querySelector(".modal-result");
const resultData = document.querySelector("#result-data");
const btnCloseResult = document.querySelector(".close-modal-result");
const userData = `${userObject.lastName} ${userObject.name}\n
Год рождения: ${userObject.birthYear}\n
Профессия: ${userObject.profession}\n
Вариант таблицы: ${userObject.tableNumber}\n
Дата тестирования: ${userObject.testDate}\n`;

export const showResult = function () {
  modalResult.classList.remove("hidden");
  overlayResult.classList.remove("hidden");
  resultData.textContent = `${userData}`;
};
