const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	fs.readFile('./public/index.html', 'utf8', (err, data) => {
		if (err) {
			res.statusCode = 404;
			res.setHeader('Content-type', 'text/plain');
			res.end('404 - Not found');
		} else {
			res.statusCode = 200;
			res.setHeader('Content-type', 'text/html');
			res.end(data);
		}
	});
});

server.listen(9999, 'localhost', () => console.log('The server is listening at localhost:9999'));