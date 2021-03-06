//import './board.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFigure } from '../../state/board/actions';
import { selectFigure, backToHand } from '../../state/player/actions';
import { readyPlayer } from '../../state/game/actions';
import { Board } from './board/Board';
import { Figure } from './figure/Figure';
import socket from '../../websocket';



export function Prep() {
    const dispatch = useDispatch();
    const history = useHistory();
    const playerId = useSelector(state => state.game.player);
    const tiles = useSelector(state => state.board.tiles);
    const hand = useSelector(state => state.player[playerId].hand);
    const figures = useSelector(state => state.player[playerId].figures);
    const selected = useSelector(state => state.player[playerId].selected);
    const room = useSelector(state => state.game.room);

    const remove = (tileId) => dispatch(removeFigure(tileId));
    const select = (figureId, playerId) => dispatch(selectFigure(figureId, playerId));
    const toHand = (playerId, tileId, handId, figureId) => dispatch(backToHand(playerId, tileId, handId, figureId));
    const ready = (playerId) => dispatch(readyPlayer(playerId));

    if (room == null) {
        history.push('/');
    }

    window.addEventListener("popstate", () => {
        //history.go(1);
    });

    function drop(ev) {
        const tile = parseInt(ev.target.attributes.getNamedItem('hand').value); // cél csempe id-je
        console.log('tile: ' + tile);
        if (selected != null) {
            const start = tiles.findIndex(item => item != null && item.user === playerId && item.figure === selected);
            if (start !== -1) {
                console.log('start: ' + start);
                console.log('selected: ' + selected);
                toHand(playerId, start, tile, selected);
                remove(start);
            } else {
                toHand(playerId, start, tile, selected);
            }
            select(null, playerId);
        }
    }

    function startGame() {
        //console.log(hand.findIndex(item => item != null) === -1)
        if (hand.findIndex(item => item != null) === -1) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <div className="container-fluid p-5 m-0">
                <div className="row">
                    <h1 className="col bg-primary text-light p-3">Előkészítő oldal</h1>
                </div>
                <div className="row">
                    <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-5">
                        <Board prep={true} />
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-7">
                        {hand.map((item, key) => {
                            if (item == null) {
                                return (
                                    <div onClick={drop} hand={key} key={'div' + key} style={{ width: "100px", cursor: "pointer", height: "100px", margin: 5, padding: 5, border: "1px solid gray", float: "left" }}>

                                    </div>
                                )
                            } else {
                                return (
                                    <div key={'div' + key} id={item.id} style={{ width: "100px", cursor: "pointer", margin: 5, padding: 5, border: "1px solid gray", float: "left" }}>
                                        <Figure id={item.id} playerId={playerId} inHand={true} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div to="/game" className="row m-2 btn btn-outline-primary" onClick={() => {
                    console.log(playerId);
                    socket.emit(
                        "sync-action",
                        room,
                        {
                            prep: true,
                            player: playerId,
                            tiles: tiles,
                            figures: figures,
                        },
                        true
                    );
                    ready(playerId);
                    history.push('/game');
                }} style={startGame() ? { display: "block" } : { display: "none" }}>Játék indítása</div>
            </div>
        </>
    )
}
