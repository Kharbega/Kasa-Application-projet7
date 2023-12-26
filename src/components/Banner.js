import React from 'react';

const Banner = (props) => {
    return (


        <div className="img-banner banner-home">
            <img src={props.img} alt='img-banner'></img>
            <h1 className='Text-banner'>{props.title}</h1>

        </div>
    );
};

export default Banner;