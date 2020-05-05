import React from 'react';
import { Link } from 'react-router-dom';

export function Prep() {
    return (
        <>
            <div className="container-fluid p-5 m-0">
                <div className="row">
                    <h1 className="col bg-primary text-light p-3">Előkészítő oldal</h1>
                </div>
                <div className="row">
                    <h2 className="text-light">Játék előkészítése...</h2>
                </div>
                <div className="row">
                    <Link to="/game" className="btn btn-outline-primary">Játék indítása</Link>
                </div>
            </div>
        </>
    )
}