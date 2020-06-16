export const ADD_FIGURE = 'ADD_FIGURE';
export const REMOVE_FIGURE = 'REMOVE_FIGURE';
export const SELECT_FIGURE = 'SELECT_FIGURE';
export const SET_TILES = 'SET_TILES';
export const UPDATE_TILES = 'UPDATE_TILES'

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

export const setTiles = (tiles) => {
    return {
        type: SET_TILES,
        payload: {
            tiles,
        },
    }
}

export const updateTiles = (room, playerId) => {
    return {
        type: UPDATE_TILES,
        payload: {
            room,
            playerId,
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