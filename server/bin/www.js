// Web Server

const app = require('../app');
const http = require('http');


 // set port, listen for requests
const port = process.env.PORT || '8900';


const server = http.createServer(app);
server.listen(port);