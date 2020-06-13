import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from "socket.io-client";

const socket = io("webprogramozas.inf.elte.hu:3030", {
    "transports": ["polling", "websocket"]
});


export function Room() {
    const [room, setRoom] = useState('');
    useEffect(() => {
        if (room === "") {
            socket.emit("create-room",
                (res) => {
                    setRoom(res.roomId);
                }
            );
        }
    });

    return (
        <>
            <h1 className="text-light">Várakozó szoba: {room}</h1>
            <h2 className="text-light">Váralozás másik játékosra...</h2>
            <Link to="/" className="btn btn-outline-primary m-3">Főoldal</Link>
        </>
    )
}