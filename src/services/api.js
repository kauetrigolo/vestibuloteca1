import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-livro.cyclic.app/livro'
})

export const apiLogin = axios.create({
    baseURL: 'http://localhost:3000' // Mudar para url do banco/api
});

export const createSession = async(usuario, senha) => {
    return api.post('http://localhost:3000/usuario', { usuario, senha})
}

export default api  ;