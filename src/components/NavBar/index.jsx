import React from 'react';
import CardWidget from '../CardWidget'; // IMPORTAMOS EL CARDWIDGET PARA PONERLO EN EL CARRITO ICONS


const NavBar = () => {

  return (
    
    <div className='container'>
      <nav className='nav'>
        <div className='nav_brand'>
            <a className='nav_link' href="#">mi marca</a>
        </div>
        <ul className='nav_list'>
          <li>
            <a className='nav_link' href="#">categoria1</a>
          </li>
          <li>
            <a className='nav_link' href="#">categoria2</a>
          </li>
          <li>
            <a className='nav_link' href="#"> <CardWidget/> </a>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}
export default NavBar