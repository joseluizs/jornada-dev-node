import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário: ${name} foi cadastrado c/ Senha: ${senha}`)
    }

    const [name, setName] = useState()
    const [senha, setSenha] = useState()

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form