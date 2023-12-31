import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})

export class BoardComponent {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() {
    // this is needed for a game grid to load on page load
    this.newGame();
  }

  // intial setupwork
  ngOnIntit() {
    this.newGame();
  }

  // initialize squares array (size 9) to null
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  // passed into the NgForOf directive to customize how NgForOf uniquely identifies items
  // fixes 
  trackByFn(index: number, item: any): any {
    return index; // or return a unique identifier if available
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number): void {
    // no moves if winner
    if (this.winner && (this.winner.toUpperCase() === 'X' || this.winner.toUpperCase() === 'O')) {
      return;
    }

    // prevent overwriting 
    if(this.squares[idx] != null) return;

    this.squares[idx] = this.player; // Update the square directly by index
    this.xIsNext = !this.xIsNext;

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return "";
  }
}
