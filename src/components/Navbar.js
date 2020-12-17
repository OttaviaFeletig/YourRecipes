import React, {useState, useContext} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import {Sidebar} from './Sidebar'
import {RecipeContext} from '../context/RecipeContext';

const Navbar = () => {
  const {query, setQuery, sidebar, setSidebar} = useContext(RecipeContext);
  const updateQuery = e => {
    setQuery(e.target.value)
  }

  const showsideBar = () => setSidebar(!sidebar);
  return (
    <div className="navbar">
      <div className="navbar__menu">
      <Link to="/" className="menu-bars">
        <FaIcons.FaBars onClick={showsideBar}/>
      </Link>
<nav className={sidebar? 'nav-menu active': 'nav-menu'}>
<ul className="nav-menu-items" onClick={showsideBar}>
<li className="navbar-toggle">
<Link to="#" className="menu-bars">
<AiIcons.AiOutlineClose/>
</Link>
</li>
{Sidebar.map((item, index)=> {
  return(
    <li key={index} className={item.cName}>
      <Link to={item.path}>
    {item.icon} <span>{item.title}</span>
</Link>
    </li>
  )
})}
</ul>
</nav>
</div>
    <button className="bookmarksBtn">Bookmarks</button>
     <form  className = "search-form">
      <input className = "search-bar" type ="text" placeholder = "search..." value={query} onChange={updateQuery}/>
     </form>
     <button className="favoritsBtn">Favorites</button>
     </div>

  );
};

export default Navbar;
