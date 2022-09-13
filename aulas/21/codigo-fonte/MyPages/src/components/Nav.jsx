
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </>
    )
}

export default Nav
