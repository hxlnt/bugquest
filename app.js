const express = require('express'); 
const app = express(); 
const server = require('http').createServer(app); 
const port = process.env.PORT || 3000;

app.use(express.static('public'))

server.listen(port);



