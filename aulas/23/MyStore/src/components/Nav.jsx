import { Link } from 'react-router-dom'

export default function Nav() {

    return (
        <>
            {
                /*
                  1- Navegação
                */
            }

            <nav>
                <Link to="/">Home</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </>
    )
}