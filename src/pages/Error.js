import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';


const Error = () => {
    return (
        <div className='ErrorPage'>
            <Logo />
            <div className="Errorpage-content">
                <div className="Text-404-Content">
                    <h2 className='Text-404'>404</h2>
                </div>
                <div className="Text-H3-Content">

                    <h3 className='Text-H3'>Oups! La page que vous demandez n'existe pas.</h3>
                </div>
                <NavLink to="/" >
                    <h4>Retourner sur la page d'accueil</h4>
                </NavLink>
            </div>
        </div>
    );
};

export default Error;