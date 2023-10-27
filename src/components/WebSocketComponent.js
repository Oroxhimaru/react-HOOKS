import React, { useState, useEffect } from 'react';

function WebSocketComponent() {
    const [message, setMessage] = useState('');
    const webSocketUrl = 'wss://your-real-websocket-url.com';
  
    useEffect(() => {
      const socket = new WebSocket(webSocketUrl);
  
      socket.onopen = () => {
        console.log('WebSocket connected');
      };
  
      socket.onmessage = (event) => {
        setMessage(event.data);
      };
  
      socket.onclose = () => {
        console.log('WebSocket closed');
      };
  
      return () => {
        socket.close();
      };
    }, []); // Empty dependency array means this effect runs once after the initial render.
  
    return (
      <div>
        <p>Received message: {message}</p>
      </div>
    );
  }

export default WebSocketComponent