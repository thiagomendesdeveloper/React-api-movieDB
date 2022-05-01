import logo from '../../assets/logo-movie.png'
import Lupa from '../../assets/lupa.png'
import { useFetch } from '../../hooks/useFetch'
import './style.scss'
import cred from '../../utils/credentials'
import { Link } from 'react-router-dom'

export default function Header(){

    const {data} = useFetch(`${cred[1]}/search/movie?api_key=${cred[0]}&query=Jack+Reacher`)

    return(
        <header className='container'>
            <div className='header'>
                <Link to="/"><img className="header__logo" src={logo} alt="" /></Link>
                <div className='header__flex'>
                    <input id="search" className="header__search" placeholder="Pesquisa" type="search"></input>
                    <button className="header__btn"><img src={Lupa} className="header__lupa" alt="" /></button>
                </div>
            </div>
        </header>
    )
}