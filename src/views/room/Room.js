import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { setRoom } from '../../state/game/actions';
import { useDispatch, useSelector } from 'react-redux';
import socket from "../../websocket";

export function Room() {
    //const [room, setRoom] = useState('');
    const history = useHistory();

    const dispatch = useDispatch();
    const set = (roomId) => dispatch(setRoom(roomId));

    const room = useSelector(state => state.game.room);

    useEffect(() => {
        if (room == null) {
            socket.emit("create-room",
                (res) => {
                    //setRoom(res.roomId);
                    set(res.roomId);
                }
            );
        }else{
            socket.on("player-joined", () => {
                //console.log("other user connected");
                history.push('/prep')
            });
        }
    });

    return (
        <>
            <h1 className="text-light"><strong>Szoba: </strong>{room}</h1>
            <h2 className="text-light">Váralozás másik játékosra...</h2>
            <Link to="/" className="btn btn-outline-primary m-3">Főoldal</Link>
        </>
    )
}