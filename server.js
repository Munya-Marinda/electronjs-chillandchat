const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

// Initialize express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the public folder
app.use(express.static("public"));

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Handle receiving a message from a client
  socket.on("message", (data) => {
    console.log("Message received:", data);

    // Broadcast message to other clients
    socket.broadcast.emit("message", data);
  });

  // Handle client disconnect
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
