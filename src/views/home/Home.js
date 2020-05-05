import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Room } from '../room/Room';
import { Desc } from './Desc';

export function Home() {
    return (
        <>
            <Desc/>
            <div className="container-fluid mx-auto my-5 w-75">
                <div className="row">
                    <div className="col-md p-2 m-2 text-primary border border-primary rounded">
                        <h4>Új játék indítása</h4>
                        <Link to="/room" className="btn btn-primary btn-block">Új játék</Link>
                    </div>
                    <div className="col-md p-2 m-2 text-primary border-primary border rounded">
                        <h4>Csatlakozás szobához</h4>
                        <div class="input-group">
                            <input type="text" className="form-control" placeholder="Szoba kódja" />
                            <div className="input-group-append">
                                <Link to="/prep" className="btn btn-primary">Csatlakozás</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}