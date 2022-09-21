import React from 'react'
import { NavLink } from 'react-router-dom';
import './menuIcon.scss';
import { HomeIcon } from '../../images/HomeIcon';
import { DeveloperIcon } from '../../images/DeveloperIcon';
import { ResumeIcon } from '../../images/ResumeIcon';
import { ContactIcon } from '../../images/ContactIcon';

function MenuIcon() {
  return (
    <div className='icon-menu'>
      <ul>
        <li>
          <NavLink end to='/resume'>
            <HomeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='about'>
            <ResumeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='education'>
            <DeveloperIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='contact'>
            <ContactIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuIcon