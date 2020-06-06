//import './board.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Board } from './board/Board';

export function Game() {

    return (
        <>
            <div className="col col-5" >
            <Board />
            </div>
            <Link to="/" className="btn btn-outline-primary">Ha valaki nyert vissza lehet lépni</Link>
            <img src="./assets/Stratego.png" alt="game" className="mx-auto d-block"/>
        </>
    );
}