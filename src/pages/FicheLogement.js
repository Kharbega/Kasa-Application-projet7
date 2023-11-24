import React, { useState } from 'react';
import logements from '../Data/logements.json';
import Footer from './Footer';
import LogementPanel from '../components/LogementPanel';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSearchParams } from 'react-router-dom'; import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slideshow from '../components/Slideshow';

const stars = <FontAwesomeIcon icon={faStar} size="xl" />



const FicheLogement = () => {


    const [] = useState(logements);

    const [urlSearch] = useSearchParams()
    const [IdFicheLogement] = useState(urlSearch.get('_id'))
    console.log(IdFicheLogement);

    let ProfileLogement = logements.find(item => item.id = IdFicheLogement);

    const [CurrentPicture, setCurrentPicture] = useState(0)

    const ShowPicture = (index) => { if (index === CurrentPicture) return "show" }

    return (


        <>
            <div className="logo-nav">
                <Navigation />
                <Logo />
            </div>

            <Slideshow picture={ProfileLogement.pictures.map((pictures, index) => {
                return <img key={pictures & index} src={pictures} className={ShowPicture(index)} />
            })
            }


                number={`${CurrentPicture + 1}/${ProfileLogement.pictures.length}`}
            />


            <section className='Card-logement ' key={IdFicheLogement}>
                <div className='group-main'>
                    <div className="location-tag">
                        <div className="logement-title">
                            <h1 >{ProfileLogement.title} </h1>
                        </div>
                        <div className="logement-location">
                            <p>{ProfileLogement.location}</p>
                        </div>
                        <div className="logement-tags">

                            <ul >
                                {ProfileLogement.tags.map((tags, index) => {
                                    return <li key={tags & index}>{tags}</li>
                                })
                                }

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
                            <li>{stars}</li>
                            <li>{stars}</li>
                            <li>{stars}</li>
                            <li>{stars}</li>
                            <li>{stars}</li>
                        </div>
                    </div>
                </div>


                <div className='description-equipement'>

                    <LogementPanel title="Descriptions" content={ProfileLogement.description} />
                    <LogementPanel title="Equipements" content={ProfileLogement.equipments} />

                </div>

            </section><Footer /></>
    )


};

export default FicheLogement;