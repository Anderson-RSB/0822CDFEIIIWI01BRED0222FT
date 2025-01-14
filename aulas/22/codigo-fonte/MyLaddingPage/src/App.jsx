
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
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
