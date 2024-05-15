import { PieceType, Coords, Color } from "../model";
import { Piece } from "./pieces";

export class Queen extends Piece {
    override _PieceType!: PieceType;
    override _Coords: Coords[] = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },

        { x: 1, y: 1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 },

    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._PieceType = pieceColor === Color.white ?
            PieceType.whiteQueen : PieceType.blackQueen;
    }
}