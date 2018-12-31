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
			reqObj = {
				url: req.url,
				method: req.method,
				httpVersion: req.httpVersion,
				headers: req.headers
			};

			resObj = {
				statusMessage: res.statusMessage,
				statusCode: res.statusCode,
				_header: res._header
			}
			data = data.replace('{{ req }}', JSON.stringify(reqObj, null, 4))
			data = data.replace('{{ res }}', JSON.stringify(resObj, null, 2))
			res.end(data);
		}
	});
});

server.listen(9999, 'localhost', () => console.log('The server is listening at localhost:9999'));