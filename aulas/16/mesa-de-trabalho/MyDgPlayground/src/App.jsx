
import { useEffect, useState } from "react";


export default function App() {

	const [artigos, definirArtigos] = useState([]);
	const [comentarios, definirComentarios] = useState([]);
	const [perfil, definirPerfil] = useState({});

	useEffect(() => {

		/* 
	
			Adicione a comunicação 
			com servidor aqui...

			Endpoint

			GET http://localhost:3000/posts

			GET http://localhost:3000/comments

			GET http://localhost:3000/profile

			Response

			{
				"posts": [
					{ 
						"id": 1, 
						"title": "json-server", 
						"author": "typicode" 
					}
				],
				"comments": [
					{ 
						"id": 1, 
						"body": "some comment", 
						"postId": 1 
					}
				],
				"profile": { 
					"name": "typicode" 
				}
			}
		
		*/

		fetch('http://localhost:3000/posts')
			.then((response) => response.json())
			.then((json) => definirArtigos(json));

		fetch('http://localhost:3000/comments')
			.then((response) => response.json())
			.then((json) => definirComentarios(json));

		fetch('http://localhost:3000/profile')
			.then((response) => response.json())
			.then((json) => definirPerfil(json));

	}, []);


	/*
		Renderize as tarefas em tela...
		utilize map()
	*/
	return (
		<>
			<div>
				<h1>Publicações</h1>
				{artigos.map((artigo) => <div key={artigo.id}>{artigo.title}</div>)}
			</div>

			<div>
				<h1>Comentários</h1>
				{comentarios.map((comentario) => <div key={comentario.id}>{comentario.body}</div>)}
			</div>

			<div>
				<h1>Perfil</h1>
				<div>{perfil.name}</div>
			</div>
		</>

	)
}
