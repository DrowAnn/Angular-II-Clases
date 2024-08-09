import {
  ChangeDetectionStrategy,
  Component,
  signal,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-signal-ejemplo2',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo2.component.html',
  styleUrl: './signal-ejemplo2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalEjemplo2Component {
  contador = signal(0);
  contador2 = signal(1);

  //   ngOnInit() {
  //     setInterval(() => this.contador.update((contador) => contador + 1), 1000);
  //   }

  //   ngOnDestroy() {
  //     this.contador = signal(0);
  //   }
}
