// Módulo de WEB Server
const http = require('http');

//Módulo de arquivos do sistema - File System
const fs =  require('fs');

const hostname = '192.168.1.8';
const PORT =  process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    let url = req.url;

    if (url === '/') {
        fs.readFile('./public/index.html', (err, conteudo)=>{
            if(err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html; charset=utf-8');
            res.end(conteudo);
        });
        
    }

    if (url === '/sobre') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.end('<h1>Página Sobre<h1>');
    }

    if (url === '/contato') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.end('<h1>Página Contato<h1>');
    }

    if (url === '/teste') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.end('<h1>Página Teste<h1>');
    }
})

server.listen(PORT, hostname , ()=>{
    console.log(`Servidor rodando em http://${hostname}:${PORT}`);
})