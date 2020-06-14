import io from "socket.io-client";

const socket = io("webprogramozas.inf.elte.hu:3030", {
    "transports": ["polling", "websocket"]
});

export default socket;