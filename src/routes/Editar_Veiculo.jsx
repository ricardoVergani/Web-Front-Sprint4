import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


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
    <div>
        <h1>Editando o produto: {veiculo.modelo}</h1>

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Modelo: </label>
                <input type="text" name="modelo" placeholder="Digite o modelo do veículo" value={veiculo.modelo} onChange={handleChange}/>
                <label htmlFor="">Ano: </label>
                <input type="year" name="ano" placeholder="Digite o ano do veículo" value={veiculo.ano} onChange={handleChange}/>
                <label htmlFor="">Cor: </label>
                <input type="text" name="cor" placeholder="Digite a cor do veículo" value={veiculo.cor} onChange={handleChange}/>
                <button className="botaoEditar">Editar</button>
            </form>
        </div>
    </div>
  )
}
