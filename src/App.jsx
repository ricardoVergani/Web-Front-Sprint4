import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";


export default function App(){
  return(
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )

}