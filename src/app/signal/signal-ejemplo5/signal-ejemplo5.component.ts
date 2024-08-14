import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-ejemplo5',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './signal-ejemplo5.component.html',
  styleUrl: './signal-ejemplo5.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalEjemplo5Component {
  toDoName = '';
  toDos: WritableSignal<string[]> = signal([]);

  addToDo(toDo: HTMLInputElement) {
    const item = toDo.value;
    this.updateToDos(item);
    this.resetAndFocus(toDo);
  }

  updateToDos(toDo: string) {
    this.toDos.update((toDos) => [toDo, ...toDos]);
  }

  resetAndFocus(toDo: HTMLInputElement) {
    toDo.value = '';
    toDo.focus();
  }
}
