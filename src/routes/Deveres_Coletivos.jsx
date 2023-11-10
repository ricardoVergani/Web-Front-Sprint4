import { DivMain } from "../css/styled";
import Coletivos from "../../public/img/responsa_coletiva.jpeg"

export default function Deveres_Coletivos() {


  return (
      <DivMain>
        <h1>Deveres Coletivos</h1>


        <div className="divImg">
          <img src={Coletivos} alt="deveres coletivos" />
        </div>

        <div className="conteudo">
          <p>
            A responsabilidade coletiva envolve ações que são tomadas em conjunto por grupos de pessoas, empresas, organizações e governos para reduzir a poluição do ar. Algumas ações   coletivas que podem ser tomadas incluem:
          </p>


          <ul>
              <li>Implantar políticas públicas que incentivem o uso de transportes sustentáveis.</li>
              <li>Investir em tecnologias limpas e energias renováveis.</li>
              <li>Implantar políticas de redução de emissões de gases de efeito estufa.</li>
              <li>Fomentar o reflorestamento de áreas degradadas.</li>
              <li>Educar a população sobre os riscos da poluição do ar e como reduzi-la </li>

    
          </ul>
        </div>
      </DivMain>
  )
}
