import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../css/Login.scss"



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
        <div className="divLogin">
        <div className="containerLoginPage">
            <input type="checkbox" id="register_toggle"/>
            <div className="slider">
            <form className="form" onSubmit={handleSubmit}>
                <span className="title">Login</span>
                <div className="form_control">
                    <input type="email" className="input" required=""/>
                    <label className="label">Email</label>
                </div>
                <div className="form_control">
                    <input type="password" className="input" required=""/>
                    <label className="label">Password</label>
                </div>
                <button type="submit">Login</button>

                <span className="bottom_text">Dont have an account? <label htmlFor="register_toggle" className="swtich">Sign Up</label> </span>
            </form>
            <form className="form">
                <span className="title">Sign Up</span>
                <div className="form_control">
                    <input type="text" className="input" required=""/>
                    <label className="label">Username</label>
                </div>
                <div className="form_control">
                    <input type="email" className="input" required=""/>
                    <label className="label">Email</label>
                </div>
                <div className="form_control">
                    <input type="password" className="input" required=""/>
                    <label className="label">Password</label>
                </div>
                <button>Sign Up</button>

                <span className="bottom_text">Already have an account? <label htmlFor="register_toggle" className="swtich">Sign In</label> </span>
            </form>
            </div>
        </div>

        </div>

        
    )
}