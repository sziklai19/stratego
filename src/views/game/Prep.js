import './board.css';
import React, { useRef, Children } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTile } from '../../state/board/actions';
import { Board } from './Board';

export function Prep() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.board.items);
    const selected = useSelector(state => state.board.selected);
    //console.log(useSelector(state => state.board.count));

    //const createTile = (tileId) => dispatch(addTile(tileId));
    //const removeTile = (tileId) => dispatch(removeTile(tileId));
    //const markTile = (tileId) => dispatch(selectTile(tileId));

    return (
        <>
            <div className="container-fluid p-5 m-0">
                <div className="row">
                    <h1 className="col bg-primary text-light p-3">Előkészítő oldal</h1>
                </div>
                <div className="row">
                    <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-5" style={{height: "100%"}}>
                        <Board />
                    </div>
                </div>
                <div className="row">
                    <Link to="/game" className="btn btn-outline-primary">Játék indítása</Link>
                </div>
            </div>
        </>
    )
}