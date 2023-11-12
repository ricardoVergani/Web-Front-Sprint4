import "../css/Cabecalho.scss";
import { Link, useLocation } from "react-router-dom";

export default function Cabecalho() {

  const rotaAtual = useLocation();

  const handleLogout = () => {

    sessionStorage.removeItem("token-usuario");
    sessionStorage.removeItem("dados-usuario");

    alert("Logout realizado!")

    window.location = '/login';
  }

  return (
      <div className="cabecalho">
        <div className="divHomeLoginVeiculos">
          {sessionStorage.getItem("token-usuario") ? (
          <Link onClick={handleLogout}>Logout</Link>
          ) : (<Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>Login</Link>
          )}
          <Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link>
          <Link to="/veiculos" className={rotaAtual.pathname == "/veiculos" ? "active" : ""}>Veículos</Link>
          
        </div>

        <nav>
          <ul>
            <li><Link to="/smartcities" className={rotaAtual.pathname == "/smartcities" ? "active" : ""}> SmartCities</Link></li>
            <li><Link to="/problema" className={rotaAtual.pathname == "/problema" ? "active" : ""}>Problema</Link></li>
            <li><Link to="/individuais" className={rotaAtual.pathname == "/individuais" ? "active" : ""}>Deveres Individuais</Link></li>
            <li><Link to="/coletivos" className={rotaAtual.pathname == "/coletivos" ? "active" : ""}>Deveres Coletivos</Link></li>
            <li><Link to="/ideia" className={rotaAtual.pathname == "/ideia" ? "active" : ""}>Nossa Ideia</Link></li>
            <li><Link to="/pontosNegativos" className={rotaAtual.pathname == "/pontosNegativos" ? "active" : ""}>Pontos Negativos</Link></li>
          </ul>
        </nav>
      </div>
  )
}
