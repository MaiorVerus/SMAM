import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    return (
        <nav>
            <button id="dropdown-menu" className="dropdown-btn" onClick={() => setDropdownVisible(!isDropdownVisible)}>
                <i className="fa-solid fa-bars"></i> Menu
            </button>

            <div className={isDropdownVisible ? "dropdown show" : "dropdown hide"}>
                <div className="card" onClick={() => {
                    setDropdownVisible(false);

                    // for testing
                    console.log(isDropdownVisible);

                }
                }>
                    <ul className="list">
                        <li className="element">
                            <Link to="/">
                                <i className="fa-solid fa-home"></i>
                                <p className="label">Home</p>
                            </Link>
                        </li>
                        <li className="element">
                            <Link to="./decrees">
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
        </nav>
    )
}