import { useState, useEffect } from "react";

/*
	Criei um componente no mesmo arquivo
	para simplificar o entendimento.
*/
function Item({ personagem }) {
	return <li>{personagem.name}</li>
}

function App() {

	/*
		1) Crio a propriedade personagens com estado inicial
		de uma Array vazia, esperando que posteriormente a minha
		requisição com o servidor, defina um novo valor contendo
		a lista de personagens e forçando a re-apresentação/renderização
		da tela.
  
		Obs.: O useState força a re-apresentação da tela 
		com os dados atualizados.
	*/
	const [personagens, definirPersonagens] = useState([]);

	/*
		2) Crie um useEffect para me comunicar com o servidor,
		depois da tela renderizada com o valor inicial do useState [].

		Depois de realizar a requisição e receber a resposta do servidor
		atualizo o valor do useState com a lista de personagens.
	*/
	useEffect(() => {
		// 3) Realizo a requisição para o servidor e recebo um promessa...
		fetch('https://rickandmortyapi.com/api/character')
			// 3.1) Utilizo o .then() para aguardar que a promessa seja cumprida e retorno o valor.
			.then((respostaDoServidor) => {
				// 3.2) Peço para que o servidor me entregue os dados em json, o servidor me retorna outra promessa (Putz, quase um político)
				return respostaDoServidor.json();
			})
			// 3.3) Utiliza o .then() mais uma vez para aguardar que a promessa de converter os dados em json seja cumprida.
			.then((respostaConverterEmJson) => {
				// 3.4) Atualizo o valor do useState de personagens, forçando a tela ser re-apresentada com os valores atualizados.
				definirPersonagens(respostaConverterEmJson.results);
			});

	}, []);

	return (
		<ul>
			{
				/*
					4) Mapeei os valores do personagens e apresentei 
					eles em tela.
				*/
				personagens.map((personagem, indice) => <Item key={indice} personagem={personagem} />)
			}
		</ul>
	)
}

export default App
