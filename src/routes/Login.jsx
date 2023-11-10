import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { DivMain } from "../css/styled";



export default function Login() {

    const navigate = useNavigate();

    const [usuario,setUsuario] = useState({
        email: "",
        senha: ""
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async(e) => {

        e.preventDefault();

        let users;

        try{
            const response = await fetch("http://localhost:5000/usuarios");
            users = await response.json();
        } catch (error) {
            alert("Ocorreu um erro no processamento da sua solicitação!");
        }

        for (let x = 0; x < users.length; x++){

            const user = users[x];

            if (user.email == usuario.email && user.senha == usuario.senha){

                alert("Login realizado com sucesso!")

                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

                console.log(tokenUser);

                sessionStorage.setItem("token-usuario",tokenUser);

                sessionStorage.setItem("dados-usuario",JSON.stringify(users[x]));

                navigate('/',{replace: true})

                return;
            }
        }

        alert("Login ou senha incorretos! Tente novamente.")
        setUsuario({
            email: "",
            senha: ""
        });
    }

    return (
        <DivMain> 
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Informações do usuário</legend>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" id="idEmail" name="email" placeholder="Digite seu email" value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" id="idSenha" name="senha" placeholder="Digite sua senha" value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </fieldset>
            </form>
        </DivMain>
    )
}