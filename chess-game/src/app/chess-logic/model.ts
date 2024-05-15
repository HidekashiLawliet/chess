export enum Color {
    white,
    black
}

export type Coords = {
    x: number;
    y: number;
}

export enum PieceType {
    whiteBishop = "wBis",
    whiteKnight = "wKni",
    whiteRook = "wRoo",
    whitePawn = "wPwn",
    whiteQueen = "wQue",
    whiteKing = "wKin",

    blackPawn = "bPwn",
    blackKnight = "bKni",
    blackQueen = "bQue",
    blackKing = "bKin",
    blackRook = "bRoo",
    blackBishop = "bBis",
}