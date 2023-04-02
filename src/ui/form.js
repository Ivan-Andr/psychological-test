"use strict";

import { btnOpenForm } from "./buttons.js";
import { tableSpace, uiSpace, table } from "./table/table.js";
import { getBlackRedArr, shuffledArray } from "./table/utils.js";
const overlayForm = document.querySelector(".overlay-form");
const showForm = document.querySelector(".modal-form");
const inputUserName = document.querySelector("#firstName");
const inputUserLastName = document.querySelector("#lastName");
const inputUserBirthYear = document.querySelector("#birthYear");
const inputUserProfession = document.querySelector("#professionInput");
const inputTestNumber = document.querySelector("#testNumber");
const inputDataForm = document.querySelector(".userDataForm");
export let userObject = {
  name: "Name",
  lastName: "Lastname",
  birthYear: 1950,
  profession: "operator",
  tableNumber: 0,
  testDate: new Date()
};

export const form = function () {
  const openModalForm = function () {
    showForm.classList.remove("hidden");
    overlayForm.classList.remove("hidden");
  };

  const submitModalForm = function () {
    tableSpace.style.opacity = 100;

    uiSpace.style.opacity = 100;
    uiSpace.style.pointerEvents = "auto";
  };
  const closeModalForm = function () {
    showForm.classList.add("hidden");
    overlayForm.classList.add("hidden");
  };
  const updateUserObject = function () {
    userObject.name = inputUserName.value;
    userObject.lastName = inputUserLastName.value;
    userObject.birthYear = inputUserBirthYear.value;
    userObject.profession = inputUserProfession.value;
    userObject.tableNumber = inputTestNumber.value;
  };
  inputDataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    submitModalForm();
    closeModalForm();
    updateUserObject();
    table(shuffledArray(getBlackRedArr(Number(userObject.tableNumber))));
    window.localStorage.setItem("user", JSON.stringify(userObject));
    btnOpenForm.style.pointerEvents = "none";
  });
  overlayForm.addEventListener("click", closeModalForm);
  return { openModalForm, closeModalForm, userObject };
};
