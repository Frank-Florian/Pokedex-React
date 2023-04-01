import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import Home from './components/Home'
import Item from './components/Item'
import ProtectedRoutes from './components/ProtectedRoutes'
import pokedex from "./assets/img/pokedex.png"
import Confi from './components/Confi'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <header>
          <img className='title' src={pokedex} alt="pokedex" />

          <div className='black_stripe'></div>
          <div className='black_stripe'></div>
          <div className='black_stripe'></div>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<Item />} />
            <Route path='/confi' element={<Confi />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
