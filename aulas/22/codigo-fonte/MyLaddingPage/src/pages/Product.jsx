
import { useParams } from 'react-router-dom';

export default function Product() {

    /*
        const parametros = useParams();
    
        return (
            <>
                <h1>Produto {parametros.idProduto}</h1>
            </>
        );
    */

    const { idProduto } = useParams();

    return (
        <>
            <h1>Produto: {idProduto}</h1>
        </>
    );
}