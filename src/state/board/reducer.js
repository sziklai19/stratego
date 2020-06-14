import { ADD_FIGURE, REMOVE_FIGURE } from './actions';

//Ez az eredeti.
/*const initialState = {
    tiles: [
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null
    ],
    size: 6
};*/

//Ez csak a game oldal teszteléséhez.
const initialState = {
    tiles: [
        { user: 1, figure: 0 }, { user: 1, figure: 1 }, { user: 1, figure: 2 }, { user: 1, figure: 3 }, { user: 1, figure: 4 }, { user: 1, figure: 5 },
        { user: 1, figure: 6 }, { user: 1, figure: 7 }, { user: 1, figure: 8 }, { user: 1, figure: 9 }, { user: 1, figure: 10 }, { user: 1, figure: 11 },
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        { user: 0, figure: 0 }, { user: 0, figure: 1 }, { user: 0, figure: 2 }, { user: 0, figure: 3 }, { user: 0, figure: 4 }, { user: 0, figure: 5 },
        { user: 0, figure: 6 }, { user: 0, figure: 7 }, { user: 0, figure: 8 }, { user: 0, figure: 9 }, { user: 0, figure: 10 }, { user: 0, figure: 11 }
    ],
    size: 6
};

export const boardReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case ADD_FIGURE:
            return {
                tiles: state.tiles.map((item, key) => key === payload.tileId ? { user: payload.playerId, figure: payload.figureId } : item),
                size: state.size,
            };
        case REMOVE_FIGURE:
            return {
                tiles: state.tiles.map((item, key) => key === payload.tileId ? null : item),
                size: state.size,
            };
        default:
            return state;
    }
}