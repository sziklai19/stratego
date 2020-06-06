import { ADD_FIGURE, REMOVE_FIGURE, SELECT_FIGURE } from './actions';


const initialState = {
    tiles: [
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null
    ],
    size: 6
};

export const boardReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case ADD_FIGURE:
            return {
                tiles: state.tiles.map((item, key) => key === payload.tileId ? {user: 1, figure: payload.figureId} : item),
                size: state.size,
                selected: state.selected,
            };
        case SELECT_FIGURE:
            state.selected = payload.tileId;
            return state;
        case REMOVE_FIGURE:
            return {
                tiles: state.tiles.map((item, key) => key === payload.tileId ? null : item ),
                size: state.size,
                selected: state.selected,
            };
        default:
            return state;
    }
}