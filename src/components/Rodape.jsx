import "../css/Rodape.scss";
import { Link } from "react-router-dom";

export default function Rodape () {
    return (    
        <footer>
            <p>&copy; 2023 - Todos os direitos reservados <br/>Entre em contato: contato@email.com</p>
            <nav>
                <ul>
                    <li><Link to={"#"}>Termos de Uso</Link></li>
                    <li><Link to={"#"}>Política de privacidade</Link></li>
                    <li><Link to={"#"}>Sobre nós</Link></li>
                </ul>
            </nav>
        </footer>

    )
  }