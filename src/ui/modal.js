const overlay = document.querySelector(".overlay-instruction");
const showInstruction = document.querySelector(".modal-instruction");

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
