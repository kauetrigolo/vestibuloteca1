// importar api,react-router-dom, useParams, usestate, useeffect
import './Livro.css'
import api from '../../services/api'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Livro(props){

    const [Livro, setLivro] = useState([])

    useEffect(() => {

        //implementar função assincrona


        //

        if(Livro.length === 0){
            <div className='loading'>Carregando</div>
        }else{

            //criar variaveis de consumo da api
            const {id} = useParams;

    return(
        <div className='container'>
            <header> <a href='/'><h1>¶ Vestibuloteca</h1></a> </header>

            <section>
            <div className='capa'><img src={``} alt='capa'/></div>

                <div className='infoLivro'>
                    <p><bold>Título: </bold></p>
                    <p><bold>Gênero: </bold></p>
                    <p><bold>Escola literária: </bold></p>
                    <p><bold>Ano: </bold></p>
                    <p><bold>Link para Amazon: </bold></p>
                </div>
                <div className='sinopse'>
                    <h2>Sinopse</h2>
                    <p> fadfjPEJFOprkgjçdfjgkrjgçw </p>
                </div>
            </section>
        </div>
        )
        }
    }, [props.Livro])
}