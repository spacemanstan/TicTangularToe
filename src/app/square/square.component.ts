import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{ value }}
    </p>
  `,
  styles: ``
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}