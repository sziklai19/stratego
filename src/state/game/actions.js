export const SET_ROOM = 'SET_ROOM';
export const SET_OPPONENT = 'SET_OPPONENT';
export const END_GAME = 'END_GAME';
export const SET_PLAYER = 'SET_PLAYER';
export const READY_PLAYER = 'READY_PLAYER';
export const NEXT_ROUND = 'NEXT_ROUND'

export const setRoom = (roomId) => {
    return {
        type: SET_ROOM,
        payload: {
            roomId,
        },
    }
}

export const nextRound = () => {
    return {
        type: NEXT_ROUND,
    }
}

export const readyPlayer = (playerId) => {
    return {
        type: READY_PLAYER,
        payload: {
            playerId,
        },
    }
}

export const setPlayer = (playerId) => {
    return {
        type: SET_PLAYER,
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