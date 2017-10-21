	
module.exports = (_req, _res) => {	
	_res.writeHead(200, { 'Content-Type': 'text/html' });
	_res.end('<!DOCTYPE html><html><head><title></title></head><body>hello world\n<script type="text/javascript" src="javascripts/main.js"></script></body></html>');
}