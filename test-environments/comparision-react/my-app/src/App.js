import React from 'react';
import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';
import "handsontable/dist/handsontable.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(10, 10),
        colHeaders: true,
        rowHeaders: true,
        fixedRowsTop: 2,
        fixedRowsBottom: 2,
        fixedColumnsLeft: 2,
        contextMenu: true,
        licenseKey: 'non-commercial-and-evaluation'
      }
    };
  }

  render() {
    return (
      <>
        <span id ="test">test</span>
        <HotTable settings={this.state.hotSettings}>
        </HotTable>
      </>
    );
  }
}

console.log("Handsontable version:", Handsontable.version, " React-Handsontable version:", HotTable.version)
export default App;
   