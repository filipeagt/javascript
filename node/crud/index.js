const express =  require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

//Configuração do handlebars
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index',{NavActiveCad:true});
});

app.get('/users',(req,res)=>{
    res.render('users',{NavActiveUsers:true});
});

app.get('/editar',(req,res)=>{
    res.render('editar');
});

app.post('/cad',(req,res)=>{
    res.send(req.body.email);
    //Validar os valores que vieram do formulário
    //Tratar esses valores
    //Enviar esses valores para um banco de dados
});

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});