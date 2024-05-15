import { Color, Coords, PieceType } from "../model";

export abstract class Piece {
    abstract _PieceType: PieceType;
    abstract _Coords: Coords[];

    constructor(private _color: Color) { }

    public get Pieces(): PieceType {
        return this._PieceType;
    }

    public get directions(): Coords[] {
        return this._Coords;
    }

    public get color(): Color {
        return this._color;
    }
}