"use strict";
import { userObject } from "./form.js";
// const tableArr = [
//   3, 10, 2, 1, 24, 22, 4, 8, 8, 23, 17, 10, 16, 14, 19, 13, 5, 22, 13, 7, 6, 23,
//   14, 25, 9, 19, 21, 21, 12, 18, 2, 15, 1, 5, 11, 18, 7, 9, 12, 20, 16, 17, 24,
//   6, 15, 20, 3, 4, 11,
// ];

// const redArray = [
//   2, 5, 6, 7, 10, 11, 13, 15, 16, 19, 21, 25, 27, 28, 29, 31, 32, 37, 40, 42,
//   43, 45, 46, 48,
// ];

//////////////////var1/////////////
// const tableArr2 = new Array(49);
// const redArr2 = [];
// tableArr2.fill(-1);
// function arrayFill(startElem) {
//   for (let i = startElem; i <= 24 + startElem; i++) {
//     let n = Math.floor(Math.random() * 49);
//     while (tableArr2[n] >= 0) {
//       n = Math.floor(Math.random() * 49);
//     }
//     tableArr2[n] = i;
//   }
//   for (let i = startElem; i <= 23 + startElem; i++) {
//     let n = Math.floor(Math.random() * 49);
//     while (tableArr2[n] >= 0) {
//       n = Math.floor(Math.random() * 49);
//     }
//     tableArr2[n] = i;
//     redArr2.push(n);
//   }
// }
// //to start test with 1 - arrayFill(1), to start test with 2 - arrayFill(2) etc.
// arrayFill(2);
///////var2////////////
let blackRedArr = [];
// let startElem = userObject.tableNumber;
// console.log(startElem, typeof startElem);
function arrayFill(startEl) {
  const blackArr = [];
  const redArr = [];
  for (let i = startEl; i <= 24 + startEl; i++) {
    blackArr.push({ index: i, color: "black" });
  }
  for (let i = startEl; i <= 23 + startEl; i++) {
    redArr.push({ index: i, color: "red" });
  }
  blackRedArr = blackArr.concat(redArr);
  shuffle(blackRedArr);
  return blackRedArr;
}
arrayFill(1);

export const tableSpace = document.querySelector(".table--space");
export const uiSpace = document.querySelector(".ui--space");

export const table = () => {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  //shuffle(tableArr2);
  // shuffle(redArray);
  // creating all cells
  for (let i = 0; i < 7; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      let k = i * 7 + j;
      const cell = document.createElement("td");
      const cellText = document.createTextNode(blackRedArr[k].index);
      cell.appendChild(cellText);
      cell.setAttribute("id", blackRedArr[k]);
      // if (redArr2.includes(k)) {
      //   cell.className = "table_cell_red";
      // } else {
      //   cell.className = "table_cell_black";
      // }
      blackRedArr[k].color === "red"
        ? (cell.className = "table_cell_red")
        : (cell.className = "table_cell_black");
      cell.addEventListener("click", (event) => {
        console.log(`${event.target.innerText} ${event.target.className}`);
      });
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  tableSpace.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "1");
};
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
