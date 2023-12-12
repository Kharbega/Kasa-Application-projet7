import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Error = () => {
    return (
        <div className='ErrorPage'>
            <div className="logo-nav">
                <Navigation />


                <Logo />
            </div>
            <div className="Errorpage-content">
                <h2 className='Text-404'>404</h2>

                <h3 className='Error-Title'>Oups! La page que
                    vous demandez n'existe pas.</h3>

                <NavLink to="/" >
                    <h4>Retourner sur la page d'accueil</h4>
                </NavLink>
            </div>
        </div>
    );
};

export default Error;