"use strict";
import { langArr } from "./translation.js";
const langSelect = document.querySelector(".change-lang");
const languages = ["ru", "en", "uz"];
langSelect.addEventListener("change", changeURLLanguage);
export function changeURLLanguage() {
  let lang = langSelect.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
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
  // document.querySelector(".first-name").innerHTML = langArr["first-name"][hash];
  for (let key in langArr) {
    let element = document.querySelector(`.${key}`);
    if (element) {
      element.innerHTML = langArr[key][hash];
    }
  }
}
