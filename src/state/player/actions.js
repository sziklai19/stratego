export const FIGURE_ADDED = 'FIGURE_ADDED';
export const REMOVE_PIECE = 'REMOVE_PIECE';
export const MOVE_PIECE = 'MOVE_PIECE';

export const movePiece = (figureId, playerId) => {
    return {
        type: MOVE_PIECE,
        payload: {
            figureId,
            playerId
        },
    }
}

export const figureAdded = (figureId, playerId, added) => {
    return {
        type: FIGURE_ADDED,
        payload: {
            figureId,
            playerId,
            added
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