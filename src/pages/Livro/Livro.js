// importar api,react-router-dom, useParams, usestate, useeffect
import './Livro.css'
import api from '../../services/api'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Livro(){
    let { livroId } = useParams();
    const [Livro, verLivro] = useState([]);

    useEffect(() => {
        api.get(`/${livroId}`)
        .then((response) => {
            verLivro(response.data)
            console.log(response.data)
        })

        .catch(() => {
            console.log('Deu errado')
        })

        if(Livro.length === 0){
            <div className='loading'>Carregando</div>
        }
    
    }, [livroId, Livro.length])

    return(
        <div>
            <div className='container'>
                <header> <a href='/'><h1>¶ Vestibuloteca</h1></a> </header>
                <Link to='/'>Voltar</Link>

                <section>
                <div className='capa'><img src={Livro.capa} alt='capa'/></div>

                    <div className='infoLivro'>
                        <p><bold>Título: {Livro.titulo}</bold></p>
                        <p><bold>Gênero: {Livro.genero}</bold></p>
                        <p><bold>Autor: {Livro.autor}</bold></p>
                        <p><bold>Escola literária: {Livro.escola}</bold></p>
                        <p><bold>Ano: {Livro.ano}</bold></p>
                        <p><bold>Nº páginas: {Livro.paginas}</bold></p>
                        <p><bold>Link para compra: {Livro.link}</bold></p>
                    </div>
                    <div className='sinopse'>
                        <h2>Sinopse</h2>
                        <p>{Livro.sinopse}</p>
                    </div>
                </section>
            </div>
      </div>
    )

}