import { DivMainHome } from "../css/styled";
import Logo from "../../public/img/logo.png"




export default function Home() {
  
  return (
    <DivMainHome>
      <div className="divImg">
          <img src={Logo} alt="Logo EcoUrban" />
      </div>
        <p>Diminuindo a poluição, um carro de cada vez</p>
    </DivMainHome>
  )
}