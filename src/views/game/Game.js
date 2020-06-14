//import './board.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Board } from './board/Board';

import { useSelector/*, useDispatch*/ } from 'react-redux';
//import { nextPlayer } from '../../state/game/actions';

export function Game() {
    //const dispatch = useDispatch();
    //const switchPlayer = (playerId) => dispatch(nextPlayer(playerId));
    const playerId = useSelector(state => state.game.player);
    const hand = useSelector(state => state.player[playerId === 0 ? 1 : 0].figures);
    const end = useSelector(state => state.game.end);
    const winner = useSelector(state => state.game.winner);

    return (
        <div className="container-fluid text-light">
            <div className="row">
                <div className="col col-12 p-3 text-light">
                    <h4 className="m-0">Aktív játékos: {playerId === 0 ? 'Kék' : 'Piros'}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col col-5 p-3">
                    <Board />
                </div>
                <div className="col col-7">
                    <div className="row p-3">
                        <h5 className="m-0">Leszedett bábúk:</h5>
                        <ul className="col col-12">
                            {hand.map(item => {
                                if (item != null && item.alive === false) {
                                    return (<li key={'red'+item.id}>{item.type}</li>);
                                } else {
                                    return null;
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-6 p-3">
                    <Link to="/" className="btn btn-outline-primary" style={end ? {display: "block"} : {display: "none"}}>Vissza a főoldalra</Link>
                </div>
                <div className="col col-6 p-3">
                    <div style={end ? {display: "block"} : {display: "none"}}>{winner === 0 ? 'Kék nyert' : 'Piros nyert' }</div>
                </div>
            </div>
        </div>
    );
}