import { useFetch } from "../../hooks/useFetch"
import './style.scss'
import { Link } from "react-router-dom"
import Left from '../../assets/left.png'
import Right from '../../assets/right.png'
import { useState } from "react"
import cred from "../../utils/credentials"

export default function Card(){

    const [ page, setPage ] = useState(1)
    
    const {data} = useFetch(`${cred[1]}/discover/movie?api_key=${cred[0]}&language=pt-br&sort_by=popularity.desc&page=${page}`)

    function navigationPageRight(){
        setPage(page+1);
    }

    function navigationPageLeft(){
        setPage(page-1);
    }
    
    return(
        <div className="movie__app">
            <section className='container'>
                <div className="Banner__menu">
                    <div>
                        <div className='banner__line'></div>
                        <h2>Lista de filmes</h2>
                    </div>
                    <div className="banner__set">
                        <img className="banner__icon" onClick={navigationPageLeft} src={Left} alt="" />
                        <img className="banner__icon" onClick={navigationPageRight} src={Right} alt="" />

                    </div>
                </div>
            </section>
                
            {(() => {
                if (data.error) {
                    return <div className="movie__error">{data.message}</div>
                }else{
                    return(
                        <div className="container movie">
                        {data.results?.map( e => {
                            return(
                                <Link to={`/movie-detail/${e.id}`} key={e.id} className="movie__card">
                                    <img className="movie__img" src={cred[2]+'/'+e.backdrop_path} alt="" />
                                    <h2 className="movie__h2">{e.title}</h2>
                                </Link>
                                )
                            })}
                        </div>
                    )
                }
            })()}    
        
        </div>
    )
}