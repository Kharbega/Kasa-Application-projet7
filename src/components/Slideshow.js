import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
//import '../assets/fonts/img/Carrousel.png';
import logements from '../Data/logements.json';
import { useSearchParams } from 'react-router-dom'; import { faStar } from '@fortawesome/free-solid-svg-icons';


import ProfileLogement from '../pages/FicheLogement'

function Slideshow(props) {
    const [CurrentPicture, setCurrentPicture] = useState(0);

    const [] = useState(logements);

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
                <FontAwesomeIcon icon={faChevronUp} rotation={270} className='Chevron left' onClick={props.clickleft} onChange={props.changeleft} />
                <div>


                    <div className="picture-slideshow">

                        <ul className='ListPicture'>{props.picture}</ul>

                        <p className='numberIndexPicture'>{props.number}</p>
                    </div>


                </div>
                <FontAwesomeIcon icon={faChevronUp} rotation={90} className='Chevron right' onClick={props.clickright} />

            </div>
        )
    }

};

export default Slideshow;