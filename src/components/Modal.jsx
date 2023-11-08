import { useState } from "react"

export default function Modal(props) {

    const [veiculo,setVeiculo] = useState({
        modelo: "",
        ano: "",
        cor: "",
    })
  
    const handleChange = (e) => {
      const { name,value } = e.target;
  
      setVeiculo({...veiculo,[name]: value});
    }
  
    const handlePost = (veiculo) => {
  
  
      fetch("http://localhost:5000/veiculos",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(veiculo)
      }).then(response => response.json()).then(response => console.log(response)).catch(error => console.log(error));
  
    }
  
  
    
    if(props.open){
      return (
          <div className="modal">
            <div className="inserirProduto">
              <h2>Novo Produto</h2>
              <form onSubmit={()=> handlePost(veiculo)}>
                      <label htmlFor="idModelo">Modelo</label>
                      <input type="text" name="modelo" id="idModelo" value={veiculo.modelo} onChange={handleChange}/>
                      <label htmlFor="idAno">Ano</label>
                      <input type="number" name="ano" id="idAno" value={veiculo.ano} onChange={handleChange}/>
                      <label htmlFor="idCor">Cor</label>
                      <input type="text" name="cor" id="idCor" value={veiculo.cor} onChange={handleChange}/>
                      <div className="divBotoes">
                      <input type="submit" value="Adicionar" />
                        <button onClick={()=>props.setClose(false)}>Cancelar</button>
                      </div>
              </form>
            </div>
          </div>
      )
    }
  }