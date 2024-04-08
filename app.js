const express = require('express');

// App
const app = express();

// Route Hello World
app.get('/', function(request, response) {
    response.write('Hello World!');
    response.end();
});

// Create server
app.listen(8080);