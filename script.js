"use strict";
import { table } from "./src/ui/table.js";
import { buttons, startApp } from "./src/ui/buttons.js";
import { changeLanguage } from "./src/ui/lang.js";
table();
buttons();
startApp();
changeLanguage();

const tableArr2 = new Array(49);
const redArr2 = [];
tableArr2.fill(-1);
function arrayFill(startElem) {
  for (let i = startElem; i <= 24 + startElem; i++) {
    let n = Math.floor(Math.random() * 49);
    while (tableArr2[n] >= 0) {
      n = Math.floor(Math.random() * 49);
    }
    tableArr2[n] = i;
  }
  for (let i = startElem; i <= 23 + startElem; i++) {
    let n = Math.floor(Math.random() * 49);
    while (tableArr2[n] >= 0) {
      n = Math.floor(Math.random() * 49);
    }
    tableArr2[n] = i;
    redArr2.push(n);
  }
}
arrayFill(2);
console.log(tableArr2);
console.log(redArr2);
