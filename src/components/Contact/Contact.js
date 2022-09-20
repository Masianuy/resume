import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './contact.scss';
import { NewEmail } from '../../images/NewEmail';
import { CallMe } from '../../images/CallMe';
import { TelegramIcon } from '../../images/TelegramIcon';
import { GitHubIcon } from '../../images/GitHubIcon';
import { LinkedinIcon } from '../../images/LinkedinIcon';

function Contact() {
  return (
    <div>
      <Header title="Contact" />
      <main className='contact'>
        <p className='contact_subtitle'>Feel <span>free</span> to conact me!</p>
        <div className='contact_wrapper'>
          <div className='contact_box'>
            <div className='contact_box-img'>
              <NewEmail />
            </div>
            <div>
              <Link to="mailto:Masianuy91@gmail.com">Masianuy91@gmail.com</Link>
            </div>
          </div>
          <div className='contact_box'>
            <div className='contact_box-img'>
              <CallMe />
            </div>
            <div>
              <Link to="tel:+380961776689">+380961776689</Link>
            </div>
          </div>
        </div>
        <h6 className='contact_thanks'>Thanks for patience!</h6>
        <div className='contact_socials'>
          <a href="https://t.me/Masianuy" target="blank"><TelegramIcon /></a>
          <a href="https://github.com/Masianuy?tab=repositories" target="blank"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/maria-mikhaleva-%F0%9F%87%BA%F0%9F%87%A6-307661173/" target="blank"><LinkedinIcon /></a>
        </div>
      </main>
    </div>
  )
}

export default Contact