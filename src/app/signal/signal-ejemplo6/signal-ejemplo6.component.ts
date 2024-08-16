import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { interval, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-ejemplo6',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo6.component.html',
  styleUrl: './signal-ejemplo6.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalEjemplo6Component {
  counter: any;
  counterWithInitialValue: any;
  counterUpTo5: any;

  constructor(private ngZone: NgZone) {
    let counter$ = interval(1000);
    let counter2$ = interval(1000);
    let counter3$ = interval(1000).pipe(take(6));

    this.ngZone.runOutsideAngular(() => {
      this.counter = toSignal(counter$);
      this.counterWithInitialValue = toSignal(counter2$, { initialValue: 5 });
      this.counterUpTo5 = toSignal(counter3$);
    });
  }
}
