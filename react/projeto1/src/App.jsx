import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
