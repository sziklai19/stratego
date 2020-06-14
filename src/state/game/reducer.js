import { SET_ROOM, SET_PLAYER, SET_OPPONENT, END_GAME } from './actions';

const initialState = {
    player: 0,
    room: null,
    opponent: null,
    end: false,
    winner: null
};

export const gameReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_ROOM:
            return {
                player: state.player,
                room: payload.roomId,
                opponent: state.opponent,
                end: state.end,
                winner: state.winner,
            };
        case SET_PLAYER:
            return {
                player: payload.playerId,
                room: state.room,
                opponent: state.opponent,
                end: state.end,
                winner: state.winner,
            };
        case SET_OPPONENT:
            return {
                player: state.player,
                room: state.room,
                opponent: payload.opponent,
                end: state.end,
                winner: state.winner,
            };
        case END_GAME:
            return{
                player: state.player,
                room: state.room,
                opponent: state.opponent,
                end: true,
                winner: payload.playerId
            }
        default:
            return state;
    }
}