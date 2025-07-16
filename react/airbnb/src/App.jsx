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
import Skeleton from './components/Skeleton';

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
        setIsLoading(false);
      }).catch((erro) => {
        console.log(erro);
      })
  }, [])

  useEffect(() => {
    // console.log(allHouses);
    filterById(catId);
  }, [allHouses])

  useEffect(() => {
    // console.log(filterHouses);
  }, [filterHouses])

  useEffect(() => {
    // console.log('A categoria atual é ' + catId);
  }, [catId])

  const changeCat = (id) => {
    setCatId(id);
    filterById(id);
  }

  //Filtrar por preço
  const filterById = (id) => {
    const novaLista = allHouses.filter((item) => {
      return item.categoria === id;
    })
    setFilterHouses(novaLista);
  }

  //Filtrar por id da categoria
  const filterByPrice = (catId, min, max)=>{
    const novaLista = allHouses.filter((item) => {
      return item.categoria === catId
        && item.preco >=  min
        && item.preco <= max;
    })
    setFilterHouses(novaLista);
  }

  const resetFilter = (id) => {
    filterById(id);
  }

  return (
    <div>
      <Navbar />
      <Categorias changeCat={changeCat} />
      {
        isLoading ?
        <div className="container-fluid mt-5 py-5">
        <div className='container-airbnb row mt-5 py-5'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div> 
        </div>
        :
        <Card dados={filterHouses} />
      }    
      <ModalFilter resetFilter={resetFilter} catId={catId} filterByPrice={filterByPrice} itens={filterHouses} />
    </div>
  )
}

export default App
