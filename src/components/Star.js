import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';





const stars = <FontAwesomeIcon icon={faStar} size="xl" />
//let [rating, setRating] = useState(40)


const Star = (props) => {
    //  [rating, setrating] = useState(0);

    // Catch Rating value
    /*  const handleRating = (rate) => {
          setRating(rate)
      }
      console.log(rate)*/



    return (
        <Rating
            fillColor=' #ff6060'
            initialValue={props.initialValue}
            allowHover={false}

        />
    )
}

export default Star;