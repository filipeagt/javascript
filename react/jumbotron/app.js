function App(props) {
    const usuarios = [
        {
            id: 1,
            nome: "Filipe",
            idade: 33
        },
        {
            id: 2,
            nome: "Taís",
            idade: 32
        },
        {
            id: 3,
            nome: "Theo",
            idade: 5
        },
        {
            id: 4,
            nome: "Rajado",
            idade: 6
        }
    ];
    return(
        <ul><Item lista={usuarios} /></ul>
    );
}

function Item(props) {
    const usuarios = props.lista;
    
    return (usuarios.map(
        (usuario)=> 
        <li key={usuario.id.toString()}>
            Nome: {usuario.nome} <br />
            Idade: {usuario.idade}  <br /><br />
        </li>
    ));
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);