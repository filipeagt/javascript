const express = require('express'); //npm i express --save
const app = express();

//Importar o roteamento
const carros = require('./routes/carros')

//config
const PORT =  process.env.PORT || 3000

//GET, POST, PUT, DELETE
app.get('/', (req, res)=>{
    //res.send('<h1>Hello, World!</h1>');
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/sobre', (req, res)=>{
    res.send('<h1>Página Sobre</h1>');
});

app.use('/carros', carros);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});