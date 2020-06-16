export const FIGURE_ADDED = 'FIGURE_ADDED';
export const KILL_FIGURE = 'KILL_FIGURE';
export const SELECT_FIGURE = 'SELECT_FIGURE';
export const BACK_TO_HAND = 'BACK_TO_HAND';
export const SET_FIGURES = 'SET_FIGURES';
export const UPDATE_FIGURES = 'UPDATE_FIGURES';
export const RESET_PLAYER = 'RESET_PLAYER';

export const figureAdded = (figureId, playerId, added) => {
    return {
        type: FIGURE_ADDED,
        payload: {
            figureId,
            playerId
        },
    }
}

export const setFigures = (playerId, figures) => {
    return {
        type: SET_FIGURES,
        payload: {
            playerId,
            figures,
        }
    }
}

export const updateFigures = (room, playerId) => {
    return {
        type: UPDATE_FIGURES,
        payload: {
            playerId,
            room,
        }
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

export const resetPlayer = (playerId) => {
    return {
        type: RESET_PLAYER,
        payload: {
            playerId,
        }
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