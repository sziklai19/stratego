import './board.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFigure, removeFigure } from '../../../state/board/actions';
import { figureAdded } from '../../../state/player/actions';
import { Figure } from '../figure/Figure';



export function Board({ prep }) {
    const dispatch = useDispatch();
    const place = (tileId, figureId) => dispatch(addFigure(tileId, figureId));
    const remove = (tileId) => dispatch(removeFigure(tileId));
    const added = (figureId, playerId, added) => dispatch(figureAdded(figureId, playerId, added));

    const tiles = useSelector(state => state.board.tiles);
    //const figures = useSelector(state => state.player[0].figures);

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        const droppedItem = ev.dataTransfer.getData("figure-id");
        if (droppedItem) {
            if (prep) {
                const tile = parseInt(ev.target.attributes.getNamedItem('tile').value);
                const figure = parseInt(droppedItem)
                //console.log(typeof tile);
                const target = tiles[tile];
                console.log(target);
                //if(tiles.find(item => item.id === figure).added !== true)
                const start = tiles.findIndex(item => item != null && item.figure === figure);
                if (target == null) {
                    place(tile, figure);
                    added(figure + 1, 1, true);
                    remove(start);
                } else {
                    console.log(start);
                    if (start !== -1) {
                        added(target.figure + 1, 1, false);
                        remove(start);
                        place(tile, figure);
                    } else {
                        added(target.figure + 1, 1, false);
                        place(tile, figure);
                        added(figure + 1, 1, true);
                        remove(start);
                    }
                }
            }
        }
    }


    //document.documentElement.style.setProperty('--board-size', size);

    return (
        <div className="board-container">
            <div className="board">
                {tiles.map((item, key) => (
                    <div key={key} tile={key} className='grass-tile' onDragOver={allowDrop} onDrop={drop}>
                        {item ? <Figure tile={key} id={item.figure} key={'figure' + key} /> : null}
                    </div>
                ))}
            </div>
        </div>
    );
}