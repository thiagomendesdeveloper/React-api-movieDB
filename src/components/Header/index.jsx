import logo from '../../assets/logo-movie.png'
import Lupa from '../../assets/lupa.png'
import { useFetch } from '../../hooks/useFetch'
import './style.scss'
import cred from '../../utils/credentials'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header(){

    const [ search, setSearch ] = useState('')

    const {data} = useFetch(`${cred[1]}/search/movie?api_key=${cred[0]}&query=${search}`)

    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }
      function saveInput(){
        document.getElementsByClassName('movie__app')[0].style.display = "none";
        document.getElementsByClassName('search__title')[0].style.display = "block";
        const valor = document.getElementById("search").value.replace(" ", "+");
        setSearch(valor)
      }
      const processChange = debounce(() => saveInput());

    return(
        <>
        <header className='container'>
            <div className='header'>
                <Link to="/"><img className="header__logo" src={logo} alt="" /></Link>
                <div className='header__flex'>
                    <input id="search" onKeyUp={processChange} className="header__search" placeholder="Pesquisa" type="search"></input>
                </div>
            </div>
        </header>
        <div>
            <div className="container">
                
                   <h2 className='search__title'>Reultado da busca:</h2>
                    
                <div className='search__grid'>
                    {data?.results?.map((e) => {
                        return(
                            <Link to={`/movie-detail/${e.id}`} key={e.id} className="search__card">
                                <img className="search__img" src={cred[2]+'/'+e.backdrop_path} alt="" />
                                <h2 className="search__h2">{e.original_title}</h2>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}