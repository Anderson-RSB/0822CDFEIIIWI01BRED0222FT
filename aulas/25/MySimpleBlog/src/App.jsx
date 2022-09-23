
import { Routes, Route } from 'react-router-dom';

import Publicacao from './pages/Publicacao';
import PublicacaoDetalhes from './pages/PublicacaoDetalhes';

export default function App() {

	/*
	
		Configuração da Rota
		com react router dom.
	*/
	return (
		<Routes>
			<Route
				path='/'
				element={<Publicacao />}
			/>
			<Route
				path='/:idPublicacao'
				element={<PublicacaoDetalhes />}
			/>
		</Routes>
	)
}
