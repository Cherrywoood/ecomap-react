import {NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar = ({isShow}) => {
    return (
        <nav
            className={`navbar ${isShow ? 'show' : ''} -translate-y-full top-0 bg-purple-100 w-full absolute flex justify-center`}>
            <ul className="flex flex-col w-full md:flex-row md:space-x-8">
                <li><NavLink to="/" className="nav-link">Карта</NavLink></li>
                <li><NavLink to="/guides" className="nav-link">Экогайды и советы</NavLink></li>
                <li><NavLink to="/addPoints" className="nav-link">Добавить точку</NavLink></li>
                <li><NavLink to="/contacts" className="nav-link">Контакты</NavLink></li>
            </ul>
        </nav>

    )
}

export default Navbar;