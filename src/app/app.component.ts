import { httpResource } from '@angular/common/http';
import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  test = httpResource(() => 'https://yaa7olirlc.execute-api.eu-central-1.amazonaws.com/custom')
  title = 'diet';

  constructor() {
    effect(() => {
      console.log(this.test.value());
    });
  }
}
