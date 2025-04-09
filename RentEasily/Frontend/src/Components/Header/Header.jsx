import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import './Header.css';

function Header() {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='mainbody'>
                <nav className='navigation'>
                    <div className="logo">
                        <img src="/images/logo.png" alt="logo" height="60px" width="60px" />
                        <h4>UrbanStay</h4>
                    </div>

                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
                    </button>

                    <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <ul className='nav-list'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li>
                                <a href="#" onClick={() => setDropDownOpen(!dropDownOpen)}>
                                    Services <i className={`fas ${dropDownOpen ? "fa-chevron-up" : "fa-chevron-down"} ms-1`}></i>
                                </a>
                                {dropDownOpen && (
                                    <ul className='dropdown-menu'>
                                        <li><a href="#">Buy/Sell Rooms</a></li>
                                        <li><a href="#">Buy/Sell Properties</a></li>
                                        <li><a href="#">Buy/Sell Apartments</a></li>
                                    </ul>
                                )}
                            </li>
                            <li><a href="#">Contact</a></li>

                            <div className='nav-buttons-mobile'>
                                <button className='btn btn-outline-info'>Sell With Us</button>
                                <button className='btn btn-outline-primary'>Login</button>
                            </div>
                        </ul>
                    </div>

                    <div className='nav-buttons'>
                        <button className='btn btn-outline-info'>Sell With Us</button>
                        <button className='btn btn-outline-primary ms-2'>Login</button>
                    </div>
                </nav>
                <section></section>
            </div>
        </>
    )
}

export default Header;
