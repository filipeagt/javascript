//Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

///Importar Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

//Inmportar CSS Geral
import './App.css'

//Importar Componentes
import Navbar from './components/Navbar'
import Categorias from './components/Categorias'
import ModalFilter from './components/ModalFilter'

function App() {

  return (
    <div>
      <Navbar />
      <Categorias />
      <ModalFilter />
    </div>
  )
}

export default App
