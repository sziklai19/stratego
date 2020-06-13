import './board.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFigure, removeFigure } from '../../../state/board/actions';
import { figureAdded, killFigure } from '../../../state/player/actions';
import { nextPlayer, setOpponent, endGame } from '../../../state/game/actions';
import { Figure } from '../figure/Figure';



export function Board({ prep, playerId, figureId }) {
    const dispatch = useDispatch();
    const place = (tileId, figureId, playerId) => dispatch(addFigure(tileId, figureId, playerId));
    const remove = (tileId) => dispatch(removeFigure(tileId));
    const added = (figureId, playerId) => dispatch(figureAdded(figureId, playerId));
    const switchPlayer = (playerId) => dispatch(nextPlayer(playerId));
    const attack = (opponetId) => dispatch(setOpponent(opponetId));
    const kill = (playerId, figureId) => dispatch(killFigure(playerId, figureId))
    const gameEnd = (end) => dispatch(endGame(end));

    const tiles = useSelector(state => state.board.tiles);
    const selected = useSelector(state => state.player[playerId].selected);
    const opponets = useSelector(state => state.player[playerId === 0 ? 1 : 0].figures);
    const figures = useSelector(state => state.player[playerId].figures);
    const selectedTile = tiles.findIndex(item => item != null && item.user === playerId && item.figure === selected);

    function drop(ev) {
        if (prep) {
            const tile = parseInt(ev.target.attributes.getNamedItem('tile').value); // cél csempe id-je
            if (selected != null) {
                const start = tiles.findIndex(item => item != null && item.user === playerId && item.figure === selected);
                if (start !== -1) {
                    place(tile, selected, playerId);
                    remove(start);
                } else {
                    place(tile, selected, playerId);
                    added(selected, playerId);
                }
            }
        } else {
            const tile = parseInt(ev.target.attributes.getNamedItem('tile').value); // cél csempe id-je
            //if (selected != null) {
            const start = tiles.findIndex(item => item != null && item.user === playerId && item.figure === selected);
            const figure = figures[selected];

            //console.log('opponent: ' + opponet);

            if (figure.type !== "bomb" && figure.type !== "flag") {
                if (tiles[tile] == null) {
                    place(tile, selected, playerId);
                    remove(start);
                    switchPlayer(playerId);
                } else {
                    const opponet = opponets.find(item => item != null && item.id === tiles[tile].figure);
                    attack(opponet.id);
                    if (opponet.type === "bomb") {
                        place(tile, opponet.id, playerId === 0 ? 1 : 0);
                        kill(playerId, selected);
                        remove(start);
                    } else if (opponet.type === "flag") {
                        gameEnd(true, playerId);
                    } else {
                        if (parseInt(opponet.type) > parseInt(figure.type)) {
                            place(tile, opponet.id, playerId === 0 ? 1 : 0);
                            kill(playerId, selected);
                            remove(start);
                        } else if (parseInt(opponet.type) < parseInt(figure.type)) {
                            place(tile, selected, playerId);
                            kill(playerId === 0 ? 1 : 0, opponet.id);
                            remove(start);
                        } else {
                            kill(playerId === 0 ? 1 : 0, opponet.id);
                            kill(playerId, selected);
                            remove(start);
                            remove(tile);
                        }
                    }
                    switchPlayer(playerId);

                }
            }
        }
    }


    //document.documentElement.style.setProperty('--board-size', size);

    return (
        <div className="board-container">
            <div className="board">
                {tiles.map((item, key) => {
                    //console.log(item != null ? item.user : null)
                    if (prep) {
                        if (item == null) {
                            if (key > 6 * 4 - 1) {
                                return (
                                    <div key={key} tile={key} className='grass-tile allowed' onClick={drop}>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={key} tile={key} className='grass-tile notAllowed'>
                                    </div>
                                )
                            }
                        } else {
                            if (item.user !== playerId) {
                                return (
                                    <div key={key} tile={key} className='grass-tile notAllowed'>
                                        <Figure playerId={item.user} hide={true} />
                                    </div>
                                )
                            } else {
                                if (key > 6 * 4 - 1) {
                                    return (
                                        <div key={key} tile={key} className='grass-tile allowed'>
                                            <Figure tile={key} playerId={item.user} inHand={false} id={item.figure} hide={false} key={'figure' + key} />
                                        </div>
                                    )
                                }
                            }
                        }
                    } else {
                        if (item == null) {
                            if (selectedTile !== -1) {
                                if (selectedTile % 6 === 0) {
                                    if (selectedTile === key + 6 || selectedTile === key - 6 || selectedTile === key - 1) {
                                        return (
                                            <div key={key} tile={key} className={'grass-tile possible'} onClick={drop}>
                                            </div>
                                        )
                                    }
                                } else if ((selectedTile + 1) % 6 === 0) {
                                    if (selectedTile === key + 6 || selectedTile === key - 6 || selectedTile === key + 1) {
                                        return (
                                            <div key={key} tile={key} className={'grass-tile possible'} onClick={drop}>
                                            </div>
                                        )
                                    }
                                } else if (selectedTile === key + 6 || selectedTile === key - 6 || selectedTile === key - 1 || selectedTile === key + 1) {
                                    return (
                                        <div key={key} tile={key} className={'grass-tile possible'} onClick={drop}>
                                        </div>
                                    )
                                }
                            }
                            return (
                                <div key={key} tile={key} className='grass-tile'>
                                </div>
                            )
                        } else {
                            if (item.user !== playerId) {
                                if (selectedTile !== -1) {
                                    if (selectedTile % 6 === 0) {
                                        if (selectedTile === key + 6 || selectedTile === key - 6 || selectedTile === key - 1) {
                                            return (
                                                <div key={key} tile={key} className='grass-tile possible' onClick={drop}>
                                                    <Figure tile={key} playerId={item.user} hide={true} />
                                                </div>
                                            )
                                        }
                                    } else if ((selectedTile + 1) % 6 === 0) {
                                        if (selectedTile === key + 6 || selectedTile === key - 6 || selectedTile === key + 1) {
                                            return (
                                                <div key={key} tile={key} className='grass-tile possible' onClick={drop}>
                                                    <Figure tile={key} playerId={item.user} hide={true} />
                                                </div>
                                            )
                                        }
                                    } else if (selectedTile === key + 6 || selectedTile === key - 6 || selectedTile === key - 1 || selectedTile === key + 1) {
                                        return (
                                            <div key={key} tile={key} className='grass-tile possible' onClick={drop}>
                                                <Figure tile={key} playerId={item.user} hide={true} />
                                            </div>
                                        )
                                    }
                                }
                                return (
                                    <div key={key} tile={key} className='grass-tile'>
                                        <Figure tile={key} playerId={item.user} hide={true} />
                                    </div>
                                )
                            }
                            return (
                                <div key={key} tile={key} className='grass-tile'>
                                    <Figure tile={key} playerId={item.user} inHand={false} id={item.figure} hide={false} key={'figure' + key} />
                                </div>
                            )
                        }
                    }
                    return null;
                })}
            </div>
        </div>
    );
}