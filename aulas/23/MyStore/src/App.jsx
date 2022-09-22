import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'

function App() {

  return (
    <>

      <Nav />

      {
        /*
          2- Configuração das rotas
        */
      }

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/contatos'
          element={<Contact />}
        />
        <Route
          path='/produto/:idProduto'
          element={<Product />}
        />
      </Routes>
    </>
  )
}

export default App
