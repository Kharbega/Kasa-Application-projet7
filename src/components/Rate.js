import React from 'react';
import StarActive from '../assets/fonts/img/star-active.png'
import StarInactive from '../assets/fonts/img/StarInactive.png'

const Rate = (props) => {
    const ArrayNumbers = [1, 2, 3, 4, 5]

    return (
        <div className="rate-content"  >
            {[1, 2, 3, 4, 5].map((ArrayNumber) =>
                (props.numberofRate) >= ArrayNumber ?
                    (<img className="star" src={StarActive} key={ArrayNumber.toString()} />)
                    : (<img className="starinactive" src={StarInactive} key={ArrayNumber.toString()} />)

            )

            }
        </div>
    );
};

export default Rate;