import React, { useEffect, useState } from 'react';
import logements from '../Data/logements.json';
import { Link } from 'react-router-dom';


const Card = () => {

    return (

        // Creation d'un nouveau tableau avec map pour recuperer les donnes de data logements //
        <div className="card-content">
            {logements.map((logement) => {
                const { id, cover, title } = logement;

                return (

                    < div className="card-models" key={id} >

                        <Link to={{ pathname: "/FicheLogement", search: "?_id=" + id }}>
                            <img src={cover} alt='' />
                            <h4 >{title}</h4>

                        </Link>
                    </div>
                )

            })}

        </div >


    )

}
export default Card;