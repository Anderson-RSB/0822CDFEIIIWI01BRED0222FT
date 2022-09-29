import { useEffect, useState } from "react";

import Lista from "./componentes/Lista";
import ContextoLista from "./contextos/ContextoLista";

function App() {

	const [produtos, definirProdutos] = useState([]);

	useEffect(() => {

		if (localStorage.getItem('produtos') == null) {
			fetch('/api/produtos')
				.then(resposta => resposta.json())
				.then(listaDeProdutos => {
					definirProdutos(listaDeProdutos);
					localStorage.setItem("produtos", JSON.stringify(listaDeProdutos))
				});
		}
		else {
			definirProdutos(JSON.parse(localStorage.getItem('produtos')));
		}

	});

	return (
		<>
			<ContextoLista.Provider value={[produtos, definirProdutos]}>
				<h1>Minha lista</h1>
				<Lista />
			</ContextoLista.Provider>
		</>
	)
}

export default App
