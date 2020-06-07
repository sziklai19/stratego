//import './board.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Board } from './board/Board';

export function Game() {

    return (
        <>
            <div className="row">
                <div className="col col-5 m-3">
                    <Board playerId={0} />
                </div>
                <div className="col col-7 m-3">
                    <Link to="/" className="btn btn-outline-primary">Ha valaki nyert vissza lehet lépni</Link>
                </div>
            </div>
        </>
    );
}