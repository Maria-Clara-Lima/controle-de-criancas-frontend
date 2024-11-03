/*tela de login*/
import './login.css'


function Login() {
  return (
    /*formulario do login*/
    <div className='container'>
    <form>  
        <h1>Administrador</h1>
        <div>
            <input type="text" placeholder='Insira o nome do usuário'/>
        </div>
        <div>
            <input type="password" placeholder='Senha'/>
        </div>
        <button>Entrar</button>
    </form>

</div>
)
}

export default Login


