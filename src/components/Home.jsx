import React from 'react';
import './home.css';

function Home({ goToRegister, goToLogin }) {
    return(
        <div className='home-page'>
            <h1 className='edu-vision-title'>EduVision</h1>
            <h3 className='edu-vision-description'>Here you can learn front-end development with a roadmap personalized just for you!</h3>
            <button onClick={goToRegister} className = "register-btn">Register</button>
            <button onClick={goToLogin} className = "login-btn">Login</button>
        </div>
    )
}

export default Home; 