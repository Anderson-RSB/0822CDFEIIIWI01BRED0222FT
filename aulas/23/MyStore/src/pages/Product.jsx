
import { useParams } from 'react-router-dom'

export default function Product() {

    // Opção 1
    //const params = useParams()
    //console.log(params.idProduto)

    // Opção 2
    const { idProduto } = useParams()
    console.log(idProduto)

    return (
        <></>
    )
}