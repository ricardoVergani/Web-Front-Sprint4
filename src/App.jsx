import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { DivApp } from "./css/styled";




export default function App(){
  return(
    <DivApp>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </DivApp>
  )

}