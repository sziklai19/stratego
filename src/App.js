import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './App.css';
import { Home } from './views/home/Home';
import { Room } from './views/room/Room';
import { Layout } from './views/layout/Layout';
import { Prep } from './views/game/Prep';
import { Game } from './views/game/Game';

function App() {
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
                    <Prep />
                </Route>
                <Route path="/game">
                    <Game />
                </Route>
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
