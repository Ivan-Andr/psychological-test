"use strict";
import { tableSpace, uiSpace } from "./table.js";
const overlayForm = document.querySelector(".overlay-form");
const showForm = document.querySelector(".modal-form");
const inputUserName = document.querySelector("#firstName");
const inputUserLastName = document.querySelector("#lastName");
const inputUserBirthYear = document.querySelector("#birthYear");
const inputUserProfession = document.querySelector("#profession");
const inputTestNumber = document.querySelector("#testNumber");
const inputDataForm = document.querySelector(".userDataForm");

let userObject = {
  name: "Name",
  lastName: "Lastname",
  birthYear: 1950,
  profession: "operator",
  tableNumber: 0,
  testDate: new Date(),
};
export const form = function () {
  const openModalForm = function () {
    showForm.classList.remove("hidden");
    overlayForm.classList.remove("hidden");
    //move to another function later
  };

  const submitModalForm = function () {
    tableSpace.style.opacity = 100;
    tableSpace.style.pointerEvents = "auto";
    uiSpace.style.opacity = 100;
    uiSpace.style.pointerEvents = "auto";
    //console.log("form submitted");
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
    //console.log(userObject);
  });
  overlayForm.addEventListener("click", closeModalForm);
  return { openModalForm, closeModalForm };
};
