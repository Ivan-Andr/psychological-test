"use strict";
import { modal } from "./modal.js";
import { timer } from "./timer.js";
import { form } from "./form.js";
import { langSelect } from "./lang.js";
import { langArr } from "./translation.js";
import { stageReset } from "./logic.js";
export let stageID = 1;
import { tableSpace, uiSpace } from "./table/table.js";
export const btnStart = document.querySelector("#btn--start");
const btnFinish = document.querySelector("#btn--finish");
const btnStop = document.querySelector("#btn--stop");
export const btnInstruction = document.querySelector("#btn--instruction");
export const btnNextStage = document.querySelector("#btn--next");
const btnCloseInstruction = document.querySelector(".close-modal");
export const btnOpenForm = document.querySelector(".login-button");
const btnCloseForm = document.querySelector(".close-modal-form");
const instructionStage1 = document.querySelector("#instruction-stage1");
const instructionStage2 = document.querySelector("#instruction-stage2");
const instructionStage3 = document.querySelector("#instruction-stage3");

const { openModal, closeModal } = modal();
export const { startTestTimer, stopTestTimer } = timer();
const { openModalForm, closeModalForm } = form();

export const startApp = () => {
  btnOpenForm.addEventListener("click", function () {
    openModalForm();
  });
  btnCloseForm.addEventListener("click", closeModalForm);
};

export const buttons = () => {
  btnNextStage.setAttribute("disabled", true);
  btnNextStage.style.pointerEvents = "none";
  btnStart.addEventListener("click", function () {
    const userObjectNew = JSON.parse(localStorage.getItem("user"));
    console.log(userObjectNew);
    const startNum = Number(userObjectNew.tableNumber);
    //console.log(startNum);
    btnInstruction.setAttribute("disabled", true);
    btnInstruction.style.pointerEvents = "none";
    tableSpace.style.pointerEvents = "auto";
    startTestTimer();
    btnNextStage.setAttribute("disabled", true);
    btnNextStage.style.pointerEvents = "none";
    btnStart.setAttribute("disabled", true);
    btnStart.style.pointerEvents = "none";
  });

  btnStop.addEventListener("click", function () {
    stageReset();
  });

  btnInstruction.addEventListener("click", function () {
    openModal();
  });
  btnNextStage.addEventListener("click", function () {
    if (stageID < 3) stageID++;
    console.log(stageID);
    if (stageID === 2) {
      instructionStage2.classList.remove("hidden");
      instructionStage1.classList.add("hidden");
    } else if (stageID === 3) {
      instructionStage3.classList.remove("hidden");
      instructionStage2.classList.add("hidden");
    }
    openModal();
  });

  btnFinish.addEventListener("click", function () {
    let message = "";
    if (langSelect.value === "ru") {
      message = langArr["confirm-window-message"]["ru"];
    } else if (langSelect.value === "uz") {
      message = langArr["confirm-window-message"]["uz"];
    } else {
      message = langArr["confirm-window-message"]["en"];
    }
    if (window.confirm(`${message}`)) {
      localStorage.clear();
      location.reload();
    }
  });
  btnCloseInstruction.addEventListener("click", closeModal);
};
