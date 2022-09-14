import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';

import { Routes, Route } from 'react-router-dom';

function App() {

	return (
		<>
			<Nav />

			{
				/*
					Conteúdo irá ser alterado conforme a navegação...

					1. Definir o container com Routes
					2. Configurar as rotas com Route
						- Qual o caminho?
						- Qual componente o caminho irá renderizar?
				*/
			}
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/sobre"
					element={<About />}
				/>
			</Routes>
		</>
	)
}

export default App
