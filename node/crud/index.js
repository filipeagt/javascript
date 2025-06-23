const express =  require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session'); //npm i express-session --save
const PORT = process.env.PORT || 3000;

//Configuração do handlebars
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

//Importar model usuários
const Usuario = require('./models/Usuario');
const { where } = require('sequelize');

//Configuração das sessions
app.use(session({
    secret: 'CriarUmaChaveQualquer1234!',
    resave: false,
    saveUninitialized: true
}));

app.get('/',(req,res)=>{
    if(req.session.errors) {
        var arrayErros = req.session.errors;
        req.session.errors = "";
        return res.render('index', {NavActiveCad:true, error:arrayErros})
    }

    if(req.session.success) {
        req.session.success = false;
        return res.render('index', {NavActiveCad:true, MsgSuccess:true})
    }

    res.render('index',{NavActiveCad:true});
});

app.get('/users',(req,res)=>{
    Usuario.findAll().then((valores) => {
        //console.log(valores.map(valores => valores.toJSON()));
        if(valores.length > 0) {
            return res.render('users',{NavActiveUsers:true, table:true, usuarios: valores.map(valores => valores.toJSON())});
        } else {
            res.render('users',{NavActiveUsers:true, table:false});
        }
    }).catch((err) => {
        console.log(`Houve um problema: ${err}`);
    });
    //res.render('users',{NavActiveUsers:true});
});

app.post('/editar',(req,res)=>{
    var id = req.body.id;
    Usuario.findByPk(id).then((dados) => {
        return res.render('editar', {error:false, id:dados.id, nome:dados.nome, email:dados.email});
    }).catch((err) => {
        console.log(err);
        return res.render('editar', {error: true, problema: 'Não é possível editar este registro!'});
    });
    //res.render('editar');
});

app.post('/cad',(req,res)=>{
    //Valores vindos do formulário
    var nome =  req.body.nome;
    var email = req.body.email;

    //Array que vai conter os erros
    const erros = [];

    //Remover os espaços em branco antes e depois
    nome = nome.trim();
    email = email.trim();

    //Limpar o nome de caracteres especiais (Apenas letras)
    nome = nome.replace(/[^A-zÀ-ú\s]/gi,'');
    nome =  nome.trim();
    console.log(nome);

    //Verificar se está vazio ou não o campo nome
    if (nome == '' || typeof nome == undefined || nome == null) {
        erros.push({mensagem: "Campo nome não pode ser vazio!"});
    }

    //Verificar se o campo nome é válido (Apenas letras)
    if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(nome)) {
        erros.push({mensagem: "Nome inválido!"});
    }

    //Verificar se está vazio ou não o campo email
    if (email == '' || typeof email == undefined || email == null) {
        erros.push({mensagem: "Campo e-mail não pode ser vazio!"});
    }

    //Verificar se o email é válido
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        erros.push({mensagem: "E-mail inválido!"});
    }

    if (erros.length > 0) {
        console.log(erros);
        req.session.errors = erros;
        req.session.success = false;
        return res.redirect('/');
    }

    //Sucesso nenhum erro
    //Salvar no banco de dados
    Usuario.create({
        nome: nome,
        email: email.toLowerCase()
    }).then(() => {
        console.log('Cadastrado com sucesso!');
        req.session.success = true;
        return res.redirect('/');
    }).catch((erro) => {
        console.log(`Ops, houve um erro: ${erro}`);
    });    

});

app.post('/update', (req,res)=>{
    //Valores vindos do formulário
    var nome =  req.body.nome;
    var email = req.body.email;

    //Array que vai conter os erros
    const erros = [];

    //Remover os espaços em branco antes e depois
    nome = nome.trim();
    email = email.trim();

    //Limpar o nome de caracteres especiais (Apenas letras)
    nome = nome.replace(/[^A-zÀ-ú\s]/gi,'');
    nome =  nome.trim();
    console.log(nome);

    //Verificar se está vazio ou não o campo nome
    if (nome == '' || typeof nome == undefined || nome == null) {
        erros.push({mensagem: "Campo nome não pode ser vazio!"});
    }

    //Verificar se o campo nome é válido (Apenas letras)
    if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(nome)) {
        erros.push({mensagem: "Nome inválido!"});
    }

    //Verificar se está vazio ou não o campo email
    if (email == '' || typeof email == undefined || email == null) {
        erros.push({mensagem: "Campo e-mail não pode ser vazio!"});
    }

    //Verificar se o email é válido
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        erros.push({mensagem: "E-mail inválido!"});
    }

    if (erros.length > 0) {
        console.log(erros);
        return res.status(400).send({status:400, erro: erros});
    }

    //Sucesso nenhum erro
    //Atualizar registros no banco de dados
    Usuario.update(
        {
            nome: nome,
            email: email.toLowerCase()
        },
        {
            where: {
                id: req.body.id
            }
        }
    ).then((resultado) => {
        console.log(resultado);
        return res.redirect('/users');
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});