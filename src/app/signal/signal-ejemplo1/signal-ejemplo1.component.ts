import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-ejemplo1',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './signal-ejemplo1.component.html',
  styleUrl: './signal-ejemplo1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalEjemplo1Component {
  name = 'Robert';
  counter = signal<number>(0);

  increaseCounter() {
    this.counter.update((counter) => counter + 1);
  }

  decreaseCounter() {
    this.counter.update((counter) => counter - 1);
  }
}
