import React from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import './style.css';

const Navbar = () => (
  <div className="navbar">
    <img className="navbar_logo" src={logo} alt="netflix logo" />
    <div className="navbar_search">
      <img className="navbar_search_icon" src={search} alt="search icon" />
      Search
    </div>
  </div>
);

export default Navbar;
