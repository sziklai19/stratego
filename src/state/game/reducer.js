import { SET_ROOM, SET_PLAYER, SET_OPPONENT, END_GAME, READY_PLAYER } from './actions';

const initialState = {
    player: 0,
    room: null,
    opponent: null,
    end: false,
    player1: false,
    player2: false,
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
                player1: state.player1,
                player2: state.player2,
                winner: state.winner,
            };
        case SET_PLAYER:
            return {
                player: payload.playerId,
                room: state.room,
                opponent: state.opponent,
                end: state.end,
                player1: state.player1,
                player2: state.player2,
                winner: state.winner,
            };
        case READY_PLAYER:
            if(payload.playerId === 0){
                state.player1 = true;
                return state;
            } else {
                state.player2 = true;
                return state;
            }
            
        case SET_OPPONENT:
            return {
                player: state.player,
                room: state.room,
                opponent: payload.opponent,
                end: state.end,
                player1: state.player1,
                player2: state.player2,
                winner: state.winner,
            };
        case END_GAME:
            return{
                player: state.player,
                room: state.room,
                opponent: state.opponent,
                end: true,
                player1: state.player1,
                player2: state.player2,
                winner: payload.playerId
            }
        default:
            return state;
    }
}