import React from 'react';

const Banner = (props) => {
    return (
        <div className='Text-banner-content'>



            <h1 className='Text-banner'>{props.title}</h1>

        </div>
    );
};

export default Banner;