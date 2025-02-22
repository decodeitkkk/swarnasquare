import React, { useEffect, useState } from "react";


const Graph2 = () => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const connectWebSocket = () => {
            const socketInstance = new WebSocket("wss://ss-backend-s5yv.onrender.com");

            socketInstance.onopen = () => {
                console.log("Connected to WebSocket server");
                socketInstance.send(JSON.stringify({ type: "subscribe", channel: "updates" }));
            };

            socketInstance.onmessage = (event) => {
                console.log(`Received message: ${event.data}`);
            };

            socketInstance.onerror = (error) => {
                console.error("WebSocket error:", error);
            };

            socketInstance.onclose = () => {
                console.log("WebSocket disconnected, reconnecting in 3 seconds...");
                setTimeout(connectWebSocket, 3000); // Auto-reconnect after 3 seconds
            };

            setSocket(socketInstance);
        };

        connectWebSocket();

        return () => {
            if (socket) socket.close();
        };
    }, []);

    return <div>Graph2</div>;
};

export default Graph2;
