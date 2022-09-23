import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function PublicacaoDetalhes() {

    const { idPublicacao } = useParams();

    const [artigo, definirArtigo] = useState({});

    useEffect(() => {
        console.log('useEffect');
        // 1. Realizar a requisição...
        fetch(`http://localhost:3000/posts/${idPublicacao}`)
            // 2. Confirmar se a requisição faz sentido...
            // 2.1. Pedir para requerer os valores em JSON...
            .then(resposta => resposta.json())
            // 3. Acesso a resposta em JSON
            // 3.1. Altero os artigos utilizando o método auxiliar do useState...
            .then(artigoEmJSON => definirArtigo(artigoEmJSON))

    }, []);





    return (
        <>
            <p>
                Detalhes da publicação de id:
                <strong>{idPublicacao}</strong>
            </p>

            <div>
                <h1>{artigo.title}</h1>
                <p>{artigo.author}</p>
            </div>
        </>
    )
}