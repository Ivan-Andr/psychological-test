"use strict";

const tableArr = [
  3, 10, 2, 1, 24, 22, 4, 8, 8, 23, 17, 10, 16, 14, 19, 13, 5, 22, 13, 7, 6, 23,
  14, 25, 9, 19, 21, 21, 12, 18, 2, 15, 1, 5, 11, 18, 7, 9, 12, 20, 16, 17, 24,
  6, 15, 20, 3, 4, 11,
];
const redArray = [
  2, 5, 6, 7, 10, 11, 13, 15, 16, 19, 21, 25, 27, 28, 29, 31, 32, 37, 40, 42,
  43, 45, 46, 48,
];
const tableSpace = document.querySelector ('.table--space');

export function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 7; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      let k = i * 7 + j;
      const cell = document.createElement("td");
      cell.setAttribute("id", `table-cell-${k}`);
      //cell.setAttribute("id", "cellTest");
      const cellText = document.createTextNode(tableArr[k]);
      cell.appendChild(cellText);
      if (redArray.includes(k)) {
        cell.className = "table_cell_red";
      } else {
        cell.className = "table_cell_black";
      }
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
}
const rightSpace = document.querySelector('.ui--space');
const btnStart = document.querySelector (".btn--start");
const btnFinish = document.querySelector(".btn--finish");
btnStart.addEventListener("click", function () {
  console.log("Test started");
});
btnFinish.addEventListener("click", function () {
  console.log("Test finished");
});
