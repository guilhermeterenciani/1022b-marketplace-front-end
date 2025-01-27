import { Link } from 'react-router-dom'
import './Header.css'
function Header(){
    return(
        <header>
            <Link to="/"><h1>MarketPlace</h1></Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/cadastro-exercicio">Cadastrar Exercício</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;