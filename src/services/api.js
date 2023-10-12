import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-livro.cyclic.app/livro'
})

export default api;