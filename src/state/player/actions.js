export const FIGURE_ADDED = 'FIGURE_ADDED';
export const REMOVE_PIECE = 'REMOVE_PIECE';
export const SELECT_FIGURE = 'SELECT_FIGURE';
export const BACK_TO_HAND = 'BACK_TO_HAND';

export const figureAdded = (figureId, playerId, added) => {
    return {
        type: FIGURE_ADDED,
        payload: {
            figureId,
            playerId
        },
    }
}

export const selectFigure = (figureId, playerId) => {
    return {
        type: SELECT_FIGURE,
        payload: {
            figureId,
            playerId
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

export const backToHand = (playerId, tileId, handId, figureId) => {
    return {
        type: BACK_TO_HAND,
        payload: {
            playerId,
            tileId,
            handId,
            figureId
        }
    }
}