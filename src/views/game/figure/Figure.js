import './figure.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFigure } from '../../../state/player/actions';

export function Figure({ id, playerId, tile, className }) {
    const figures = useSelector(state => state.player[playerId].figures);
    const selected = useSelector(state => state.player[playerId].selected) === id;

    const dispatch = useDispatch();

    const select = (figureId, playerId) => dispatch(selectFigure(figureId, playerId));

    //document.documentElement.style.setProperty('--board-size', size);

    return (
        <div tile={tile} className={(selected ? 'selected ' : '') + 'figure-container ' + className}>
            <div tile={tile} className="figure" onClick={() => !figures[id].added?select(id, playerId):console.log('hozzáadva')}>
                <div tile={tile}>{id + ': ' + figures[id].type}</div>
            </div>
        </div>
    );
}