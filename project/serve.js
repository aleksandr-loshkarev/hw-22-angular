const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        if (body !== '') {
            const obj = JSON.parse(body);
            const fullname = obj.name + ' ' + obj.surname;
            res.end(JSON.stringify(fullname));
        }
        res.end(body);
    });
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));