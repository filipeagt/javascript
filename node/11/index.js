const express = require('express'); //npm i express --save
const app = express();

//Importar o roteamento
const carros = require('./routes/carros')

//config
const PORT =  process.env.PORT || 3000

//Middlewares -  interceptador
const usuarioLogado = true;

app.use('/restrita',(req,res,next)=>{
    if(!usuarioLogado){
        res.redirect('/');
    }
    next();
});

app.get('/',(req,res)=>{
    res.send('<h1>Página inicial</h1>');
});

app.get('/restrita',(req,res)=>{
    res.send('<h1>Rota restrita</h1>');
});

app.get('/restrita/usuarios',(req,res)=>{
    res.send('<h1>Listar usuários</h1>');
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});