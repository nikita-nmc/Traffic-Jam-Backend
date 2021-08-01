const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToDatabase = require('./db/db-connect');
const util = require('util');
const socket = require('socket.io');
const http = require("http");


const app = express();
app.use(cors());
const server = new http.Server(app);
// Setup Socket
const io = new socket.Server(server, {
  cors: {
    origin: "*"
  }
});

// Setup Express
//const app = express();
// const origin = "http://localhost:3000";
const port = process.env.PORT || 3001;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";



//Listen for a client connection 
io.on("connection", (socket) => {
    //Socket is a Link to the Client 
    console.log("New Client is Connected!", socket.handshake.address);
    //Here the client is connected and we can exchanged 

    // Join a conversation
    const { roomId } = socket.handshake.query;
    socket.join(roomId);

    // Listen for new messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
      console.log(data);
      io.to(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
    });
  });

// Start the DB running. Then, once it's connected, start the server.
//connectToDatabase()
   //.then(function() {
       server.listen(port, () => console.log(`App server listening on port ${port}!`))
   //});