import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Desc } from './Desc';
import { setRoom, setPlayer, readyPlayer } from '../../state/game/actions';
import { addFigure } from '../../state/board/actions';
import { setFigures } from '../../state/player/actions';
import { useDispatch } from 'react-redux';
import socket from '../../websocket';

export function Home() {
    const input = React.createRef();
    const history = useHistory();

    const dispatch = useDispatch();
    const player = (playerId) => dispatch(setPlayer(playerId));
    const room = (roomId) => dispatch(setRoom(roomId));
    const place = (tileId, figureId, playerId) => dispatch(addFigure(tileId, figureId, playerId));
    const setReady = (playerId) => dispatch(readyPlayer(playerId));
    const figuresSet = (playerId, figures) => dispatch(setFigures(playerId, figures));

    socket.on('room-is-full', (data) => {
        //alert(data.roomId + "\n" + data.player);
        player((data.player - 1));
        console.log("player: " + (data.player - 1));
    });

    socket.on('action-sent', (data) => {
        data.action.tiles.map((item, key) => {
            if (item != null) {
                place(key, item.figure, item.user);
                console.log(item);
            }
            return null;
        });
        if (data.action.figures != null) {
            figuresSet(data.action.player, data.action.figures);
        }
        /*console.log(data.action.player)
        data.action.figures.map((item) => {
            console.log(item);
            added(item.id, data.action.player);
        })*/
        setReady(data.action.player);
    });

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