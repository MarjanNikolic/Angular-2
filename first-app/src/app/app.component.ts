import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-databinding></fa-databinding>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'I changed it!';
  address = 'Sopocanska 17';
}
