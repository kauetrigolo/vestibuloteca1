import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Card.css';
import api from '../../services/api'
import logoenem from '../../img/logoEnem.svg'
//import Livro from '../../pages/Livro/Livro'

export default function Card(){
    const [Livro, setLivro] = useState([]);

    useEffect(() => {
        api.get()
        .then((response) => {
            setLivro(response.data)
            console.log(response.data)
        })

        .catch(() => {
            console.log('Deu errado')
        })
    
    }, [])

    return(
      <div>
        {Livro.map((Livro, key) => {
            const id = Livro._id;

            const titulo = Livro.titulo;

            return (
            <div className='card'>

            <div className='imagem'> <img src={logoenem} alt="ig"></img></div>

            <div className='infos'>

                <h1>{titulo}</h1>

                <Link to={`${id}`} className="link">Saiba mais</Link>

            </div>
            </div>
            )
        }
    
    )}
      </div>
    )
    
}