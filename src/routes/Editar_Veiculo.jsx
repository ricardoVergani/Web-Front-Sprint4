import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { DivMain } from "../css/styled";
import "../css/Editar_Veiculos.scss";


export default function Editar_Veiculo() {

    const {id} = useParams();

    const navigate = useNavigate();

    document.title = "Veículo" + id;

    const [veiculo,setVeiculo] = useState({
        id: id,
        modelo: "",
        ano: "",
        cor: ""
    })

    useEffect(()=> {

        fetch(`http://localhost:5000/veiculos/${id}`)
        .then((response) => response.json())
        .then((response) => setVeiculo(response))
        .catch(error => console.log(error));
    },[id])

    const handleChange = (e) => {

        const { name, value } = e.target;

        setVeiculo({...veiculo,[name]:value});
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        fetch(`http://localhost:5000/veiculos/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(veiculo)
        })
        .then((response) => response.json())
        .then((response) => console.log("Dados alterados com sucesso -STATUS CODE: " + response.status))
        .catch(error => console.log(error));

        navigate("/veiculos")
    }

  return (
    <DivMain>
        <h1>Editando o produto: {veiculo.modelo}</h1>

        <div>
            <form className="editor" onSubmit={handleSubmit}>
                <label className="labelEdit" htmlFor="">Modelo: </label>
                <input className="inputEdit" type="text" name="modelo" placeholder="Digite o modelo do veículo" value={veiculo.modelo} onChange={handleChange}/>
                <label className="labelEdit" htmlFor="">Ano: </label>
                <input className="inputEdit" type="year" name="ano" placeholder="Digite o ano do veículo" value={veiculo.ano} onChange={handleChange}/>
                <label className="labelEdit" htmlFor="">Cor: </label>
                <input className="inputEdit" type="text" name="cor" placeholder="Digite a cor do veículo" value={veiculo.cor} onChange={handleChange}/>
                <button className="botaoEditar">Editar</button>
            </form>
        </div>
    </DivMain>
  )
}
