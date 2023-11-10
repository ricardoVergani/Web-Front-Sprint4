import { DivMain } from "../css/styled";
import Negativos from "../../public/img/negativos_positivos.png"

export default function Pontos_Negativos() {

  return (
      <DivMain>
        
        <h1>Pontos Negativos</h1>

        <div className="divImg">
          <img src={Negativos} alt="Pontos negativos" />
        </div>

        <div className="conteudo">
        <p>
            Existem diversos pontos negativos quando se trata de poluição do ar. Os gases tóxicos tem efeitos péssimos, tanto na saúde das pessoas, como para o meio ambiente. Pessoas sofrem de doenças respiratórias e cardiovasculares e muitas acabam falecendo prematuramente por conta das condições do ar nas grandes cidades, e falamos de milhões todos os anos. Chuvas ácidas são cada vez mais recorrentes em Smart Cities, pela grande concentração de gases tóxicos presentes na nossa atmosfera. O efeito estufa também não fica de fora, vem sendo agravado cada ano mais, aumentando a temperatura média do planeta, o que interfere em habitats de animais, que começam a correr riscos de extinção. O aumento da temperatura também derrete as geleiras cada vez mais, o que causa o aumento do nível do oceano, que muda o ambiente marinho e a vida presente nele. O desgaste da camada de ozônio também é muito preocupante, com os raios UV penetrando cada vez mais na nossa superfície. Um dos maiores colaboradores para esse grande índice de poluição são os carros, ônibus, motos, a indústria automobílistica em geral, liberam grandes quantidades de dióxido de carbono e metano. 
          </p>
        </div>
      </DivMain>
  )
}
