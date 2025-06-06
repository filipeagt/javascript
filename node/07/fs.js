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
/*
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
*/

/* Criar / Atulaizar arquivos */

//fs.writeFile() - substitui o conteúdo do arquivo caso exista, se nã existir ele cria um novo com o conteúdo passado
/*
if(!fs.existsSync('./public/teste.txt')){
    fs.writeFile('./public/teste.txt', 'Teste de conteúdo!', (err)=>{
        if(err){
            throw err;
        }
        console.log('Arquivo criado com sucesso!');
    })
}
*/

//fs.appendFile() - adiciona contúdo num arquivo, se o arquivo não existri ele cria
/*
fs.appendFile('outroarquivo.txt', '\nAdicionado conteúdo!', (err)=>{
    if(err) {
        throw err;
    }
    console.log('Arquivo Atualizado!')
})
*/
//fs.open() - abre um arquivo para leitura, se o arquivo não existir ele cria vazio. Para criar um arquivo usar a flag "w" 
/*
fs.open('arquivo.txt', 'w', (err, file)=>{
    if(err) {
        throw err;
    }
    console.log('Salvo!')
})
*/

/* Ler Arquivos */
// fs.readFile()

/* Renomear / Excluir */
// fs.rename() - Renomear arquivo
/*
fs.rename('arquivo.txt', 'filipe.txt', (err)=>{
    if(err) {
        throw err;
    }
    console.log('Arquivo renomeado!');
})
*/

// fs.unlink() - Excluir arquivo
/*
fs.unlink('filipe.txt', (err)=>{
    if(err) {
        throw err;
    }
    console.log('Arquivo deletado!');
})
*/