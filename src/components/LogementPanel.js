import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const elementChevronUp = <FontAwesomeIcon icon={faChevronUp} />
const elementChevronDown = <FontAwesomeIcon icon={faChevronDown} />

import "../styles/components/LogementPanel.css"

const LogementPanel = (props) => {

    const [CollapseOpen, SetCollapseOpen] = useState(false)

    /* Si le <p> est visible alors on affiche le chevron Up sinon on affiche le chevronDown */
    const CollapseChevron = (CollapseOpen ? elementChevronUp : elementChevronDown)
    const ReverseContentTitle = () => { SetCollapseOpen(!CollapseOpen) }


    return (
        <div className="logement-panel-about panel-ficheLogement">
            <div className='group-title-chevron' onClick={ReverseContentTitle}>
                <h4>{props.title}</h4>
                <span className="elementChevronUp">{CollapseChevron}</span>
            </div>
            {CollapseOpen && <p >{props.content} </p>}
        </div>

    );

};


export default LogementPanel;