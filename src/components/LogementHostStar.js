import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const stars = <FontAwesomeIcon icon={faStar} size="xl" />

const LogementHostStar = () => {
    return (
        <div className='host-star'>
            <div className="logement-host">
                <div className="div-name">
                    <p className='name'>Alexandre <br />Dumas</p>
                </div>

                <span className='div-img'>
                    <img src="" alt="" />
                </span>

            </div>
            <div className="logement-star-rating">
                <li>{stars}</li>
                <li>{stars}</li>
                <li>{stars}</li>
                <li>{stars}</li>
                <li>{stars}</li>
            </div>
        </div>
    );
};

export default LogementHostStar;