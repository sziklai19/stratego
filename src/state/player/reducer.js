import { FIGURE_ADDED, SELECT_FIGURE, BACK_TO_HAND } from './actions';

const initialState = [
    {
        id: 0,
        hand: [
            { id: 0, type: 'flag', alive: true },
            { id: 1, type: 'bomb', alive: true },
            { id: 2, type: 'bomb', alive: true },
            { id: 3, type: '1', alive: true },
            { id: 4, type: '2', alive: true },
            { id: 5, type: '2', alive: true },
            { id: 6, type: '3', alive: true },
            { id: 7, type: '3', alive: true },
            { id: 8, type: '4', alive: true },
            { id: 9, type: '6', alive: true },
            { id: 10, type: '8', alive: true },
            { id: 11, type: '10', alive: true },
        ],
        figures: new Array(12).fill(null),
        selected: null
    },
    {
        id: 1,
        hand: [
            { id: 0, type: 'flag', alive: true },
            { id: 1, type: 'bomb', alive: true },
            { id: 2, type: 'bomb', alive: true },
            { id: 3, type: '1', alive: true },
            { id: 4, type: '2', alive: true },
            { id: 5, type: '2', alive: true },
            { id: 6, type: '3', alive: true },
            { id: 7, type: '3', alive: true },
            { id: 8, type: '4', alive: true },
            { id: 9, type: '6', alive: true },
            { id: 10, type: '8', alive: true },
            { id: 11, type: '10', alive: true },
        ],
        figures: new Array(12).fill(null),
        selected: null
    }
];

export const playerReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case FIGURE_ADDED:
            const ind = state[payload.playerId].hand.findIndex(item => item != null && item.id === payload.figureId);
            state[payload.playerId].figures[payload.figureId] = state[payload.playerId].hand[ind];
            state[payload.playerId].hand[ind] = null;
            return state;
        case SELECT_FIGURE:
            state[payload.playerId].selected = payload.figureId;
            return state;
        case BACK_TO_HAND:
            const figure = state[payload.playerId].hand.findIndex(item => item != null && item.id === payload.figureId);
            const hand = state[payload.playerId].hand.findIndex(item => item != null && item.id === payload.handId);
            //console.log(state[payload.playerId].hand[payload.handId]);
            console.log(state[payload.playerId].hand[payload.figureId]);
            if(payload.tileId === -1){
                state[payload.playerId].hand[payload.handId] = state[payload.playerId].hand[figure];
                state[payload.playerId].hand[figure] = null;
                state[payload.playerId].selected = figure;
                console.log(state[payload.playerId].hand[figure]);
                console.log(state[payload.playerId].hand[hand]);
                console.log('Kézből kézbe');
            }else{
                state[payload.playerId].hand[payload.handId] = state[payload.playerId].figures[payload.figureId];
                state[payload.playerId].figures[payload.figureId] = null;
                console.log('tábláról kézbe');
            }
            return state;
        default:
            return state;
    }
}