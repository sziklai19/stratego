export const ADD_TILE = 'ADD_TILE';
export const REMOVE_TILE = 'REMOVE_TILE';
export const SELECT_TILE = 'SELECT_TILE';

export const selectTile = (tileId) => {
    return {
        type: SELECT_TILE,
        payload: {
            tileId,
        },
    }
}

export const addTile = (tileId) => {
    return {
        type: ADD_TILE,
        payload: {
            tileId,
        },
    }
}

export const removeTile = (tileId) => {
    return {
        type: REMOVE_TILE,
        payload: {
            tileId,
        },
    }
}