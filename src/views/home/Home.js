import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Desc } from './Desc';
import { setRoom } from '../../state/game/actions';
import { useDispatch } from 'react-redux';
import socket from '../../websocket';

export function Home() {
    const input = React.createRef();
    const history = useHistory();

    const dispatch = useDispatch();
    const room = (roomId) => dispatch(setRoom(roomId));

    return (
        <>
            <Desc />
            <div className="container-fluid mx-auto my-5 w-75">
                <div className="row">
                    <div className="col-md p-2 m-2 text-primary border border-primary rounded">
                        <h4>Új játék indítása</h4>
                        <Link to="/room" className="btn btn-primary btn-block">Új játék</Link>
                    </div>
                    <div className="col-md p-2 m-2 text-primary border-primary border rounded">
                        <h4>Csatlakozás szobához</h4>
                        <div className="input-group">
                            <input type="text" ref={input} className="form-control" placeholder="Szoba kódja" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" onClick={(event) => {
                                    //console.log(input.current.value);
                                    room(input.current.value);
                                    socket.emit("join-room", input.current.value, (res) => {
                                        console.log(res);
                                        if (res.status === "error") {
                                            alert(res.message);
                                        } else if (res.status === "ok") {
                                            history.push("/prep");
                                        }
                                    })
                                }}>Csatlakozás</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}