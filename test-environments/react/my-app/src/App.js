import React from 'react';
import Handsontable from 'handsontable';
import { HotTable, HotColumn } from '@handsontable/react';
import "handsontable/dist/handsontable.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);

    var dataObj = [
      [1, -1, 'numbers', '=a1-b1', '12/1/2015', '=a1+b1', '=a1-b1', '=a1*b1'],
      ['2', '20', 'strings converted', '=A2-B2', '5/12/2015', '=A2+B2', '=A2*B2', '=A2/B2'],
      ['-1', '-10', 'string negatives', null, '10/23/2015', '=A3+B3', '=A3*B3', '=A3/B3'],
      ['-1', '-10', 'string negatives', null, '10/23/2015', '=A4+B4', '=A4*B4', '=A4/B4'],
      [0, 0, 'zero', 'zero', '12/1/2014', '=A5+B5', '=A5*B5', '=A5/B5'],
      [-1, -10, 'negatives numbers', null, '12/1/2016', '=A5+B5', '=A2*B3', '=A2/B3'],
      [-0, -0, 'negative zero', '', '12/1/2015', '=a6/a7', '=A6*B6', '=A6/B6'],
      [0, -0, 'zero', null, '12/1/2014', '=A7+B7', '=A7*B7', '=A7/B7'],
      [-1, -10, 'negatives numbers', null, '12/1/2016', '=A8^B8', '=A8*B8', '=A8/B8'],
      [0.2, 0.1, 'numbers', null, '12/1/2015', '=a9/a9', '=A9*B9', '=A9/B9'],
      [0.2, 0.1, 'strings_converted', null, '5/12/2015', '=A10+B10', '=A10*B10', '=A10/B10'],
      [9999999999999999, 999999999999999, 'numbers, a1 should be 100..', null, '10/23/2015', '=A11+B11', '=A11*B11', '=A2/B3'],
      ['500000.5', '500000,5', 'comma as separator', null, '12/1/2014', '=A4+B5', '=A12*B13', '=A12/B13'],
      [50000000000000000.0, 0.000000001, 'big and small number', null, '12/1/2016', '=A13+B12', '=A13*B13', '=A13/B13']

    ];
    this.state = {
      hotSettings: {
        data: dataObj,
        colHeaders: true,
        rowHeaders: true,
        fixedRowsTop: 2,
        fixedRowsBottom: 2,
        fixedColumnsLeft: 2,
        contextMenu: true,
        licenseKey: 'non-commercial-and-evaluation',
        columns: [
          { type: 'numeric' },
          { type: 'numeric' },
          { type: 'text' },
          { type: 'text' },
          { type: 'date', dateFormat: 'M/D/YYYY' },
          { type: 'numeric' },
          { type: 'numeric' },
          { type: 'numeric' },
          { type: 'numeric' },
        ],
        formulas: true,
      }
    };
  }

  render() {
    return (
      <>
        <HotTable settings={this.state.hotSettings}>
        </HotTable>
      </>
    );
  }
}

console.log("Handsontable version:", Handsontable.version, " React-Handsontable version:", HotTable.version)
export default App;
