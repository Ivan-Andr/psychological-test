"use strict";
import { tableSpace, uiSpace } from "./table.js";
const overlayForm = document.querySelector(".overlay-form");
const showForm = document.querySelector(".modal-form");

export const openForm = function () {
  const openModalForm = function () {
    showForm.classList.remove("hidden");
    overlayForm.classList.remove("hidden");
    //move to another function later
    tableSpace.style.opacity = 100;
    tableSpace.style.pointerEvents = "auto";
    uiSpace.style.opacity = 100;
    uiSpace.pointerEvents = "auto";
  };

  const closeModalForm = function () {
    showForm.classList.add("hidden");
    overlayForm.classList.add("hidden");
  };

  overlayForm.addEventListener("click", closeModalForm);
  return { openModalForm, closeModalForm };
};
