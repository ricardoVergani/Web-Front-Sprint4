
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Cabecalho() {

  const rotaAtual = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {

    sessionStorage.removeItem("token-usuario");
    sessionStorage.removeItem("dados-usuario");

    navigate('/login');
  }

  return (
      <div className="cabecalho">
        <div className="divHomeLogin">
          {sessionStorage.getItem("token-usuario") ? (
          <Link onClick={handleLogout}>Logout</Link>
          ) : (<Link to="/login">Login</Link>
          )}
          <Link to="/">Home</Link>
          <Link to="/veiculos">Veiculos</Link>
          
        </div>

        <nav>
          <ul>
            <li><Link to="/smartcities"> SmartCities</Link></li>
            <li><Link to="/problema">Problema</Link></li>
            <li><Link to="/individuais">Deveres Individuais</Link></li>
            <li><Link to="/coletivos">Deveres Coletivos</Link></li>
            <li><Link to="/ideia">Nossa Ideia</Link></li>
            <li><Link to="/pontosNegativos">Pontos Negativos</Link></li>
          </ul>
        </nav>
      </div>
  )
}
