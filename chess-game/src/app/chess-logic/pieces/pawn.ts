import { PieceType, Coords, Color } from "../model";
import { Piece } from "./pieces";

export class Pawn extends Piece {
    private _hasMoved: boolean = false;
    override _PieceType!: PieceType;
    override _Coords: Coords[] = [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: -1 },
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        if (pieceColor === Color.black) {
            this.setBlackDirection();
        }
        this._PieceType = pieceColor === Color.white ?
            PieceType.whitePawn : PieceType.blackPawn;
    }

    private setBlackDirection() {
        // this._Coords *= -1;
        this._Coords = this._Coords.map(({ x, y }) => ({ x: -1 * x, y: y }));
    }

    public get hasMoved(): boolean {
        return this._hasMoved;
    }
    public set hasMoved(hasMoved: boolean) {
        this._hasMoved = hasMoved;
        this._Coords = [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: -1 },
        ];
        if (this.pieceColor === Color.black) {
            this.setBlackDirection();
        }
    }
}