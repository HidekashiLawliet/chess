import { PieceType, Coords, Color } from "../model";
import { Piece } from "./pieces";

export class Rook extends Piece {
    private _hasMoved: boolean = false;
    override _PieceType!: PieceType;
    override _Coords: Coords[] = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._PieceType = pieceColor === Color.white ?
            PieceType.whiteRook : PieceType.blackRook;
    }
    public get hasMoved(): boolean {
        return this._hasMoved;
    }
    public set hasMoved(hasMoved: boolean) {
        this._hasMoved = hasMoved;
    }
}
