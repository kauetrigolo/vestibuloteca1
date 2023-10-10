const { default: axios } = require("axios");

async function teste(){
    await axios.get('https://api-livro.cyclic.app/livro')
    .then((resposta) => {console.log(resposta.data)})
}

teste()
