import React from 'react';
import Logo from '../components/Logo';
import imgLogo from '../assets/fonts/img/logo_footer.png'

const Footer = () => {
    return (
        <div className='footer-content'>
            <div className="logo-footer">
                <img src={imgLogo} alt='LOGO' />

            </div>
            <div className="text-content-footer">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>

        </div>
    );
};

export default Footer;