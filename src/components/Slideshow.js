import React, { useState } from 'react';
//import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import logements from '../Data/logements.json';
import { useSearchParams } from 'react-router-dom';
//import { faStar } from '@fortawesome/free-solid-svg-icons';
import elementChevronRight from '../assets/fonts/img/vectorLeft.png'
import elementChevronLeft from '../assets/fonts/img/vectorRight.png'


function Slideshow(props) {

    const [CurrentPicture, setCurrentPicture] = useState(0);

    const [urlSearch] = useSearchParams()
    const [IdFicheLogement] = useState(urlSearch.get('_id'))

    let ProfileLogement = logements.find(item => item.id === IdFicheLogement);


    if (CurrentPicture === 0 && ProfileLogement.pictures.length === 1) {
        return (

            <div className="picture-slideshow-one-picture">

                <ul className='ListPicture'>{props.picture}</ul>
            </div>
        )
    } else {

        return (


            <div className='group-slideshow'>
                <img src={elementChevronLeft} className='Chevron left' onClick={props.clickleft} onChange={props.changeleft} />
                <div>

                    <div className="picture-slideshow">

                        <ul className='ListPicture'>{props.picture}</ul>

                        <p className='numberIndexPicture'>{props.number}</p>
                    </div>

                </div>
                <img src={elementChevronRight} className='Chevron right' onClick={props.clickright} />

            </div>
        )
    }

};

export default Slideshow;