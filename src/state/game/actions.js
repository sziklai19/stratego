export const NEXT_PLAYER = 'NEXT_PLAYER';
export const SET_OPPONENT = 'SET_OPPONENT';
export const END_GAME = 'END_GAME';

export const nextPlayer = (playerId) => {
    return {
        type: NEXT_PLAYER,
        payload: {
            playerId,
        },
    }
}

export const setOpponent = (opponentId) => {
    return {
        type: SET_OPPONENT,
        payload: {
            opponentId,
        },
    }
}

export const endGame = (end, playerId) => {
    return {
        type: END_GAME,
        payload: {
            end,
            playerId
        },
    }
}