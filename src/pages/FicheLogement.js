import React, { useState } from 'react';
import logements from '../Data/logements.json';
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogementPanel from '../components/LogementPanel';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import LocationTag from '../components/LocationTag';
import LogementHostStar from '../components/LogementHostStar';


const FicheLogement = () => {

    /* const ArrayLogement = [];
 
     const [searchParams] = searchParams(any);
     const [idLogement] = useState(searchParams.get('_id'));
 
     // cherche l'id dans le fichier logements.json
     const Fichelogement = logements.find(element => element.id === idLogement)
 
     if (!Fichelogement) return (<Error />)
     console.log(idLogement)
     console.log(idLogement)*/


    return (


        <>
            <div className="logo-nav">
                <Navigation />
                <Logo />
            </div>

            <section className='Card-logement'>
                <div className='group-main'>
                    <LocationTag />

                    <LogementHostStar />
                </div>


                <div className='description-equipement'>

                    <LogementPanel title="Descriptions" />
                    <LogementPanel title="Equipements" />

                </div>

            </section><Footer /></>
    )


};

export default FicheLogement;