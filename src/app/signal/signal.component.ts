import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {}
