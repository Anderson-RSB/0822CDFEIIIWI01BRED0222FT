import { useContext } from 'react';

import Item from './Item';
import ContextoLista from '../contextos/ContextoLista';

function Lista() {

    const [produtos] = useContext(ContextoLista);

    return (
        <ul>
            {
                produtos.map(produto => <Item produto={produto} />)
            }
        </ul>
    )
}

export default Lista;