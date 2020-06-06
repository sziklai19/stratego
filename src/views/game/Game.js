import './board.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTile, selectTile /*removeTile,*/} from '../../state/board/actions';
import { Board } from './Board';

export function Game() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.board.items);
    const selected = useSelector(state => state.board.selected);
    //console.log(useSelector(state => state.board.count));

    const createTile = (tileId) => dispatch(addTile(tileId));
    //const removeTile = (tileId) => dispatch(removeTile(tileId));
    const markTile = (tileId) => dispatch(selectTile(tileId));

    return (
        <>
            <button onClick={() => createTile()} className="btn btn-outline-primary">Add</button>
            <div className="col col-5" >
            <Board />
            </div>
            <Link to="/" className="btn btn-outline-primary">Ha valaki nyert vissza lehet lépni</Link>
            <img src="./assets/Stratego.png" alt="game" className="mx-auto d-block"/>
        </>
    );
}