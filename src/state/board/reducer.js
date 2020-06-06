import { ADD_TILE, REMOVE_TILE, SELECT_TILE } from './actions';


const initialState = {
    items: [
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null
    ],
    size: 6,
    selected: null,
};

export const boardReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case ADD_TILE:
            const newItem = 'item' + state.count;
            return {
                count: state.count+1,
                items: [
                    ...state.items,
                    newItem
                ],
            };
        case SELECT_TILE:
            state.selected = payload.tileId;
            return state;
        case REMOVE_TILE:
            const newItems = state.items.filter((item, key) => payload.tileId !== key);
            return {
                count: state.count-1,
                items: [
                    ...newItems
                ],
            };
        default:
            return state;
    }
}