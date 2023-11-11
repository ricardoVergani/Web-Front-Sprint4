import { DivMainHome } from "../css/styled";
import Logo from "../../public/img/logo.jpeg"




export default function Home() {
  
  return (
    <DivMainHome>
      <div className="divImg">
          <img src={Logo} alt="" />
      </div>
    </DivMainHome>
  )
}