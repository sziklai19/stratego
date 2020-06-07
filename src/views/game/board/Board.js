import './board.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFigure, removeFigure } from '../../../state/board/actions';
import { figureAdded } from '../../../state/player/actions';
import { Figure } from '../figure/Figure';



export function Board({ prep, playerId, figureId }) {
    const dispatch = useDispatch();
    const place = (tileId, figureId) => dispatch(addFigure(tileId, figureId));
    const remove = (tileId) => dispatch(removeFigure(tileId));
    const added = (figureId, playerId) => dispatch(figureAdded(figureId, playerId));

    const tiles = useSelector(state => state.board.tiles);
    const selected = useSelector(state => state.player[playerId].selected);

    function drop(ev) {
        if (prep) {
            const tile = parseInt(ev.target.attributes.getNamedItem('tile').value); // cél csempe id-je
            if (selected != null) {
                const start = tiles.findIndex(item => item != null && item.user === playerId && item.figure === selected);
                if (start !== -1) {
                    place(tile, selected);
                    remove(start);
                } else {
                    place(tile, selected);
                    added(selected, playerId);
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
                                        <Figure tile={key} playerId={playerId} inHand={false} id={item.figure} hide={false} key={'figure' + key} />
                                    </div>
                                )
                            }
                        }
                    }
                    if (prep && (item != null && item.user === playerId)) {
                        if (key > 6 * 4 - 1) {
                            if (item == null) {
                                return (
                                    <div key={key} tile={key} className='grass-tile allowed' onClick={drop}>
                                        {item.user}
                                    </div>
                                )
                            } else if (true) {
                                return (
                                    <div key={key} tile={key} className='grass-tile allowed'>
                                        {item != null ? <Figure tile={key} playerId={playerId} inHand={false} id={item.figure} key={'figure' + key} /> : null}{item.user}
                                    </div>
                                )
                            }
                        } else {
                            if (item == null) {
                                return (
                                    <div key={key} tile={key} className='grass-tile notAllowed'>
                                        {item.user}
                                    </div>
                                )
                            } else if (true) {
                                return (
                                    <div key={key} tile={key} className='grass-tile notAllowed' style={{ border: "5px solid green" }}>
                                        {item != null ? <Figure tile={key} playerId={playerId} inHand={false} id={item.figure} key={'figure' + key} /> : null}{item.user}
                                    </div>
                                )
                            }
                        }
                    } else {
                        if (item == null) {
                            return (
                                <div key={key} tile={key} className='grass-tile'>
                                    {}
                                </div>
                            )
                        } else if (true) {
                            return (
                                <div key={key} tile={key} className='grass-tile' style={{ border: "5px solid green" }}>
                                    {item != null ? <Figure tile={key} playerId={playerId} inHand={false} id={item.figure} key={'figure' + key} /> : null}{item.user}
                                </div>
                            )
                        }
                    }
                })}
            </div>
        </div>
    );
}