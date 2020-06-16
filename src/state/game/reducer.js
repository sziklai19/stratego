import { SET_ROOM, SET_PLAYER, SET_OPPONENT, END_GAME, READY_PLAYER, NEXT_ROUND } from './actions';

const initialState = {
    player: 0,
    room: null,
    opponent: null,
    end: false,
    ready: [false, false],
    round: 0,
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
                ready: state.ready,
                round: state.round,
                winner: state.winner,
            };
        case SET_PLAYER:
            return {
                player: payload.playerId,
                room: state.room,
                opponent: state.opponent,
                end: state.end,
                ready: state.ready,
                round: state.round,
                winner: state.winner,
            };
        case READY_PLAYER:
            return {
                player: state.player,
                room: state.room,
                opponent: state.opponent,
                end: state.end,
                ready: payload.playerId === 0 ? [true, state.ready[1]] : [state.ready[0], true],
                round: state.round,
                winner: state.winner,
            }
        case SET_OPPONENT:
            return {
                player: state.player,
                room: state.room,
                opponent: payload.opponent,
                end: state.end,
                ready: state.ready,
                round: state.round,
                winner: state.winner,
            };
        case END_GAME:
            return {
                player: state.player,
                room: state.room,
                opponent: state.opponent,
                end: true,
                ready: state.ready,
                round: state.round,
                winner: payload.playerId
            }
        case NEXT_ROUND:
            return {
                player: state.player,
                room: state.room,
                opponent: state.opponent,
                end: state.end,
                ready: state.ready,
                round: state.round === 0 ? 1 : 0,
                winner: state.winner,
            }
        default:
            return state;
    }
}