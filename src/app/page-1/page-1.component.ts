import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-1',
  imports: [],
  templateUrl: './page-1.component.html',
  styleUrl: './page-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Component {

}
