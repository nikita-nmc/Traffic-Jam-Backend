
import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
//const SOCKET_SERVER_URL = "http://aaf9f6b1859e.ngrok.io";
// const SOCKET_SERVER_URL="http://172.20.10.40:3000";
const SOCKET_SERVER_URL="http://127.0.0.1:3001";

const useLobby = (roomId) => {
  console.log("useLobby");
  const [messages, setMessages] = useState([]);
  const [socket] = useState(socketIOClient(SOCKET_SERVER_URL, {
    query: { roomId },
  }));

  useEffect(() => {
    console.log(roomId);
    console.log(socket);
    // socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
    //   query: { roomId },
    // });

    // Listens for incoming messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socket.id,
      };
      console.log(incomingMessage);
      setMessages((messages) => [...messages, incomingMessage.body]);
    });
}, [roomId]);

const sendMessage = (messageBody) => {
  console.log(messageBody);
  socket.emit(NEW_CHAT_MESSAGE_EVENT, {
    body: messageBody,
    senderId: socket.id,
  });
};

return { messages, sendMessage };
};


export default useLobby;