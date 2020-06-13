import './figure.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFigure } from '../../../state/player/actions';

export function Figure({ id, playerId, tile, inHand, className, hide }) {
    //console.log(playerId);
    const figures = useSelector(state => state.player[playerId].figures);
    const hand = useSelector(state => state.player[playerId].hand);
    const selected = useSelector(state => state.player[playerId].selected) === id;
    const end = useSelector(state => state.game.end);

    const dispatch = useDispatch();

    const select = (figureId, playerId) => dispatch(selectFigure(figureId, playerId));

    //document.documentElement.style.setProperty('--board-size', size);

    return (
        <div tile={tile} className={'figure-container '}>
            <div tile={tile} className={(selected ? 'selected ' : '') + (playerId === 1 ? 'player2 ' : 'player1 ') + 'figure'} onClick={() => {
                if (!hide) {
                    if (selected) {
                        select(null, playerId);
                    } else {
                        select(id, playerId);
                    }
                    if (end) {
                        select(null, 0);
                        select(null, 1);
                    }
                }
            }}>
                {!hide ? <div tile={tile}>{inHand ? hand.find(item => item != null && item.id === id).type : figures.find(item => item != null && item.id === id).type}</div> : <div></div>}
            </div>
        </div>
    );
}