'use strict';
import { langArr } from './translation.js';
export const langSelect = document.querySelector('.change-lang');
const languages = ['ru', 'en', 'uz'];
langSelect.addEventListener('change', changeURLLanguage);
function changeURLLanguage() {
  let lang = langSelect.value;
  location.href = window.location.pathname + '#' + lang;
  changeLanguage();
}

export function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  console.log(hash);
  if (!languages.includes(hash)) {
    location.href = window.location.pathname + '#ru';
    location.reload();
  }
  langSelect.value = hash;
  for (let key in langArr) {
    let element = document.querySelector(`#${key}`);
    if (langArr[key][hash] === undefined) {
      langArr[key][hash] = langArr[key]['ru'];
    }
    if (element) {
      element.innerHTML = langArr[key][hash];
    }
  }
}
