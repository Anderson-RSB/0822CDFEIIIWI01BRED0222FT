
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {

	return (
		<div className="container">

			<div className="row">
				<div className="col">
					{
						/*
							O componente Nav é responsável pela navegação
							da Aplicação.
						*/
					}
					<Nav />
				</div>
			</div>

			<div className="row my-3">
				<div className="col">
					{
						/*
							Adicione o container da rota aqui...
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
						<Route
							path="/contatos"
							element={<Contact />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	)
}
