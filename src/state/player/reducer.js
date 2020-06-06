import { FIGURE_ADDED, SELECT_FIGURE, REMOVE_PIECE } from './actions';

const initialState = [
    {
        id: 0,
        figures: [
            { id: 1, type: 'flag', alive: true, added: false },
            { id: 2, type: 'bomb', alive: true, added: false },
            { id: 3, type: 'bomb', alive: true, added: false },
            { id: 4, type: '1', alive: true, added: false },
            { id: 5, type: '2', alive: true, added: false },
            { id: 6, type: '2', alive: true, added: false },
            { id: 7, type: '3', alive: true, added: false },
            { id: 8, type: '3', alive: true, added: false },
            { id: 9, type: '4', alive: true, added: false },
            { id: 10, type: '6', alive: true, added: false },
            { id: 11, type: '8', alive: true, added: false },
            { id: 12, type: '10', alive: true, added: false },
        ],
        selected: null
    },
    {
        id: 1,
        figures: [
            { id: 1, type: 'flag', alive: true, added: true },
            { id: 2, type: 'bomb', alive: true, added: true },
            { id: 3, type: 'bomb', alive: true, added: true },
            { id: 4, type: '1', alive: true, added: true },
            { id: 5, type: '2', alive: true, added: true },
            { id: 6, type: '2', alive: true, added: true },
            { id: 7, type: '3', alive: true, added: true },
            { id: 8, type: '3', alive: true, added: true },
            { id: 9, type: '4', alive: true, added: true },
            { id: 10, type: '6', alive: true, added: true },
            { id: 11, type: '8', alive: true, added: true },
            { id: 12, type: '10', alive: true, added: true },
        ],
        selected: null
    }
];

export const playerReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case FIGURE_ADDED:
            state[payload.playerId].figures[payload.figureId].added = true;
            return state;
        case SELECT_FIGURE:
            state[payload.playerId].selected = payload.figureId;
            return state;
        case REMOVE_PIECE:
            return state;
        default:
            return state;
    }
}