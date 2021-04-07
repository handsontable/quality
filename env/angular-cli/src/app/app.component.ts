import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
    <hot-table
      class="hot"
      [data]="dataset"
      [colHeaders]="true"
      [rowHeaders]="true">
        <hot-column data="id" [readOnly]="true" title="ID"></hot-column>
        <hot-column data="name" title="Full name"></hot-column>
        <hot-column data="address" title="Street name"></hot-column>
    </hot-table>
  </div>
  `,
})
export class AppComponent {
  title = 'angular-cli';
}
