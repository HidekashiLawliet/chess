import { Color, Coords, PieceType, safeSquare } from "./model";
import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Piece } from "./pieces/pieces";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";

export class ChessBoard {
    private chessBoard!: (Piece | null)[][];
    private _MainPlayerColor = Color.white;
    private readonly chessBoardSize: number = 8;

    constructor() {
        this.chessBoard = [
            [
                new Rook(Color.white), new Knight(Color.white), new Bishop(Color.white),
                new Queen(Color.white), new King(Color.white), new Bishop(Color.white),
                new Knight(Color.white), new Rook(Color.white),
            ],
            [
                new Pawn(Color.white), new Pawn(Color.white), new Pawn(Color.white),
                new Pawn(Color.white), new Pawn(Color.white), new Pawn(Color.white),
                new Pawn(Color.white), new Pawn(Color.white),
            ],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [
                new Pawn(Color.black), new Pawn(Color.black), new Pawn(Color.black),
                new Pawn(Color.black), new Pawn(Color.black), new Pawn(Color.black),
                new Pawn(Color.black), new Pawn(Color.black),
            ],
            [
                new Rook(Color.black), new Knight(Color.black), new Bishop(Color.black),
                new Queen(Color.black), new King(Color.black), new Bishop(Color.black),
                new Knight(Color.black), new Rook(Color.black),
            ],
        ]
    }

    public get PlayerColor(): Color {
        return this._MainPlayerColor;
    }

    public get ChessBoardView(): (PieceType | null)[][] {
        return this.chessBoard.map(row => {
            return row.map(piece => piece instanceof Piece ? piece._PieceType : null)
        })
    }

    public static darkSquare(x: number, y: number): boolean {
        return x % 2 === 0 && y % 2 === 0 || x % 2 === 1 && y % 2 === 1;
    }


    private areCoordsValid(x: number, y: number): boolean {
        return x >= 0 && x < this.chessBoardSize && y >= 0 && y < this.chessBoardSize;
    }

    public isCheck(PlayerColor: Color): boolean {
        for (let x = 0; x < this.chessBoardSize; x += 1) {
            for (let y = 0; y < this.chessBoardSize; y += 1) {
                const piece: Piece | null = this.chessBoard[x][y];
                if (!piece || piece.color === PlayerColor) continue;

                for (const { x: dx, y: dy } of piece.directions) {
                    let newX: number = x + dx;
                    let newY: number = y + dy;

                    if (!this.areCoordsValid(newX, newY)) continue;
                    if (piece instanceof Pawn || piece instanceof Knight || piece instanceof King) {
                        const attackedPiece: Piece | null = this.chessBoard[newX][newY];
                        if (piece instanceof Pawn && dy === 0) continue;
                        if (attackedPiece instanceof King && attackedPiece.color === PlayerColor) {
                            return true;
                        }
                    } else {
                        while (this.areCoordsValid(newX, newY)) {
                            const attackedPiece: Piece | null = this.chessBoard[newX][newY];
                            if (attackedPiece instanceof King && attackedPiece.color === PlayerColor) {
                                return true;
                            }
                            if (attackedPiece != null) break;
                            newX += dx;
                            newY += dy;
                        }
                    }
                }
            }
        }
        return false;
    }

    private isPostionSafeAfterMove(piece: Piece, prevX: number, prevY: number, newX: number, newY: number): boolean {

        const newPiece: Piece | null = this.chessBoard[newX][newY];

        if (newPiece && newPiece.color === piece.color) {
            return false;
        }

        this.chessBoard[prevX][prevY] = null;
        this.chessBoard[newX][newY] = piece;

        let isSafePos: boolean = !this.isCheck(piece.color);

        this.chessBoard[prevX][prevY] = piece;
        this.chessBoard[newX][newY] = newPiece;

        return isSafePos;
    }

    private findSafeSquare(): safeSquare {
        const safeSquare: safeSquare = new Map<string, Coords[]>();

        for (let x = 0; x < this.chessBoardSize; x += 1) {
            for (let y = 0; y < this.chessBoardSize; y += 1) {
                const piece: Piece | null = this.chessBoard[x][y];
                const pieceSafeSquares: Coords[] = [];

                if (!piece || piece.color === this.PlayerColor) continue;
                for (const { x: dx, y: dy } of piece.directions) {
                    let newX: number = x + dx;
                    let newY: number = y + dy;
                    let newPiece: Piece | null = this.chessBoard[newX][newY];

                    if (!this.areCoordsValid(newX, newY)) continue;

                    if (piece instanceof Pawn) {
                        if (dx === 2 || dx === -2) {
                            if (newPiece) continue;
                            if (this.chessBoard[newX + (dx === 2 ? -1 : 1)][newY]) continue;
                        }
                        if (dx === 1 || dx === -1 && dy === 0 && newPiece) continue;
                        if (dy === 1 || dy === -1 && (!newPiece || piece.color === newPiece.color)) continue;

                        if (piece instanceof Pawn || piece instanceof Knight || piece instanceof King) {
                            if (this.isPostionSafeAfterMove(piece, x, y, newX, newY)) {
                                pieceSafeSquares.push({ x: newX, y: newY });
                            }
                        } else {
                            while (this.areCoordsValid(newX, newY)) {
                                newPiece = this.chessBoard[newX][newY];
                                if (newPiece && newPiece.color === piece.color) break;
                                if (this.isPostionSafeAfterMove(piece, x, y, newX, newY)) {
                                    pieceSafeSquares.push({ x: newX, y: newY });
                                }
                                if (newPiece != null) break;
                                newX += dx;
                                newY += dy;
                            }
                        }
                    }

                    if (pieceSafeSquares.length) {
                        safeSquare.set(x + ',' + y, pieceSafeSquares);
                    }
                }
            }
            return safeSquare;
        }
    }
