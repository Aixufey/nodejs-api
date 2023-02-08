const url = require('url');
const http = require('http');
////////////////////////////////////
///Server
///1 creating the server
const server = http.createServer((request, response) => {
	//.end very simple sending back an response from server side
	// console.log(request); // request object

	console.log(request.url);

	const pathName = request.url;

	if (pathName === '/' || pathName === '/home') {
		response.end('This is the Home');
	} else if (pathName === '/about') {
		response.end('This is the About');
	} else {
		// HTTP header info abot response from server side
		// The browser is expecting a html file
		// Can specify your own header and header always goes befire the .end
		response.writeHead(404, {
			'Content-type': 'text/html',
			'my-own-header': 'any thing you see here'
		});
		response.end('<h1">404 Page not found</h1>');
	}
});

// need a random port, and specify localhost to test
server.listen(8000, '127.0.0.1', () => {
	console.log('Listening to request on port \'8000\'');
});

////////////////////////////////////
///Routing
