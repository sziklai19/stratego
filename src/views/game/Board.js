import './board.css';
import React, { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTile } from '../../state/board/actions';

export function Board() {
    const dispatch = useDispatch();

    const items = useSelector(state => state.board.items);
    const selected = useSelector(state => state.board.selected);

    const markTile = (tileId) => dispatch(selectTile(tileId));

    //document.documentElement.style.setProperty('--board-size', size);

    return (
        <div className="board-container">
            <div className="board">
                {items.map((item, key) => (
                    <div onClick={() => markTile(key)} key={key} className={selected === key ? 'grass-tile selected' : 'grass-tile'}>
                        <div className="tile-content">{item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}