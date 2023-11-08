import React from 'react';


const LocationTag = () => {
    return (
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
    );
};

export default LocationTag;