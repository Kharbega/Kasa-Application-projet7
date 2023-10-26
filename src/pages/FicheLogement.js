import React, { useState } from 'react';
import logements from '../Data/logements.json';
import { Carousel } from 'react-responsive-carousel';


const FicheLogement = () => {

    /* const ArrayLogement = [];
  
      {
          logements.map((logement) => {
  
  
              const [CurrentLogement] = useState(logement);
  
              console.log(logement)
              console.log(ArrayLogement)*/

    return (


        <div className='Card-logement'>
            <Carousel>
                <img src='src/assets/fonts/img/Carrousel.png' alt='img' />
                <img src='src/assets/fonts/img/Carrousel.png' />
                <img src='src/assets/fonts/img/Carrousel.png' />
            </Carousel>
            <div className="logement-title">
                <h1>title logement</h1>
            </div>
            <div className="logement-location">
                <p>lieu </p>
            </div>
            <div className="logement-tags">
                <ul>
                    <li>tags</li>
                </ul>
            </div>
            <div className="logement-host">
                <h2 className='name'>Name</h2>
                <img src="" alt="img" />
            </div>
            <div className="logement-tags">
                <li>etoile</li>
            </div>
            <div className="logement-description">
                <p>description</p>
            </div>
            <div className="logement-equipement">
                <ul>
                    <li>equipement</li>
                </ul>
            </div>











        </div>
    )


};

export default FicheLogement;