function Header(props) {
    return (
        <header className="pb-3 mb-4 border-bottom"> <a href="https://getbootstrap.com/"
            className="d-flex align-items-center text-body-emphasis text-decoration-none"> <svg
                xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94"
                role="img">
                <title>Bootstrap</title>
                <path d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                    fill="currentColor"></path>
            </svg> <span className="fs-4">Jumbotron example</span> </a>
        </header>
    );
}

/*//Componente funcional
function CustomJumbotron(props) {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                <p className="col-md-8 fs-4">Using
                    a series of utilities, you can create this jumbotron, just like the one
                    in previous versions of Bootstrap. Check out the examples below for how
                    you can remix and restyle it to your liking.
                </p>
                <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
        </div>
    );
}*/

//Componente de classe
class CustomJumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "Filipe"
        }
    }

    trocaNome = ()=> {
        this.setState(function(prevState) {
            return {nome: prevState.nome + ' Almeida'}
        })
    }

    render() {
        return (
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{this.state.nome}</h1>
                    <p className="col-md-8 fs-4">Aprendendo State (Estado)</p>
                    <button onClick={this.trocaNome} className="btn btn-primary btn-lg" type="button">Trocar Nome</button>
                </div>
            </div>
        );
    }
}

/*class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cont: 0
        }
    }

    add = ()=> {
        this.setState(function(prevState) {
            return {cont: prevState.cont + 1}
        })
    }

    sub = ()=> {
        this.setState(function(prevState) {
            return {cont: prevState.cont - 1}
        })
    }

    render() {
        return (
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Contador: {this.state.cont}</h1>
                    <p className="col-md-8 fs-4">Aprendendo State (Estado)</p>
                    <div className="row gap-2">
                        <button onClick={this.sub} className="col btn btn-danger btn-lg" type="button">Sub -</button>
                        <button onClick={this.add} className="col btn btn-success btn-lg" type="button">Add +</button>
                    </div>
                </div>
            </div>
        );
    }
}*/

//Componente funcional
function Contador(props) {

    let tema = props.tema;
    let btnNome = props.btnNome;

    //Criar um state
    const [count, setCount] = React.useState(0);
    const [nome, setNome] = React.useState(btnNome);

    //Efeito colateral depois de renderizado
    React.useEffect(()=>{
        console.log('Ativou efeito colateral');
    });
    //Efeito colateral somente para count
    React.useEffect(()=>{
        document.title = 'Contador: ' + count;
        console.log('Efeito colateral count');
        if(count >= 5) {
            setNome('Filipe');
        }
    },[count]);

    //Efeito colateral somente para nome
    React.useEffect(()=>{
        console.log('Efeito colateral nome');
    },[nome]);

    //Efeito colateral somente uma vez (usado para consumo de api)
    React.useEffect(()=>{
        console.log('Efeito colateral apenas na montagem');
    },[]);

    function add() {
        setCount(count + 1);
    }

    function sub() {
        setCount(count - 1);
    }

    function trocaNome() {
        setNome('Filipe');
    }

    console.log('Renderizado componente');
/*
    if(count > 10) {
        return (
            <div className="p-5 mb-4 bg-ligth rounded-3">
                <div className="container-fluid py-5">
                    <Explodiu />
                </div>
            </div>
        );
    }
*/  
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                {
                    nome && <h1 className="display-5 fw-bold">Nome: {nome}</h1>
                }
                
                {
                    count > 10 ? <Explodiu /> : <h1 className="display-5 fw-bold">Contador: {count}</h1>
                }                
                <p className="col-md-8 fs-4">Aprendendo State (Estado)</p>
                <div className="row gap-2">
                    <button onClick={sub} className="col btn btn-danger btn-lg" type="button">Sub -</button>
                    <button onClick={add} className="col btn btn-success btn-lg" type="button">Add +</button>
                </div>
                <button onClick={trocaNome} className="col btn btn-primary btn-lg" type="button">TRocar Nome</button>
            </div>
        </div>
    );
    
}

function Explodiu(props) {
    return (
        <h1 className="text-danger">EXPLODIU!</h1>
    );
}

function Jumbotron(props) {
    if (props.tema == "dark") {
        return (
            <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>Swap
                    the background-color utility and add a `.text-*` color utility to mix
                    up the jumbotron look. Then, mix and match with additional component
                    themes and more.
                </p>
                <button className="btn btn-outline-light" type="button">Example button</button>
            </div>
        );
    } else {
        return (
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>Add borders</h2>
                <p>Or,
                    keep it light and add a border for some added definition to the
                    boundaries of your content. Be sure to look under the hood at the source
                    HTML here as we've adjusted the alignment and sizing of both column's
                    content for equal-height.
                </p>
                <button className="btn btn-outline-secondary" type="button">Example button</button>
            </div>
        );
    }

}


function DoisJumbotrons(props) {
    return (
        <div className="row align-items-md-stretch">
            <div className="col-md-6">
                <Jumbotron tema="dark"/>
            </div>
            <div className="col-md-6">
                <Jumbotron tema="outline" />
            </div>
        </div>
    );
}

function Footer(props) {
    return (
        <footer className="pt-3 mt-4 text-body-secondary border-top">
            © 2025
        </footer>
    );
}

