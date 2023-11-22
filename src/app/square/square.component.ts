import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './square.component.scss',
  template: `
    <button>
      {{ value }}
    </button>
  `,
  styles: ``
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}