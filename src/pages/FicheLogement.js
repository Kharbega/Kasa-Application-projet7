import React, { useState } from 'react';
import logements from '../Data/logements.json';
import Caroussel from '../components/Caroussel';
import Footer from './Footer';
import LogementPanel from '../components/LogementPanel';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import LocationTag from '../components/LocationTag';
import LogementHostStar from '../components/LogementHostStar';
import { useSearchParams } from 'react-router-dom';


const FicheLogement = () => {




    /* const ArrayLogement = [];
 
     const [searchParams] = searchParams(any);
     const [idLogement] = useState(searchParams.get('_id'));
 
     // cherche l'id dans le fichier logements.json
     const Fichelogement = logements.find(element => element.id === idLogement)
 
     if (!Fichelogement) return (<Error />)
     console.log(idLogement)
     console.log(idLogement)*/

    const [CurrentLogement] = useState(logements);

    const [urlSearch] = useSearchParams()
    const [IdFicheLogement] = useState(urlSearch.get('_id'))
    console.log(IdFicheLogement);

    let ProfileLogement = logements.find((item) => item.id = IdFicheLogement);
    console.log(ProfileLogement)

    return (


        <>
            <div className="logo-nav">
                <Navigation />
                <Logo />
            </div>
            <Caroussel />

            <section className='Card-logement'>
                <div className='group-main'>
                    <LocationTag />

                    <LogementHostStar />
                </div>


                <div className='description-equipement'>

                    <LogementPanel title="Descriptions" content={ProfileLogement.description} />
                    <LogementPanel title="Equipements" />

                </div>

            </section><Footer /></>
    )


};

export default FicheLogement;