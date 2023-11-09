import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { Link, useNavigate } from "react-router-dom";
import { BsTrashFill as Deletar } from 'react-icons/bs';
import { AiFillEdit as Editar } from 'react-icons/ai';



export default function Veiculos() {

    const navigate = useNavigate();

    const[open, setOpen] = useState(false)

    const [listaVeiculosApi, setListaVeiculosApi] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/veiculos").then((response) => response.json()).then((response) => setListaVeiculosApi(response)).catch(error => console.log(error))
    },[])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/veiculos/${id}`,{
            method: "DELETE",
        }).then(() => window.location = '/veiculos').then(response => console.log(response.status)).catch(error => console.log(error));
    }

    useEffect(() => {
        if (!sessionStorage.getItem("token-usuario")){
            alert("Realize o login para acessar essa área.")
            navigate('/login')
        }
    })


    if (sessionStorage.getItem("token-usuario")){
        return(
            <div>
                <h1>Veículos</h1>
                <Modal open={open} setClose={setOpen}/>
    
    
                <button onClick={()=>setOpen(true)}>Inserir novo</button>
                <table>
                    <thead>
                        <tr className="thTitulo">
                            <th colSpan={5}>Veículos Cadastrados</th>
                        </tr>
                        <tr>
                            <th>Modelo</th>
                            <th>Ano</th>
                            <th>Cor</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaVeiculosApi.map((item, indice) => 
                            <tr key={indice}>
                                <td>{item.modelo}</td>
                                <td>{item.ano}</td>
                                <td>{item.cor}</td>
                                <td><Link to={`/editar/veiculos/${item.id}`}><Editar/></Link></td>
                                <td><Link onClick={()=>handleDelete(item.id)}><Deletar/></Link></td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>Quantidade de Veículos  cadastrados = {listaVeiculosApi.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    } 
    
}