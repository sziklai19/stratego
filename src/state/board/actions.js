export const ADD_FIGURE = 'ADD_FIGURE';
export const REMOVE_FIGURE = 'REMOVE_FIGURE';
export const SELECT_FIGURE = 'SELECT_FIGURE';

export const selectFigure = (tileId) => {
    return {
        type: SELECT_FIGURE,
        payload: {
            tileId,
        },
    }
}

export const addFigure = (tileId, figureId, playerId) => {
    return {
        type: ADD_FIGURE,
        payload: {
            tileId,
            figureId,
            playerId
        },
    }
}

export const removeFigure = (tileId) => {
    return {
        type: REMOVE_FIGURE,
        payload: {
            tileId,
        },
    }
}