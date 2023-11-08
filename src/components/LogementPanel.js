import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
const elementChevronUp = <FontAwesomeIcon icon={faChevronUp} />
import "../styles/components/LogementPanel.css"

const LogementPanel = (props) => {
    return (
        <div className="logement-panel-about">
            <div className='group-title-chevron' >
                <h4>{props.title}</h4>
                <span className='elementChevronUp'>{elementChevronUp}</span>

            </div>
            <p>{props.content} </p>
        </div>

    );
};

export default LogementPanel;