import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import './style.css';
import axios from "axios";

const LoginPage = () => {

    //Armazena a variavel no contexto
    const { login } = useContext(AuthContext);

    // Armazena os valores digitados pelo usuario
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    // Cria uma função (que recebe um evento) para enviar o usuario e a senha para a api/contexto
    const enviar = (e) => {
        e.preventDefault(); // Intercepta e interrompe a ação padrão do navegador
        // login(usuario, senha); // Integração com o meu contexto/api
        console.log(login)

        const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (usuario.trim() === "" || senha.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else if (!emailValidation.test(usuario)) {
            alert("Por favor, insira um usuario válido.");
        } else {
            axios.post('http://localhost:3000/usuario',{
                email:usuario,
                senha:senha
            })
            .then((response) =>{
                const token = response.data.token
                login(usuario, senha, token)
                console.log(response)
            })
            .catch((erro) => {
                console.log(erro)
            }); 
        }
    }

    return (
        <div className="login">
        <h1>Login</h1>
        <form className="form" onSubmit={enviar}>
            <div className="componente">
                <label htmlFor="email">Usúario:</label>
                <input name="email" type="text" id="email" value={usuario} onChange={(e) => setUsuario(e.target.value)/*Pega o valor de usuario e seta na variavel de estado usuario */}/>
            </div>
            <div className="componente">
                <label htmlFor="senha">Senha:</label>
                <input name="senha" type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div className="acao">
                <button type="submit">Entrar</button>
                <Link to="/cadastro">Cadastrar-se</Link>
            </div>
        </form>
        </div>
    );
}

export default LoginPage;