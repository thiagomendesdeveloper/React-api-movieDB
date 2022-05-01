import Card from '../../components/Card'
import Strange from '../../assets/estranho.jpg'
import './style.scss'
import Header from '../../components/Header';

export default function Home() {
    
    return (
        <>
            <Header />
            <section className='container'>
                <div className="Banner">
                    <h3 className='Info__h3'>O melhor site de filmes que você já viu</h3>
                    <img className="Banner__img" src={Strange} alt="" />
                </div>
            </section>
            <Card />
            <section className="Info">
                <div className='container'>
                    <div className='Info__content'>
                    </div>
                </div>
            </section>
        </>
    );
}