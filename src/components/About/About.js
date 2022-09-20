import React from 'react';
import { SassIcon } from '../../images/SassIcon';
import { HtmlIcon } from '../../images/HtmlIcon';
import { CssIcon } from '../../images/CssIcon';
import Header from '../Header/Header';
import './about.scss';
import { JSIcon } from '../../images/JSIcon';
import { ReactIcon } from '../../images/ReactIcon';
import { FigmaIcon } from '../../images/FigmaIcon';
import { GitIcon } from '../../images/GitIcon';
import { PhotoshopIcon } from '../../images/PhotoshopIcon';
import { IllustratorIcon } from '../../images/IllustratorIcon';

function About() {
  return (
    <div className="about">
      <Header title="About" />
      <main className='about_content'>
        <h3>I`m <span>Maria Mikhaleva,</span> Junior Frontend Developer</h3>
        <p>I am actively looking for a Junior Front-end Developer. I started my journey in IT with the course «Front-end Developer» and during this course, I have learned a lot about HTML, CSS and JavaScript. I can create custom web layouts with responsive design and a good user experience.</p>
        <p>After finishing the Front-end core course, I started the next one, and this course was about Web design. The Web design course consisted of learning programs like Photoshop, Illustrator, Figma and gave me valuable insight into web design.</p>
        <p>Previously, I worked remotely as an assistant SMM with salon interior design where I was responsible for leading social pages on Facebook and Instagram by creating content plans and edited photos. Also, I performed a website, lead it, and filled it with content. My main accomplishment on this position was that I created from the beginning website on CMS WordPress, social pages and all of that works properly.</p>
      </main>
      <div className="about_list">
        <div className="about_list-left">
          <p className="about_list-subtitle">What I know?</p>
          <div className="about_list-know">
            <div>
              <HtmlIcon />
            </div>
            <div>
              <CssIcon />
            </div>
            <div>
              <SassIcon />
            </div>
            <div>
              <JSIcon />
            </div>
            <div>
              <ReactIcon />
            </div>
            <div>
              <GitIcon />
            </div>
            <div>
              <FigmaIcon />
            </div>
            <div>
              <PhotoshopIcon />
            </div>
            <div>
              <IllustratorIcon />
            </div>
          </div>
        </div>
        <div className="about_list-right">
          <p className="about_list-subtitle">What I do?</p>
          <p className="about_list-disc">Landing pages</p>
          <p className="about_list-disc">Web design</p>
          <p className="about_list-disc">Social media marketing</p>
        </div>
      </div>
    </div>
  )
}

export default About