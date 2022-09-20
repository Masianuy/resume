import React from 'react';
import { NavLink } from 'react-router-dom';
import MyFoto from '../MyFoto/MyFoto';
import './menu.scss';

function Menu() {
  return (
    <div className='menu'>
      <div className='menu_foto'>
        <MyFoto />
      </div>
      <ul className='menu_list'>
        <li>
          <NavLink to='/resume'>Home</NavLink>
        </li>
        <li>
          <NavLink to='about'>About</NavLink>
        </li>
        <li>
          <NavLink to='education'>Education</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu