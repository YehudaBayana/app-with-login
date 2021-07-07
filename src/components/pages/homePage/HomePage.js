import React from 'react';
import './homePage.css';

const HomePage = ({ showSignUp }) => {
  return (
    <>
      <div className='container'>
        <main>
          <div className='text'>
            <h1>Communicate your designs like never before</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
            </p>
            <div className='sign-in'>
              <a href='#' onClick={showSignUp}>
                start for free
              </a>
              <a href='#'>see examples</a>
            </div>
            <span>
              work with <i className='fas fa-ad' style={{ color: 'red' }}></i>
              <i
                className='fas fa-air-freshener'
                style={{ color: 'rgb(146, 115, 13)' }}
              ></i>
              <i
                className='fab fa-angular'
                style={{ color: 'rgb(116, 29, 29)' }}
              ></i>
              <i
                className='fab fa-app-store'
                style={{ color: 'rgb(0, 60, 255)' }}
              ></i>
              runs on <i className='fab fa-apple'></i>
              <i className='fab fa-windows'></i>
            </span>
          </div>
          <div className='images'>
            <img
              src='https://overflow.io/assets/public-site-v2/images/intro-section-image01.svg?v=1610959207528'
              alt='computer logo'
              className='computer'
            />
            <img
              src='https://overflow.io/assets/public-site-v2/images/decorations/half-circle-blue@2x.png?v=1610959207528'
              alt='half circle blue'
              className='half-circle'
            />
            <img
              src='https://overflow.io/assets/public-site-v2/images/decorations/dots-small-blue.svg?v=1610959207528'
              alt='dots circle skyblue'
              className='dots-circle'
            />
            <img
              src='https://overflow.io/assets/public-site-v2/images/decorations/dots-large-orange.svg?v=1610959207528'
              alt='dots circle orange'
              className='dots-circle2'
            />
            <img
              src='https://overflow.io/assets/public-site-v2/images/avatars/user01-avatar-sm.png?v=1610959207528'
              alt='worker img1'
              className='worker-img1'
            />
            <img
              src='https://overflow.io/assets/public-site-v2/images/avatars/user02-avatar-sm.png?v=1610959207528'
              alt='worker img2'
              className='worker-img2'
            />
            <img
              src='https://overflow.io/assets/public-site-v2/images/avatars/user03-avatar-sm.png?v=1610959207528'
              alt='worker img3'
              className='worker-img3'
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
