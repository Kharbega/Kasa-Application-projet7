import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../assets/fonts/img/Carrousel.png';
import { Carousel } from 'react-responsive-carousel';

const Slideshow = (props) => {

    return (

        <div className='group-slideshow'>
            <FontAwesomeIcon icon={faChevronUp} rotation={270} className='Chevron left' onClick={props.clickleft} onChange={props.changeleft} />
            <div>


                <div className="picture-slideshow">

                    <ul className='ListPicture'>{props.picture}</ul>

                    <p className='numberIndexPicture'>{props.number}</p>
                </div>


            </div>
            <FontAwesomeIcon icon={faChevronUp} rotation={90} className='Chevron right' onClick={props.clickright} />

        </div>

    );
};

export default Slideshow;