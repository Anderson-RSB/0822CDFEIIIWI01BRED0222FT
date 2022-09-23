
import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';


export default function Publicacao() {

    // 1. Defino o valor inicial da minha lista...
    const [artigos, definirArtigos] = useState([]);

    // 2. Após renderizar, realizo a requisição para servidor...
    // 2.1. Atualizo os valores do estado useState
    useEffect(() => {
        console.log('useEffect');
        // 1. Realizar a requisição...
        fetch('http://localhost:3000/posts')
            // 2. Confirmar se a requisição faz sentido...
            // 2.1. Pedir para requerer os valores em JSON...
            .then(resposta => resposta.json())
            // 3. Acesso a resposta em JSON
            // 3.1. Altero os artigos utilizando o método auxiliar do useState...
            .then(artigosEmJSON => definirArtigos(artigosEmJSON))

    }, []);

    return (
        <>
            {console.log('Componente')}
            <h1>Publicações</h1>
            <ul>
                {
                    /*
                        Mapeio os valores em tela
                        passando id como parametro no link
                        do react router dom.
                    */
                }
                {artigos.map(artigo => {

                    return (
                        <li key={artigo.id}>
                            <Link to={'/' + artigo.id}>
                                {artigo.title}
                            </Link>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}
