import { Link } from 'react-router-dom';
import './styles.css';
import { NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <nav className="container">
                <Link to='/'>
                    <h1>MeuSite</h1>
                </Link>



                <div className='nav-bar-container'>
                    <NavLink to="/home" className={({ isActive }) => isActive ? 'menu menu-item' : 'nav-bar'}>

                        Início
                    </NavLink>

                    <NavLink to="/promotion" className={({ isActive }) => isActive ? 'menu menu-item' : 'nav-bar'}>

                        Promoção
                    </NavLink>

                    <NavLink to="/subscription" className={({ isActive }) => isActive ? 'menu menu-item' : 'nav-bar'}>

                        Participar

                    </NavLink>

                </div>


            </nav>
        </header>
    );
}