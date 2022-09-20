import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuIcon from './components/MenuIcon/MenuIcon';
import Menu from './components/Menu/Menu';

function Layout() {
  return (
    <div className='container'>
      {<Menu />}
      {<MenuIcon />}
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default Layout