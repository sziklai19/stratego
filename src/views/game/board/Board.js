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
                const start = tiles.findIndex(item => item != null && item.figure === selected);
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
                    if (item == null) {
                        return (
                            <div key={key} tile={key} className='grass-tile' onClick={drop}>
                            </div>
                        )
                    } else {
                        return (
                            <div key={key} tile={key} className='grass-tile'>
                                {item != null ? <Figure tile={key} playerId={0} inHand={false} id={item.figure} key={'figure' + key} /> : null}
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
}