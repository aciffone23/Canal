import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton.js';
import './Navigation.css';
import logo from '../../imgs/canal-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
        <header className="header">
            <div className="navbar">
                <div className="logo">
                    <NavLink exact to="/">
                        <img src={logo} alt="Canal Logo" />
                    </NavLink>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="session-links">
                    {sessionLinks}
                </div>
            </div>
        </header>
        <nav className="second-navbar" id="nav-main">
            <ul className="category-list">
            <li>
                <NavLink to="/shoes">Shoes</NavLink>
            </li>
            <li>
                <NavLink to="/glasses">Glasses</NavLink>
            </li>
            <li>
                <NavLink to="/bags">Bags</NavLink>
            </li>
            <li>
                <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
                <NavLink to="/video_games">Video Games</NavLink>
            </li>
            <li>
                <NavLink to="/clothes">Clothes</NavLink>
            </li>
            </ul>
        </nav>
    </>
  );
}

export default Navigation;