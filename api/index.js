const express = require("express");
// const http = require("http");
const cors = require("cors");
const app = express();
const expressWs = require("express-ws")(app);
// const path = require("path");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
app.ws("/socket", (ws, req) => {
  console.log(req);
  ws.on("message", data => {
    console.log(data);
  });
});

const wss = expressWs.getWss("/socket");

setInterval(() => {
  wss.clients.forEach(client => {
    // console.log(client);
    client.send("hello");
  });
}, 1000);
// app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/status", (_req, res) => {
  res.json({ message: "bah" });
});

// const server = http.createServer(app);

app.listen(PORT, () => {
  console.info(
    `server listening on http://localhost:${PORT}\n`,
    `wss listening on ws://localhost:${PORT}/socket`
  );
});

// const WebSocket = require("ws");

// const wss = new WebSocket.Server({ port: 8080 });

// wss.on("connection", function connection(ws) {
//   ws.on("message", function incoming(message) {
//     console.log("received: %s", message);
//   });

//   ws.send("something");
// });
