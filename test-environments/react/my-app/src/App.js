import React from 'react';
import Handsontable from 'handsontable';
import { HotTable, HotColumn } from '@handsontable/react';
import "handsontable/dist/handsontable.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(25, 26),
        colHeaders: true,
        rowHeaders: true,
        filters: true,
        fixedRowsTop: 2,
        fixedRowsBottom: 2,
        fixedColumnsLeft: 2,
        contextMenu: true,
        dropdownMenu: true,
        licenseKey: 'non-commercial-and-evaluation'
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <h2>Heading</h2>
        <h3>Subheading</h3>
        <HotTable settings={this.state.hotSettings}>
          <HotColumn title="A">
          </HotColumn>
          <HotColumn title="B">
          </HotColumn>
          <HotColumn title="C">
          </HotColumn>
          <HotColumn title="D" />
          <HotColumn title="E" />
          <HotColumn title="F" />
          <HotColumn title="G" />
          <HotColumn title="H" />
          <HotColumn title="I" />
          <HotColumn title="J" />
          <HotColumn title="K" />
        </HotTable>
      </React.Fragment>
    );
  }
}

console.log("Handsontable version:", Handsontable.version, " React-Handsontable version:", HotTable.version)
export default App;
