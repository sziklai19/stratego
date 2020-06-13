import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { boardReducer } from './board/reducer';
import { playerReducer } from './player/reducer';
import { gameReducer } from './game/reducer';

export const rootReducer = combineReducers({ board: boardReducer, player: playerReducer, game: gameReducer});

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export function configureStore() {
    return createStore(
        rootReducer,
        {},
        composeEnhancers(applyMiddleware()),
    );
}