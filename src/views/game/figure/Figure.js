import './figure.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFigure } from '../../../state/player/actions';

export function Figure({ id, playerId, tile, inHand, className }) {
    const figures = useSelector(state => state.player[playerId].figures);
    const hand = useSelector(state => state.player[playerId].hand);
    const selected = useSelector(state => state.player[playerId].selected) === id;

    const dispatch = useDispatch();

    const select = (figureId, playerId) => dispatch(selectFigure(figureId, playerId));

    //document.documentElement.style.setProperty('--board-size', size);

    return (
        <div tile={tile} className={(selected ? 'selected ' : '') + 'figure-container ' + className}>
            <div tile={tile} className="figure" onClick={() => {
                select(id, playerId);
                //console.log('inHand: '+inHand);
                //console.log('hand: '+hand[id]);
                //console.log('figures: '+figures[id]);
            }}>
                <div tile={tile}>{inHand ? hand.find(item => item != null && item.id === id).type : figures.find(item => item != null && item.id === id).type}</div>
            </div>
        </div>
    );
}