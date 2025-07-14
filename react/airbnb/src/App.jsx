import { useEffect, useState } from 'react';
//Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

///Importar Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

//Inmportar CSS Geral
import './App.css';

//Importar Componentes
import Navbar from './components/Navbar';
import Categorias from './components/Categorias';
import ModalFilter from './components/ModalFilter';
import Card from './components/Card';

function App() {
  //Estados da Aplicação
  const [isLoading, setIsLoading] = useState(true);
  const [catId, setCatId] = useState(1);
  const [allHouses, setAllHouses] = useState([]);
  const [filterHouses, setFilterHouses] = useState([]);

  //Primeira vez que a aplicação rodou
  useEffect(() => {
    fetch('https://curso.programacaoweb.com.br/api-airbnb/')
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json();
        }
        throw new Error('Algo deu errado!');
      }).then((respostaJSON) => {
        setAllHouses(respostaJSON);
      }).catch((erro) => {
        console.log(erro);
      })
  }, [])

  useEffect(() => {
    console.log(allHouses);
  }, [allHouses])

  return (
    <div>
      <Navbar />
      <Categorias />
      <Card />
      <ModalFilter />
    </div>
  )
}

export default App
