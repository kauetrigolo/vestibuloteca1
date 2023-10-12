import biblioteca from '../../img/biblioteca.png'
import arrow from '../../img/arrow.svg';
import TabComponent from '../../components/Tabs/Tabs';


export default function Home(){
    return (

        <div>
          <div className='imgHome'> <img className='bgImg' src={ biblioteca } alt='imagem biblioteca'/> 
          <div className='infoBox'>
            <h1>¶ Vestibuloteca </h1>
    
            <a href='#Tabs'>Veja todos os livros <img className='btnArrow' src= {arrow} alt='seta'/> </a>
          </div>
          </div>
    
          <section className='slogan'>
            <h1>¶ Vestibuloteca</h1>
            <p>Todas as obras literárias dos maiores vestibulares brasileiros em um só lugar!</p>
          </section>

          <TabComponent></TabComponent>
        
        </div>
        )
}