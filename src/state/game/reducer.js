import { NEXT_PLAYER, SET_OPPONENT, END_GAME } from './actions';

const initialState = {
    player: 0,
    opponent: null,
    end: false,
    winner: null
};

export const gameReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case NEXT_PLAYER:
            const next = (payload.playerId === 0 ? 1 : 0)
            return {
                player: next,
                opponent: state.opponent,
                end: state.end,
                winner: state.winner,
            };
        case SET_OPPONENT:
            return {
                player: state.player,
                opponent: payload.opponent,
                end: state.end,
                winner: state.winner,
            };
        case END_GAME:
            return{
                player: state.player,
                opponent: state.opponent,
                end: true,
                winner: payload.playerId
            }
        default:
            return state;
    }
}