import { FIGURE_ADDED, MOVE_PIECE, REMOVE_PIECE } from './actions';

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
        ]
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
        ]
    }
];

export const playerReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case FIGURE_ADDED:
            //console.log(payload.figureId);
            const mapper = (item, key) => {
                if (item.id === payload.figureId) {
                    item.added = payload.added;
                }
                return item;
            };
            return [
                {
                    id: 0,
                    figures: state[0].figures.map(mapper)
                },
                state[1]
            ];
        case MOVE_PIECE:
            return state;
        case REMOVE_PIECE:
            const newItems = state.items.filter((item, key) => payload.pieceId !== key);
            return {
                count: state.count - 1,
                items: [
                    ...newItems
                ],
            };
        default:
            return state;
    }
}