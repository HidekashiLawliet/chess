export enum Color {
    white,
    black
}

export type Coords = {
    x: number;
    y: number;
}

export enum PieceType {
    whiteBishop = "wB",
    whiteKnight = "wN",
    whiteRook = "wR",
    whitePawn = "wP",
    whiteQueen = "wQ",
    whiteKing = "wK",

    blackPawn = "bP",
    blackKnight = "bN",
    blackQueen = "bQ",
    blackKing = "bK",
    blackRook = "bR",
    blackBishop = "bB",
}

export let pieceSkinPath: Readonly<Record<PieceType, string>> = {

    [PieceType.whiteBishop]: "../../assets/whiteBishop.png",
    [PieceType.whiteKnight]: "../../assets/whiteKnight.png",
    [PieceType.whiteRook]: "../../assets/WhiteRoo.png",
    [PieceType.whitePawn]: "../../assets/whitePawn.png",
    [PieceType.whiteQueen]: "../../assets/whiteQueen.png",
    [PieceType.whiteKing]: "../../assets/whiteKing.png",

    [PieceType.blackPawn]: "../../assets/blackPawn.png",
    [PieceType.blackKnight]: "../../assets/blackKnight.png",
    [PieceType.blackQueen]: "../../assets/blackQueen.png",
    [PieceType.blackKing]: "../../assets/blackKing.png",
    [PieceType.blackRook]: "../../assets/blackRoo.png",
    [PieceType.blackBishop]: ".../../assets/blackBishop.png",

}

export type safeSquare = Map<string, Coords[]>;
