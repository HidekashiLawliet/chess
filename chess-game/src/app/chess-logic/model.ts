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

export const pieceSkinPath: Readonly<Record<PieceType, string>> = {
    [PieceType.whiteBishop]: "/chess-game/src/assets/whiteBishop.png",
    [PieceType.whiteKnight]: "/chess-game/src/assets/whiteKnight.png",
    [PieceType.whiteRook]: "/chess-game/src/assets/WhiteRoo.png.png",
    [PieceType.whitePawn]: "/chess-game/src/assets/whitePawn.png",
    [PieceType.whiteQueen]: "/chess-game/src/assets/whiteQueen.png",
    [PieceType.whiteKing]: "/chess-game/src/assets/whiteKing.png",

    [PieceType.blackPawn]: "/chess-game/src/assets/blackPawn.png",
    [PieceType.blackKnight]: "/chess-game/src/assets/blackKnight.png",
    [PieceType.blackQueen]: "/chess-game/src/assets/blackQueen.png",
    [PieceType.blackKing]: "/chess-game/src/assets/blackKing.png",
    [PieceType.blackRook]: "/chess-game/src/assets/blackRoo.png",
    [PieceType.blackBishop]: "/chess-game/src/assets/blackKing.png",
}