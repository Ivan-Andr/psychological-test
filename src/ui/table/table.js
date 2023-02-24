'use strict';

export const tableSpace = document.querySelector('.table--space');
export const uiSpace = document.querySelector('.ui--space');

export const table = shuffledArray => {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');
  // creating all cells
  for (let i = 0; i < 7; i++) {
    // creates a table row
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      let k = i * 7 + j;
      const cell = document.createElement('td');
      const cellText = document.createTextNode(shuffledArray[k].index);
      cell.appendChild(cellText);
      cell.setAttribute('id', shuffledArray[k]);

      shuffledArray[k].color === 'red'
        ? (cell.className = 'table_cell_red')
        : (cell.className = 'table_cell_black');
      cell.addEventListener('click', event => {
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
  tbl.setAttribute('border', '1');
};
