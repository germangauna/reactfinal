import React from 'react';
import CardWidget from '../CardWidget'; // IMPORTAMOS EL CARDWIDGET PARA PONERLO EN EL CARRITO ICONS
import { NavLink } from 'react-router-dom';


export const NavBar = () => {

  return (
    
    <div className='container'>
      <nav className='nav'>
        <div className='nav_brand'>
          <NavLink className='nav_link font-sans hover:font-serif' to='/'>mi marca</NavLink>
        </div>
        <ul className='nav_list'>
          <li>
            <NavLink className='nav_link font-sans hover:font-serif' to='/categoria/Relojes'>Relojes</NavLink>
          </li>
          <li>
            <NavLink className='nav_link font-sans hover:font-serif' to='/categoria/Pulceras'>Pulceras</NavLink>
          </li>
          <li>
            <NavLink className='nav_link' to='Cart'> <CardWidget /> </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    
  );
}
export default NavBar