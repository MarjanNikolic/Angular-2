import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <fa-other></fa-other>
    <fa-third></fa-third>
    <fa-another>
      <div>
        <h1>Hello</h1>
        <p>World!</p>
      </div>
    </fa-another>
    <fa-another>
      <p>Something else</p>
    </fa-another>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'I changed it!';
}
