//import './board.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Board } from './board/Board';
import { useSelector, useDispatch } from 'react-redux';
import { setRoom } from '../../state/game/actions';
import { setTiles } from '../../state/board/actions';
import { resetPlayer } from '../../state/player/actions';

export function Game() {
    const history = useHistory();
    const dispatch = useDispatch();
    //const switchPlayer = (playerId) => dispatch(nextPlayer(playerId));
    const playerId = useSelector(state => state.game.player);
    const hand = useSelector(state => state.player[playerId === 0 ? 1 : 0].figures);
    const ready = useSelector(state => state.game.ready);
    const end = useSelector(state => state.game.end);
    const winner = useSelector(state => state.game.winner);
    const round = useSelector(state => state.game.round);
    const room = useSelector(state => state.game.room);

    const setRoomId = (roomId) => dispatch(setRoom(roomId));
    const syncTiles = (tiles) => dispatch(setTiles(tiles));
    const reset = (playerId) => dispatch(resetPlayer(playerId));

    if (room == null) {
        history.push('/');
    }

    return (
        <>
            <div className="container-fluid text-light" style={ready[0] && ready[1] ? { display: "none" } : { display: "block" }}>
                <h1>Várakozás a másik játékosra.</h1>
            </div>
            <div className="container-fluid text-light" style={ready[0] && ready[1] ? { display: "block" } : { display: "none" }}>
                <div className="row">
                    <div className="col col-12 p-3 text-light">
                        <h4 className="m-0">Aktív játékos: {round === 0 ? 'Kék' : 'Piros'}</h4>
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
                                        return (<li key={'red' + item.id}>{item.type}</li>);
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
                        <Link to="/" className="btn btn-outline-primary" onClick={() => {
                            setRoomId(null);
                            syncTiles([
                                null, null, null, null, null, null,
                                null, null, null, null, null, null,
                                null, null, null, null, null, null,
                                null, null, null, null, null, null,
                                null, null, null, null, null, null,
                                null, null, null, null, null, null
                            ]);
                            reset(playerId);
                        }} style={end ? { display: "block" } : { display: "none" }}>Vissza a főoldalra</Link>
                    </div>
                    <div className="col col-6 p-3">
                        <div style={end ? { display: "block" } : { display: "none" }}>{winner === playerId ? 'Te nyertél' : 'Vesztettél'}</div>
                    </div>
                </div>
            </div>
        </>
    );
}