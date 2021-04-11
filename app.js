const express = require('express')
// const https = require('https')
const http = require('http')
const fs = require('fs');
const app = express();

fs.mkdirSync('./logs', { recursive: true });

app.get('/', (req, res) => {
  fs.appendFileSync('./logs/log', 'ddfdfds');
  res.send('Hello World!')
})

// const server = https.createServer({ cert: fs.readFileSync('./fullchain.pem'), key: fs.readFileSync('./privatekey.pem') }, app);
const server = http.createServer({}, app);

// server.listen(443, () => console.log('App listening.'));
server.listen(8080, () => console.log('App listening.'));