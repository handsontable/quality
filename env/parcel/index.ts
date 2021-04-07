import Handsontable from "handsontable";
// import "handsontable/dist/handsontable.full.css";

const container = document.getElementById('example1');
const hot = new Handsontable(container, {
  data: Handsontable.helper.createSpreadsheetData(5,10),
  colHeaders: true,
  rowHeaders: true,
  colWidths: 60,
  nestedHeaders: [
    ['A', {label: 'B', colspan: 8}, 'C'],
    ['D', {label: 'E', colspan: 4}, {label: 'F', colspan: 4}, 'G'],
    ['H', {label: 'I', colspan: 2}, {label: 'J', colspan: 2}, {label: 'K', colspan: 2}, {label: 'L', colspan: 2}, 'M'],
    ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
  ],
  collapsibleColumns: [
    {row: -4, col: 1, collapsible: true},
    {row: -3, col: 1, collapsible: true},
    {row: -2, col: 1, collapsible: true},
    {row: -2, col: 3, collapsible: true}
  ],
});