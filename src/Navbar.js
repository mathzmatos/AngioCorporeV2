import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import LOGO from './images/logo.png';



function Navbar() {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>

            <a href="index.html"><img src={LOGO}></img></a>

            <nav ref={navRef}>

                <a href="#">Início</a>
                <a href="#">Agendamentos</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
                
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>

            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>

        </header>
    );

}




export default Navbar;