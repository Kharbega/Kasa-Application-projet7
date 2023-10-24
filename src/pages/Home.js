import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Card from '../components/Card';




const Home = () => {
    return (
        <><div className='Home-content'>
            <div className="logo-nav">
                <Navigation />
                <Logo />
            </div>

            <Banner />
        </div><Card /></>


    );
};
console.log(Card);

export default Home;