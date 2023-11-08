import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import LogementPanel from '../components/LogementPanel';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Banner from '../components/Banner';
const elementChevronUp = <FontAwesomeIcon icon={faChevronUp} />

const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const services = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
const sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


const About = () => {

    return (

        <> <div className="logo-nav">
            <Navigation />
            <Logo />
        </div>
            <Banner />
            <div>
                <LogementPanel title="Fiabilité" content={fiabilité} />
                <LogementPanel title="Respect" content={respect} />
                <LogementPanel title="Services" content={services} />
                <LogementPanel title="Sécurité" content={sécurité} />
            </div></>
    );
};

export default About;