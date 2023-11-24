import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../assets/fonts/img/Carrousel.png';

const Slideshow = (props) => {

    return (
        <div className='group-slideshow'>
            <FontAwesomeIcon icon={faChevronUp} rotation={270} className='Chevron left' />
            <div>


                <div className="picture-slideshow">
                    <ul>{props.picture}</ul>
                    <p>{props.number}</p>
                </div>


            </div>
            <FontAwesomeIcon icon={faChevronUp} rotation={90} className='Chevron right' />

        </div>
    );
};

export default Slideshow;