import React from 'react';

const Banner = (props) => {
    return (
        <div className='group-img-text'>

            <div className="img-banner-background banner-home"></div>
            <h1 className='Text-banner'>{props.title}</h1>

        </div>
    );
};

export default Banner;