import './board.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFigure, removeFigure } from '../../../state/board/actions';
import { figureAdded, selectFigure } from '../../../state/player/actions';
import { Figure } from '../figure/Figure';



export function Board({ prep, playerId, figureId }) {
    const dispatch = useDispatch();
    const place = (tileId, figureId) => dispatch(addFigure(tileId, figureId));
    const remove = (tileId) => dispatch(removeFigure(tileId));
    const added = (figureId, playerId, added) => dispatch(figureAdded(figureId, playerId, added));
    const select = (figureId, playerId) => dispatch(selectFigure(figureId, playerId));

    const tiles = useSelector(state => state.board.tiles);
    //const figures = useSelector(state => state.player[playerId].figures);
    const selected = useSelector(state => state.player[playerId].selected);

    function drop(ev) {
        if (prep) {
            const tile = parseInt(ev.target.attributes.getNamedItem('tile').value); // cél csempe id-je
            //const figure = parseInt(droppedItem) // ehelyett van a selected
            const target = tiles[tile];
            console.log(selected);
            console.log(tile);
            if (selected != null) {
                added(selected, playerId, true);
                place(tile, selected);
                select(null, playerId)

                //console.log(target);
                //if(tiles.find(item => item.id === selected).added !== true)
                const start = tiles.findIndex(item => item != null && item.figure === selected);
                if (target == null) {
                    place(tile, selected);
                    added(selected + 1, 1, true);
                    remove(start);
                } else {
                    //console.log(start);
                    if (start !== -1) {
                        added(target.figure, 1, false);
                        remove(start);
                        place(tile, selected);
                    } else {
                        added(target.figure, 1, false);
                        place(tile, selected);
                        added(selected, 1, true);
                        remove(start);
                    }
                }
            }else{
                select(target.figure, playerId);
            }
        }
    }


    //document.documentElement.style.setProperty('--board-size', size);

    return (
        <div className="board-container">
            <div className="board">
                {tiles.map((item, key) => (
                    <div key={key} tile={key} className='grass-tile' onClick={drop}>
                        {item != null ? <Figure tile={key} playerId={0} id={item.figure} key={'figure' + key} /> : null}
                    </div>
                ))}
            </div>
        </div>
    );
}