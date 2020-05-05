import React from 'react';
import { Link } from 'react-router-dom';

export function Room() {
    return (
        <>
            <h1 className="text-light">Várakozó szoba: 2</h1>
            <h2 className="text-light">Váralozás másik játékosra...</h2>
            <Link to="/" className="btn btn-outline-primary m-3">Főoldal</Link>
        </>
    )
}