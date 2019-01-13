const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log("Server is running on port: " + port));