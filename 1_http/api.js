const fs = require('fs');
const http = require('http');

// Using a Synchronous right when server starts has no effect on blocking the event loop
// So we don't have to read the data.json file everytime we get a request
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

// Loading static pages
const tempIndex = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');


const server = http.createServer((request, response) => {
    const pathName = request.url;

    if (pathName === '/' || pathName === '/home') {
        response.writeHead(200, {
            'Content-type': 'text/html'
        })
        response.end(tempIndex);

    } else if (pathName === '/api') {
        response.writeHead(200, {
            'Content-type': 'application/json'
        });
        response.end(data);

    } else {
        response.writeHead(404, {
            'Content-type': 'text/html',
        });
        response.end('<h1">404 Page not found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port \'8000\'');
});