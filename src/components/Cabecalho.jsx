
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
      <div className="cabecalho">
        <div className="divHomeLogin">
          <Link to="/login">Login</Link>
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
