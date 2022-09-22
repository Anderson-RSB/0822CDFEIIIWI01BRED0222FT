

import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <>
            <h1>Home</h1>

            <Link to="/produto/coxinha">
                <div>
                    <h1>Coxinha</h1>
                </div>
            </Link>

            <Link
                to="/produto/coca-cola"
            >
                <div>
                    <h1>Coca cola</h1>
                </div>
            </Link>
        </>
    );
}