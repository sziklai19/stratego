export const FIGURE_ADDED = 'FIGURE_ADDED';
export const KILL_FIGURE = 'KILL_FIGURE';
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

export const killFigure = (playerId, figureId) => {
    return {
        type: KILL_FIGURE,
        payload: {
            figureId,
            playerId
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