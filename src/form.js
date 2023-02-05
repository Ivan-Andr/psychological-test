"use strict";
const overlayForm = document.querySelector(".overlay-form");
const showForm = document.querySelector(".modal-form");

export const openForm = function () {
  const openModalForm = function () {
    showForm.classList.remove("hidden");
    overlayForm.classList.remove("hidden");
  };

  const closeModalForm = function () {
    showForm.classList.add("hidden");
    overlayForm.classList.add("hidden");
  };

  overlayForm.addEventListener("click", closeModal);
  return { openModalForm, closeModalForm };
};
