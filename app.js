const express = require('express');

// App
const app = express();

// Route Hello World
app.get('/', function(request, response) {
    response.write('Testando, um, dois, três...');
    response.end();
});

// Create server
app.listen(8080);