export enum Color {
    white,
    black
}

export type Coords = {
    x: number;
    y: number;
}

export enum PieceType {
    whitePawn = "wPwn",
    whiteKnight = "wKni",
    whiteQueen = "wQue",
    whiteKing = "wKin",
    whiteRook = "wRoo",
    whiteBishop = "wBis",

    blackPawn = "bPwn",
    blackKnight = "bKni",
    blackQueen = "bQue",
    blackKing = "bKin",
    blackRook = "bRoo",
    blackBishop = "bBis",
}