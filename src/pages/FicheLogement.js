import React, { useState } from 'react';
import logements from '../Data/logements.json';
import Footer from './Footer';
import LogementPanel from '../components/LogementPanel';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { useSearchParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Error from '../pages/Error';
import Rate from '../components/Rate';



const FicheLogement = () => {
    /* Recherche de l'id de chaque logement */
    const [urlSearch] = useSearchParams()
    const [IdFicheLogement] = useState(urlSearch.get('_id'))

    let ProfileLogement = logements.find(item => item.id === IdFicheLogement);
    /* Si id introuvable , on dirige vers la page erreur **/
    if (ProfileLogement === undefined) return (<Error />);

    const [CurrentPicture, setCurrentPicture] = useState(0)
    const TotalLengthPicture = ProfileLogement.pictures.length - 1;
    const NumberPicture = CurrentPicture - 1;

    /* fonction pour gerer le nombre de photo, gerer le deroulement des photos */
    const ShowPicture = (index) => { if (index === CurrentPicture) return "show" };
    const clickleftPicture = () => {
        if (NumberPicture < 0) { setCurrentPicture(TotalLengthPicture) }
        else {
            setCurrentPicture(CurrentPicture - 1)
        }

    };

    const clickrighttPicture = () => {
        setCurrentPicture((CurrentPicture + 1) % ProfileLogement.pictures.length)
    };



    return (


        <><div className='ficheOneLogement' key={IdFicheLogement}>
            <div className="logo-nav LogoFicheLogement">
                <Navigation />
                <Logo />
            </div>


            <Slideshow
                picture={ProfileLogement.pictures.map((pictures, indexpicture) => {
                    return <img key={indexpicture} src={pictures} className={ShowPicture(indexpicture)} />;
                })}
                number={`${CurrentPicture + 1}/${ProfileLogement.pictures.length}`}

                clickright={clickrighttPicture}
                clickleft={clickleftPicture} />

            <section className='Card-logement '>
                <div className='group-main'>
                    <div className="location-tag">
                        <div className="logement-title">
                            <h1>{ProfileLogement.title} </h1>
                        </div>
                        <div className="logement-location">
                            <p>{ProfileLogement.location}</p>
                        </div>
                        <div className="logement-tags">

                            <ul>
                                {ProfileLogement.tags.map((tags, indextag) => {
                                    return <li key={indextag}>{tags}</li>;
                                })}

                            </ul>

                        </div>
                    </div>
                    <div className='host-star'>
                        <div className="logement-host">
                            <div className="div-name">
                                <p className='name'>{ProfileLogement.host.name}</p>
                            </div>

                            <span className='div-img'>
                                <img src={ProfileLogement.host.picture} alt="" />
                            </span>

                        </div>
                        <div className="logement-star-rating">
                            <Rate numberofRate={ProfileLogement.rating}
                            />
                        </div>

                    </div>
                </div>


                <div className='description-equipement'>

                    <LogementPanel title="Descriptions" content={ProfileLogement.description} />
                    <LogementPanel title="Equipements" content={ProfileLogement.equipments.map((equipments, indexeq) => {
                        return <li key={indexeq}>{equipments}</li>;
                    })} />

                </div>

            </section></div><Footer /></>
    )

};

export default FicheLogement;