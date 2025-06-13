const express = require('express'); //npm i express --save
const app = express();

//Importar o roteamento
const carros = require('./routes/carros')

//config
const PORT =  process.env.PORT || 3000

//Middlewares -  interceptador
app.get('/',(req,res,next)=>{
    console.log('Eu sou um middleware');
    next();
});

app.get('/',(req,res,next)=>{
    console.log('Eu sou um segundo middleware');
    next();
});

app.get('/',(req,res)=>{
    res.send('<h1>Página inicial</h1>');
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});