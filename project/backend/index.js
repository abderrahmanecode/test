const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST","UPDATE", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
