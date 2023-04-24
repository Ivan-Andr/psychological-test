import { stageID } from "./buttons";

const overlay = document.querySelector(".overlay-instruction");
const showInstruction = document.querySelector(".modal-instruction");
const modalStageEnd = document.querySelector(".modal-stageEnd");
const overlayStageEnd = document.querySelector(".overlay-stageEnd");
const buttonCloseStageEndModal = document.querySelector(".close-modal-stageEnd");
const stage123Modal = document.querySelector("#stage123-modal");
const stage4Modal = document.querySelector("#stage4-modal");
export const modal = () => {
  const openModal = function () {
    showInstruction.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    showInstruction.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  overlay.addEventListener("click", closeModal);
  return { openModal, closeModal };
};
const closeEndStageModal = () => {
  modalStageEnd.classList.add("hidden");
  overlayStageEnd.classList.add("hidden");
};
export const stageEndModal = () => {
  modalStageEnd.classList.remove("hidden");
  overlayStageEnd.classList.remove("hidden");
  if (stageID === 4) {
    stage123Modal.classList.add("hidden");
    stage4Modal.classList.remove("hidden");
  }
  overlayStageEnd.addEventListener("click", closeEndStageModal);
  buttonCloseStageEndModal.addEventListener("click", closeEndStageModal);
};
