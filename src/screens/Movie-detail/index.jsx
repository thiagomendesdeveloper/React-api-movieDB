import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Header from '../../components/Header'
import './style.scss'
import Calendar from '../../assets/data.png'
import View from "../../assets/website.png"
import logo from '../../assets/logo-movie.png'

export default function Movie(){

    const { id } = useParams();

    const api_key = "e61c352783109ca0da4d5730b18b36a5"
    const api_base = "https://api.themoviedb.org/3"
    const base_img = "https://www.themoviedb.org/t/p/w220_and_h330_face"

    const {data} = useFetch(`${api_base}/movie/${id}?api_key=${api_key}&language=pt-br`)

    return(
        <>
            <header className='container'>
            <div className='header'>
                <Link to="/"><img className="header__logo" src={logo} alt="" /></Link>
                <div className='header__flex'>
                </div>
            </div>
        </header> 
            <section className="Detail">
                <div className="container">
                    <div className="Detail__grid">
                        <img className="Detail__img" src={base_img+'/'+data.backdrop_path} alt={data.title} />
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.overview}</p>
                            <div className="Detail__info">
                                <div className="Detail__info--card"><img className="Detail__icon" src={Calendar} alt="icon-data" /><p>{data.release_date}</p></div>
                                <div className="Detail__info--card"><img className="Detail__icon" src={View} alt="icon-view" /><p>{data.popularity}</p></div>
                            </div>
                            <div className="Detail__tags">
                                {data.genres?.map(e => {
                                    return(
                                        <div key={e.id} className="Detail__tag">{e.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Info">
                <div className='container'>
                    <div className='Info__content'>
                    </div>
                </div>
            </section>
        </>
    )
}