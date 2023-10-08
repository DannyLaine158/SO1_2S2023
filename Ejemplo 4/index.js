const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

app.use(cors);
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const { Server } = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

const mysql = require('mysql');
const { truncate } = require('fs');
const db = mysql.createConnection({
    host: "35.193.170.205",
    user: "root",
    password: "root",
    database: "prueba"
});

db.connect(err => {
    if (err) console.log(err);
});

io.on('connection', (socket) => {
    console.log("Se conecto un cliente");

    socket.on("key", data => {
        console.log(data);
        setInterval(() => {
            io.emit("key", data + " desde el server")
        }, 500);
    })
});

server.listen(3000, () => {
    console.log("Server on port 3000");
})