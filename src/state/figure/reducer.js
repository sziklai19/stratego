import { ADD_FIGURE, MOVE_PIECE, REMOVE_PIECE } from './actions';

const initialState = { 
    count: 0,
    items: [],
 };

export const boardReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case ADD_FIGURE:
            const newItem = 'item' + state.count;
            return {
                count: state.count+1,
                items: [
                    ...state.items,
                    newItem
                ],
            };
        case MOVE_PIECE:
            return state;
        case REMOVE_PIECE:
            const newItems = state.items.filter((item, key) => payload.pieceId !== key);
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