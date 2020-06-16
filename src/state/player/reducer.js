import { FIGURE_ADDED, SELECT_FIGURE, BACK_TO_HAND, KILL_FIGURE, SET_FIGURES, UPDATE_FIGURES, RESET_PLAYER } from './actions';
import socket from '../../websocket';

//Ez az eredeti.
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

//Ez csak a game oldal teszteléséhez.
/*const initialState = [
    {
        id: 0,
        hand: new Array(12).fill(null),
        figures: [
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
        selected: null,
        ready: false,
    },
    {
        id: 1,
        hand: new Array(12).fill(null),
        figures: [
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
        selected: null,
        ready: false,
    }
];*/

export const playerReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case FIGURE_ADDED:
            const ind = state[payload.playerId].hand.findIndex(item => item != null && item.id === payload.figureId);
            if (state[payload.playerId].hand[ind] != null) {
                state[payload.playerId].figures[payload.figureId] = state[payload.playerId].hand[ind];
            }
            state[payload.playerId].hand[ind] = null;
            return state;
        case SET_FIGURES:
            state[payload.playerId].figures = payload.figures;
            return [
                {
                    id: state[0].id,
                    hand: state[0].hand,
                    figures: state[0].figures,
                    selected: state[0].selected,
                    ready: state[0].ready,
                },
                {
                    id: state[1].id,
                    hand: state[1].hand,
                    figures: state[1].figures,
                    selected: state[1].selected,
                    ready: state[1].ready,
                }
            ];
        case UPDATE_FIGURES:
            socket.emit(
                "sync-action",
                payload.room,
                {
                    prep: false,
                    player: payload.playerId,
                    tiles: null,
                    figures: state[payload.playerId].figures,
                },
                true
            );
            return state;
        case SELECT_FIGURE:
            state[payload.playerId].selected = payload.figureId;
            return state;
        case BACK_TO_HAND:
            const figure = state[payload.playerId].hand.findIndex(item => item != null && item.id === payload.figureId);
            if (payload.tileId === -1) {
                state[payload.playerId].hand[payload.handId] = state[payload.playerId].hand[figure];
                state[payload.playerId].hand[figure] = null;
                state[payload.playerId].selected = figure;
            } else {
                state[payload.playerId].hand[payload.handId] = state[payload.playerId].figures[payload.figureId];
                state[payload.playerId].figures[payload.figureId] = null;
            }
            return state;
        case KILL_FIGURE:
            state[payload.playerId].figures = state[payload.playerId].figures.map(item => item.id === payload.figureId ? {
                id: item.id,
                type: item.type,
                alive: false
            } : item);
            return [
                {
                    id: state[0].id,
                    hand: state[0].hand,
                    figures: state[0].figures,
                    selected: state[0].selected,
                    ready: state[0].ready,
                },
                {
                    id: state[1].id,
                    hand: state[1].hand,
                    figures: state[1].figures,
                    selected: state[1].selected,
                    ready: state[1].ready,
                },
            ];
        case RESET_PLAYER:
            return [
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
            ]
        default:
            return state;
    }
}