import { PieceType, Coords, Color } from "../model";
import { Piece } from "./pieces";

export class Knight extends Piece {
    override _PieceType!: PieceType;
    override _Coords: Coords[] = [
        { x: 1, y: 2 },
        { x: 1, y: -2 },
        { x: -1, y: 2 },
        { x: -1, y: -2 },

        { x: 2, y: 1 },
        { x: 2, y: -1 },
        { x: -2, y: 1 },
        { x: -2, y: -1 },
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._PieceType = pieceColor === Color.white ?
            PieceType.whiteBishop : PieceType.blackBishop;
    }
}