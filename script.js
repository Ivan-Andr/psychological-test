"use strict";
/*
const redArray = [];
const blackArray = [];
let num = Math.trunc(Math.random() * 25) + 1;
for (let i = 1; redArray.length > 25; i++) {
  if (redArray.includes(num) === false) {
    redArray.push(num);
    num = Math.trunc(Math.random() * 25 + 1);
  }
}
console.log(redArray);
*/
function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table", { class: "table_center" });
  const tblBody = document.createElement("tbody");
  //document.table.classList.add("table_center");
  // creating all cells
  for (let i = 0; i < 7; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td", { class: "my_div" });
      const cellText = document.createTextNode(`row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "1");
}
generateTable();
