import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
const elementChevronUp = <FontAwesomeIcon icon={faChevronUp} />


const About = () => {

    return (
        <div>
            <div className="logement-description-about">
                <div className='title-chevron' >
                    <h4>Description</h4>
                    <span className='elementChevronUp'>{elementChevronUp}</span>

                </div>
                <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
            </div>

            <div className="logement-description-about">
                <div className='title-chevron' >
                    <h4>Description</h4>
                    <span className='elementChevronUp'>{elementChevronUp}</span>

                </div>
                <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
            </div>


            <div className="logement-description-about">
                <div className='title-chevron' >

                    <h4>Description</h4>
                    <span className='elementChevronUp'>{elementChevronUp}</span>


                </div>
                <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
            </div>

            <div className="logement-description-about">
                <div className='title-chevron' >



                    <h4>Description</h4>
                    <span className='elementChevronUp'>{elementChevronUp}</span>
                </div>

                <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
            </div>


        </div>
    );
};

export default About;