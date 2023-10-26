import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from './Footer';




const Home = () => {
    return (
        <><><div className='Home-content'>
            <div className="logo-nav">
                <Navigation />
                <Logo />
            </div>

            <Banner />
        </div><Card /></><Footer /></>


    );
};
console.log(Card);

export default Home;