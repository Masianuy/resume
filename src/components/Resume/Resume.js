import React from 'react';
import './resume.scss';
import Header from '../Header/Header';
import { EducationIcon } from '../../images/EducationIcon';
import { CoursesIcon } from '../../images/CoursesIcon';
import { FreshcodeLogo } from '../../images/FreshcodeLogo';
import Univer1 from '../../images/univer1.png';
import Univer2 from '../../images/univer2.png';
import Univer3 from '../../images/univer3.png';

function Resume() {
  return (
    <div>
      <Header title="Education" />
      <div className='resume'>
        <div className='resume_education'> 
          <div className='resume_education-title'>
            <EducationIcon />
            <h4>Education</h4>
          </div>
          <ul className='resume_education-list'>
            <li className='resume_education-item'>
              <div className='resume_education-inner'>
                <img src={Univer2} alt="National University" width="auto" height="60px" />
                <p className='resume_education-years'>2011 - 2015</p>
              </div>
              <p className='resume_education-university'>National University of Physical Training and Sports, Kyiv</p>
              <p className='resume_education-disc'>Equestrian Trainer, Physical Education Teacher / Athletic Training / Trainer</p>
            </li>
            <li className='resume_education-item'>
              <div className='resume_education-inner'>
                <img src={Univer1} alt="Kremenchuk National University" width="auto" height="60px" />
                <p className='resume_education-years'>2009 - 2011</p>
              </div>
              <p className='resume_education-university'>Kremenchuk Mykhailo Ostrohradskiy National University</p>
              <p className='resume_education-disc'>Economics and Management / Organizational Management</p>
            </li>
            <li className='resume_education-item'>
              <div className='resume_education-inner'>
                <img src={Univer3} alt="Kremenchug Flight College" width="auto" height="60px" />
                <p className='resume_education-years'>2006 - 2009</p>
              </div>
              <p className='resume_education-university'>Kremenchug Flight College of National Aviation University</p>
              <p className='resume_education-disc'>Faculty of Economics / Accounting and Finance</p>
            </li>
          </ul>
        </div>
        <div className='resume_education'>
          <div className='resume_education-title'>
            <CoursesIcon />
            <h4>Courses</h4>
          </div>
          <ul className='resume_education-list'>
            <li className='resume_education-item'>
              <div className='resume_education-inner'>
                <FreshcodeLogo />
                <p className='resume_education-years'>2022</p>
              </div>
              <p className='resume_education-university'>Freshcode Training Center</p>
              <p className='resume_education-disc'>Junior FullStack JS (React) Developer</p>
            </li>
            <li className='resume_education-item'>
              <div className='resume_education-inner'>
                <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/7/71/Beetroot_Logo_140x50px.svg/1200px-Beetroot_Logo_140x50px.svg.png" alt="a" width="auto" height="60px" />
                <p className='resume_education-years'>2019</p>
              </div>
              <p className='resume_education-university'>Beetroot Academy</p>
              <p className='resume_education-disc'>Junior Frontend Developer</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume