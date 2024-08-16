import {
  ChangeDetectionStrategy,
  Component,
  signal,
  NgZone,
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
  counter = signal(0);
  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.counter.update((count) => count + 1);
        });
      }, 800);
    });
  }
}
