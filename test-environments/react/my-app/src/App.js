import React from 'react';
import Handsontable from 'handsontable';
// import { RendererComponent, OtherRendererComponent } from "./rendererComponent";
import { HotTable, HotColumn } from '@handsontable/react';
import "handsontable/dist/handsontable.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(10, 11),
        colHeaders: true,
        rowHeaders: true,
        // width: 300,
        // height: 300,
        colWidths: 100,
        filters: true,
        fixedColumnsLeft: 2,
        // licenseKey: ,
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
            {/* <RendererComponent hot-renderer /> */}
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

console.log("Handsontable version: ", Handsontable.version, " React-Handsontable version: ", HotTable.version)
export default App;
