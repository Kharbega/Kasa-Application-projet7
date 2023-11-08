import React, { useState } from 'react';
import logements from '../Data/logements.json';
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogementPanel from '../components/LogementPanel';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


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
                    <div className="location-tag">
                        <div className="logement-title">
                            <h1>Cosy lot on the Canal Saint-Martin</h1>
                        </div>
                        <div className="logement-location">
                            <p>Paris, Île-de-France</p>
                        </div>
                        <div className="logement-tags">
                            <ul>
                                <li>Cozy</li>
                                <li>Canal</li>
                                <li>Paris 10</li>
                            </ul>
                        </div>
                    </div>

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
                            <li>etoile</li>
                        </div>
                    </div>
                </div>


                <div className='description-equipement'>

                    <LogementPanel title="Descriptions" />
                    <LogementPanel title="Equipements" />

                </div>










            </section><Footer /></>
    )


};

export default FicheLogement;