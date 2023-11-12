import { DivMain } from "../css/styled";
import { Link } from "react-router-dom";

export default function Erro404() {
    return (
        <DivMain>
            <h1><img src="/img/erro-404.png" alt="erro404" /> Página não encontrada!</h1>
            <Link to={'/'}>Voltar</Link>
        </DivMain>
    );
}
