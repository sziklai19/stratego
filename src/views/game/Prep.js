//import './board.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFigure } from '../../state/board/actions';
import { selectFigure, backToHand } from '../../state/player/actions';
import { Board } from './board/Board';
import { Figure } from './figure/Figure';

export function Prep() {
    const playerId = 0;
    const dispatch = useDispatch();
    const tiles = useSelector(state => state.board.tiles);
    const hand = useSelector(state => state.player[0].hand);
    const selected = useSelector(state => state.player[0].selected);
    
    const remove = (tileId) => dispatch(removeFigure(tileId));
    const select = (figureId, playerId) => dispatch(selectFigure(figureId, playerId));
    const toHand = (playerId, tileId, handId, figureId) => dispatch(backToHand(playerId, tileId, handId, figureId));

    function drop(ev) {
        const tile = parseInt(ev.target.attributes.getNamedItem('hand').value); // cél csempe id-je
        console.log('tile: ' + tile);
        if (selected != null) {
            const start = tiles.findIndex(item => item != null && item.figure === selected);
            if (start !== -1) {
                console.log('start: ' + start);
                console.log('selected: ' + selected);
                toHand(0, start, tile, selected);
                remove(start);
            }else{
                toHand(0, start, tile, selected);
            }
            select(null, playerId);
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
                        <Board prep={true} playerId={0} />
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
                                        <Figure id={item.id} playerId={0} inHand={true} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="row m-2">
                    <Link to="/game" className="btn btn-outline-primary">Játék indítása</Link>
                </div>
            </div>
        </>
    )
}
