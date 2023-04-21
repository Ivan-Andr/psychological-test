"use strict";
import { langArr } from "./translation.js";
export const langSelect = document.querySelector(".change-lang");
const languages = ["ru", "en", "uz"];
langSelect.addEventListener("change", changeURLLanguage);
//const stageIDLabel = document.querySelector("#stage-ID");
function changeURLLanguage() {
  let lang = langSelect.value;
  location.href = window.location.pathname + "#" + lang;
  changeLanguage();
}

export function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  console.log(hash);
  if (!languages.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  langSelect.value = hash;
  for (let key in langArr) {
    let element = document.querySelector(`#${key}`);
    if (langArr[key][hash] === undefined) {
      langArr[key][hash] = langArr[key]["ru"];
    }
    if (element) {
      element.innerHTML = langArr[key][hash];
    }
  }
}

export function mistakeAlert() {
  let messageAlert = "";
  if (langSelect.value === "ru") {
    messageAlert = langArr["mistakeAlertMessage"]["ru"];
  } else if (langSelect.value === "uz") {
    messageAlert = langArr["mistakeAlertMessage"]["uz"];
  } else {
    messageAlert = langArr["mistakeAlertMessage"]["en"];
  }
  alert(messageAlert);
}

// export function showStageID() {
//   if (langSelect.value === "ru") {
//     stageIDLabel.innerText = `Этап ${stageID}`;
//   } else if (langSelect.value === "uz") {
//     stageIDLabel.innerText = `Vazifa ${stageID}`;
//   } else {
//     stageIDLabel.innerText = `Stage ${stageID}`;
//   }
// }
