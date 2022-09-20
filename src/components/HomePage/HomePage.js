import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../MenuIcon/MenuIcon';
import MyFoto from '../MyFoto/MyFoto';
import './homepage.scss';

function HomePage() {
  return (
    <div className='home'>
      {<MenuIcon />}
      <main className='home_content'>
        <p className='home_content-greeting'>Hello there!</p>
        <h2 className='home_content-name'>I`m Maria</h2>
        <p className='home_content-position'>Trainee / Junior Frontend Developer (React JS)</p>
        <p className='home_content-discription'>I am a self-motivated person with good knowledge of creating cross-browser, pixel-perfect and adaptive layouts. My portfolio on GitHub says more about my qualifications. My goal is to find a company where I will grow professionally and gain experience in collaboration with cool teammates.</p>
        <Link to="about" className='home_content-link'>More about me</Link>
      </main>
      <div className='home_foto'>
        <MyFoto />
      </div>
    </div>
  )
}

export default HomePage