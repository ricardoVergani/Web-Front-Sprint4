import { DivMain } from "../css/styled";
import Individuais from "../../public/img/responsa.jpeg"

export default function Deveres_Individuais() {

  
  return (
      <DivMain>
        <h1>Deveres Individuais</h1>

        <div className="divImg">
          <img src={Individuais} alt="deveres individuais" />
        </div>
        
        <div className="conteudo">
          <p>A responsabilidade individual envolve ações que cada pessoa pode tomar para reduzir a poluição do ar em sua própria vida cotidiana. Algumas ações individuais que podem ser  tomadas incluem:</p>
          <ul>
              <li>Reduzir a quantidade de tempo gasto dirigindo, optando por caminhar, pedalar ou utilizar o transporte público.</li>
              <li>Escolher produtos de limpeza doméstica que não contenham produtos químicos nocivos.</li>
              <li>Reduzir o uso de aparelhos elétricos que geram calor, como secadores de cabelo e ferros de passar.</li>
              <li>Utilizar aparelhos elétricos energéticamente eficientes.</li>
              <li>Fazer a manutenção regular do carro, verificando se os pneus estão com a pressão adequada e trocando o óleo regularmente.</li>
          </ul>
        </div>
      </DivMain>
  )
}
