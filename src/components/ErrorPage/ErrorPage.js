import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorPageIcon } from '../../images/ErrorPageIcon';
import './errorPage.scss';

function ErrorPage() {

  const navigate = useNavigate();
  const goHome = () => {
    navigate('/resume');
  }

  return (
    <div className='container'>
      <div className='error-page'>
        <ErrorPageIcon />
        <p>Error 404</p>
        <button className='error-page_btn' onClick={goHome}>Go back</button>
      </div>
    </div>
  )
}

export default ErrorPage