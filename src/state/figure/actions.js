export const ADD_FIGURE = 'ADD_PIECE';
export const REMOVE_PIECE = 'REMOVE_PIECE';
export const MOVE_PIECE = 'MOVE_PIECE';

export const movePiece = (pieceId) => {
    return {
        type: MOVE_PIECE,
        payload: {
            pieceId,
        },
    }
}

export const addPiece = (pieceId) => {
    return {
        type: ADD_PIECE,
        payload: {
            pieceId,
        },
    }
}

export const removePiece = (pieceId) => {
    return {
        type: REMOVE_PIECE,
        payload: {
            pieceId,
        },
    }
}