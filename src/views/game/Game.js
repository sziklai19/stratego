import React from 'react';
import { Link } from 'react-router-dom';

export function Game() {
    return (
        <>
            <img src="./assets/Stratego.png" className="mx-auto d-block"/>
            <Link to="/" className="btn btn-outline-primary">Ha valaki nyert vissza lehet lépni</Link>
        </>
    );
}