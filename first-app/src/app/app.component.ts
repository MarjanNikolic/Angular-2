import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <fa-other></fa-other>
    <mn-third></mn-third>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
}
