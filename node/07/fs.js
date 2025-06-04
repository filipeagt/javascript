//Módulo de arquivos do sistema - File System
const fs =  require('fs');

/* Manipulação de pastas */

//fs.existsSync() - Verifcar se caminho existe
//fs.mkdirSync() - Criar uma pasta
//fs.renameSync() - Renomeaar uma pasta
//fs.rmdir() - Deletar uma pasta

/*
if(!fs.existsSync('./public')) {
    fs.mkdirSync('./public', (err)=>{
        if(err){
            throw err;
        } 
        console.log('Pasta criada com sucesso!');       
    });
} else {
    console.log('Apasta já existe!');
}
*/
//fs.existsSync('./public') || fs.mkdirSync('./public'); //Equivalente aos comando acima
/*
if(fs.existsSync('./public')) {
    fs.renameSync('./public', './filipe', (err)=>{
        if(err){
            throw err;
        } 
        console.log('Pasta renomeada com sucesso!');       
    });
} else {
    console.log('Impossível renomear por que "public" não existe!');
}
*/
if(fs.existsSync('./filipe')) {
    fs.rm('./filipe',{recursive:true} , (err)=>{ //fs.rmdir(path, { recursive: true }) Depreciado
        if(err){
            throw err;
        } 
        console.log('Pasta deletada com sucesso!');       
    });
} else {
    console.log('Impossível deletar por que "filipe" não existe!');
}

