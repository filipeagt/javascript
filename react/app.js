/*
//Criar um elemento com JavaScript puro
//Imperativo
const h1 = document.createElement("h1");
h1.textContent = "Olá, mundo JS!";
h1.className = "header";
document.getElementById("root").append(h1);
console.log(h1);
*/

/*
//JSX
//Declarativo

function nomeCompleto(user) {
    return user.nome + " " + user.sobrenome;
}

const nome = "Filipe";
const usuario = {
    nome: "Filipe",
    sobrenome: "Almeida"
}
const pagina = (
    <div>
        <h1 className="header">Olá, {nomeCompleto(usuario)}!</h1>
        <p>Isso é um parágrafo</p>
    </div>
);
//console.log(elemento);

//Básico do react
ReactDOM.render(
    pagina,
    document.getElementById("root")
);
*/
function relogio() {
    const elemento = (
        <div>
            <h1>Olá, Mundo!</h1>
            <h2>Agora é {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(elemento, document.getElementById('root'));
}

setInterval(relogio, 1000);
