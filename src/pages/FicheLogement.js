import React, { useState } from 'react';
import logements from '../Data/logements.json';
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


        <><section className='Card-logement'>
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

                <div className="logement-description">
                    <h4>Description</h4>
                    <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                </div>
                <div className="logement-equipement">
                    <h4>Equipements</h4>
                    <ul>
                        <li>Climatisation</li>
                        <li>Wi-fi</li>
                        <li>Cuisine</li>
                        <li>Espace de travail</li>
                        <li>Fer a repasser</li>
                        <li>Seche-cheveux</li>
                        <li>Cintres</li>
                    </ul>
                </div>

            </div>










        </section><Footer /></>
    )


};

export default FicheLogement;