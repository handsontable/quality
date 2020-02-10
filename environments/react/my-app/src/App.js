import * as React from 'react';
import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.min.css';
import 'handsontable/languages/all.js';
// import numbro from 'numbro';
// import languages from 'numbro/dist/languages.min.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    var dataObj = [
      [1, -1, 'numbers', '=a1-b1', '12/1/2015', '=a1+b1', '=a1-b1', '=a1*b1', '=a1*10'],
      ['2', '20', 'strings converted', '=A2-B2', '5/12/2015', '=A2+B2', '=A2*B2', '=A2/B2', '=a2*10'],
      ['-1', '-10', 'string negatives', null, '10/23/2015', '=A3+B3', '=A3*B3', '=A3/B3', '=a3*10'],
      ['-1', '-10', 'string negatives', null, '10/23/2015', '=A4+B4', '=A4*B4', '=A4/B4', '=a4*10'],
      [0, 0, 'zero', 'zero', '12/1/2014', '=A5+B5', '=A5*B5', '=A5/B5', '=a5*10'],
      [-1, -10, 'negatives numbers', null, '12/1/2016', '=A6+B5', '=A6*B6', '=A6/B6', '=a6*10'],
      [-0, -0, 'negative zero', '', '12/1/2015', '=a7/a7', '=A7*B7', '=A7/B7', '=a7*10'],
      [0, -0, 'zero', null, '12/1/2014', '=A8+B8', '=A8*B8', '=A8/B8', '=a8*10'],
      [-1, -10, 'negatives numbers', null, '12/1/2016', '=A9^B9', '=A9*B9', '=A9/B9'],
      [0.2, 0.1, 'numbers', null, '12/1/2015', '=a10/a10', '=A10*B10', '=A10/B10'],
      [0.2, 0.1, 'strings_converted', null, '5/12/2015', '=A11+B11', '=A11*B11', '=A11/B11'],
      [99999999, 99999, 'numbers, a1 should be 100..', null, '10/23/2015', '=A12+B12', '=A12*B12', '=A12/B12'],
      ['500000.5', '500000,5', 'comma as separator', null, '12/1/2014', '=A13+B13', '=A13*B13', '=A13/B13'],
      [50000000.0, 0.000000001, 'big and small number', null, '12/1/2016', '=A14+B14', '=A14*B14', '=A14/B14']

    ];
    this.state = {
      hotSettings: {
        data: dataObj,
        colHeaders: ['num1', 'num2', 'txt3', 'txt4', 'date5', 'num6', 'price-eur7', 'price-usd8', 'price-pl9'],
        rowHeaders: true,
        fixedRowsTop: 2,
        fixedRowsBottom: 2,
        fixedColumnsLeft: 2,
        contextMenu: true,
        language: 'de-DE',
        licenseKey: '11b3a-340a8-10ec0-64904-67539',
        columns: [
          { type: 'numeric' },    //1
          { type: 'numeric' },    //2
          { type: 'text' },     //3
          { type: 'text' },     //4
          { type: 'date', dateFormat: 'M/D/YYYY' },     //5
          { type: 'numeric' },    //6
          { type: 'numeric',        //7
            numericFormat: {
              pattern: '0,0.00 $',
              languages: 'de-DE'
            }
          },
          { type: 'numeric',      //8
            numericFormat: {
              pattern: '$0,0.00',
              languages: 'en-US'
            }
          },
          { type: 'numeric',      //9
            numericFormat: {
              pattern: '0,0.00 $',
              languages: 'pl-PL'
            }
          }
        ],
        formulas: true,
        manualRowResize: true,
        manualColumnResize: true,
        manualColumnMove: true,
        manualRowMove: true,
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
