//npm i sequelize my mysql2 --save
const Sequelize = require('sequelize'); //Importação do módulo
const sequelize = new Sequelize('node_exemplo','root','',{ //Instancia do módulo / Conexão com o banco
    host: "127.0.0.1",
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
});

//Testando a conexão com o banco
// sequelize.authenticate().then(function(){
//     console.log('Conectado no banco com sucesso!')
// }).catch(function(err){
//     console.log('Falha ao se conectar: ' + err);
// });

module.exports = {Sequelize, sequelize};