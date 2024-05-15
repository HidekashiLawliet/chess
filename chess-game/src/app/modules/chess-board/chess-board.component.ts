import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoard } from '../../chess-logic/chessBoard';
import { Color, PieceType } from '../../chess-logic/model';

@Component({
	selector: 'app-chess-board',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './chess-board.component.html',
	styleUrl: './chess-board.component.css'
})
export class ChessBoardComponent {
	private chessboard = new ChessBoard();
	public chessBoardView: (PieceType | null)[][] = this.chessboard.ChessBoardView;
	public get playerColor(): Color {
		return this.chessboard.PlayerColor;
	}
}
