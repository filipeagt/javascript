// Módulo de WEB Server
const http = require('http');

const hostname = '192.168.1.8';
const PORT =  process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    let url = req.url;
    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.end('<h1>Olá, Mundo!<h1>');
    }

    if (url === '/sobre') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.end('<h1>Página Sobre<h1>');
    }
})

server.listen(PORT, hostname , ()=>{
    console.log(`Servidor rodando em http://${hostname}:${PORT}`);
})