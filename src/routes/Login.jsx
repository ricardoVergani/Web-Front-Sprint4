


export default function Login() {
  return (
    <div> 
        <h1>Login</h1>
        <form>
            <fieldset>
                <legend>Informações do usuário</legend>
                <div>
                    <label htmlFor="idEmail">Email:</label>
                    <input type="email" id="idEmail" name="email" placeholder="Digite seu email"/>
                </div>
                <div>
                    <label htmlFor="idSenha">Senha:</label>
                    <input type="password" id="idSenha" name="senha" placeholder="Digite sua senha"/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </fieldset>
        </form>
    </div>
  )
}