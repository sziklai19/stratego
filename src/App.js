import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './App.css';
import { Home } from './views/home/Home';
import { Room } from './views/room/Room';
import { Layout } from './views/layout/Layout';
import { Prep } from './views/game/Prep';
import { Game } from './views/game/Game';

import { useSelector } from 'react-redux';

function App() {
    const player = useSelector(state => state.game.player);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Layout><Home /></Layout>
                </Route>
                <Route path="/room">
                    <Layout><Room /></Layout>
                </Route>
                <Route path="/prep">
                    <Prep playerId={player} />
                </Route>
                <Route path="/game">
                    <Game playerId={player} />
                </Route>
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
