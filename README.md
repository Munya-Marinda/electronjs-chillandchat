# Chill and Chat

**Chill and Chat** is a simple real-time messaging application built using Node.js, Express, and Socket.IO. Users can connect to the chat, send messages, and receive messages from others instantly.

![0](https://github.com/user-attachments/assets/ba2069d7-ac65-4e5f-8896-8a6eb20ca0ba)

## Features

- Real-time messaging with Socket.IO.
- Simple, clean interface for chatting.
- Broadcasts messages to all connected clients.

## Technologies Used

- Node.js
- Express
- Socket.IO
- HTML/CSS (for the frontend)

## Getting Started

To get a local copy of **Chill and Chat** running, follow these steps.

### Prerequisites

- Node.js installed on your system.
- A terminal or command prompt.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chill-and-chat
   cd chill-and-chat
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project with the following content:

   ```env
   PORT=3000
   HOST=127.0.0.1
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open a web browser and go to `http://127.0.0.1:3000` to start chatting!

## Project Structure

```plaintext
chill-and-chat/
├── public/
│   └── index.html       # Frontend HTML file
├── server.js            # Main server file
├── .env                 # Environment variables
└── package.json         # Project dependencies and metadata
```

## How It Works

1. **Backend** (`server.js`): Sets up an Express server, serves static files, and initializes a WebSocket connection using Socket.IO.
2. **Frontend** (`public/index.html`): Contains a basic chat UI, listens for incoming messages, and sends messages through the WebSocket connection.
3. **WebSocket Events**:
   - `message`: Emitted by a client when sending a message; the server broadcasts this message to all connected clients.
   - `connection`: Triggers when a new client connects, assigning them a unique socket ID.
   - `disconnect`: Triggers when a client disconnects from the server.

## Usage

1. Enter a message in the text area and click **Send** to send a message.
2. Your message will appear on the chat with a "Me" prefix.
3. Messages from other users will appear with a "User" prefix.

## Example Code

Here's a snippet of the WebSocket event handling in `server.js`:

```javascript
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Message received:", data);
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});
```
````
