import { Component } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
    <hot-table [settings]="hotSettings"></hot-table>
  </div>
  `,
})
export class AppComponent {
  title = 'hotv11';
  hotSettings: Handsontable.GridSettings = {
    data:
      [
        ['A1', 'https://handsontable.com/docs/10.0/img/examples/professional-javascript-developers-nicholas-zakas.jpg'],
        ['A2', 'https://handsontable.com/docs/10.0/img/examples/javascript-the-good-parts.jpg']
      ],
    columns: [
      {},
      {
        renderer(instance, td, row, col, prop, value, cellProperties) {
          const escaped = Handsontable.helper.stringify(value);
          let img = null;

          if (escaped.indexOf('http') === 0) {
            img = document.createElement('IMG');
            img.src = value;

            Handsontable.dom.addEvent(img, 'mousedown', event => {
              event.preventDefault();
            });

            Handsontable.dom.empty(td);
            td.appendChild(img);

          } else {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
          }

          return td;
        }
      }
    ],
    colHeaders: true,
    rowHeights: 55,
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation'
  };
}
