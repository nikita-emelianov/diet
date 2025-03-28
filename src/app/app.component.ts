import { httpResource } from '@angular/common/http';
import { Component, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { apiRoot } from './utils/api-root';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
})
export class AppComponent {
  test = httpResource(() => `${apiRoot}/custom`);

  constructor() {
    effect(() => {
      console.log(this.test.value());
    });
  }
}
