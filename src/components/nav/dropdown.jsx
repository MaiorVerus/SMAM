import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './nav.css'


export default function Nav() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // 🔑 Fix #2: ref on the WRAPPER (button + dropdown together)
    // so positioning is relative to the button, not the whole nav
    const menuRef = useRef(null);

    // 🔑 Fix #1: click-outside listener
    useEffect(() => {
        function handleClickOutside(e) {
            // if the click was outside our wrapper div, close the menu
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setDropdownVisible(false);
            }
        }

        // only attach the listener when the menu is open (performance)
        if (isDropdownVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // cleanup — remove listener when menu closes or component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownVisible]);

    return (
        <nav>
            {/*
              🔑 Fix #2: this wrapper div has position:relative in CSS
              so .dropdown's `left: 0` / `right: 0` is relative to the
              BUTTON, not the full-width <nav> element
            */}
            <div className="nav-menu-wrapper" ref={menuRef}>
                <button
                    id="dropdown-menu"
                    className="dropdown-btn"
                    onClick={() => setDropdownVisible(!isDropdownVisible)}
                >
                    <i className="fa-solid fa-bars"></i> Menu
                </button>

                <div className={isDropdownVisible ? "dropdown show" : "dropdown hide"}>
                    <div className="card" onClick={() => setDropdownVisible(false)}>

                        <ul className="list">
                            <li className="element">
                                <Link to="/">
                                    <i className="fa-solid fa-home"></i>
                                    <p className="label">Home</p>
                                </Link>
                            </li>
                            <li className="element">
                                <Link to="/decrees">
                                    <i className="fa-solid fa-scale-balanced"></i>
                                    <p className="label">Statutes</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="separator"></div>
                        <ul className="list">
                            <li className="element">
                                <Link to="/">
                                    <i className="fa-solid fa-gear"></i>
                                    <p className="label">Settings</p>
                                </Link>
                            </li>
                            <li className="element delete">
                                <Link to="/">
                                    <i className="fa-solid fa-newspaper"></i>
                                    <p className="label">Updates</p>
                                </Link>
                            </li>
                            <li className="element delete">
                                <Link to="/services">
                                    <i className="fa-solid fa-newspaper"></i>
                                    <p className="label">Services</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="separator"></div>
                        <ul className="list">
                            <li className="element">
                                <Link to="/">
                                    <i className="fa-solid fa-users"></i>
                                    <p className="label">Contacts</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
