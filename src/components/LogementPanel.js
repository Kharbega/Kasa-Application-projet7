import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const elementChevronUp = <FontAwesomeIcon icon={faChevronUp} />
const elementChevronDown = <FontAwesomeIcon icon={faChevronDown} />

import "../styles/components/LogementPanel.css"

const LogementPanel = (props) => {

    function HandleClick() {
        const [CollapseOpen, SetCollapseOpen] = useState(false)

        /*Si* le collapse est ouvert notre <p> est visible sinon il est hidden */
        const CollapseVisible = (CollapseOpen ? "visible " : "hidden") + HandleClick

        /* Si le <p> est visible alors on affiche le chevron Up sinon on affiche le chevronDown */
        const CollapseChevron = (CollapseVisible ? elementChevronUp : elementChevronDown)

        /*  */
        const ReverseContentTitle = () => { CollapseOpen(!SetCollapseOpen) }

        HandleClick()

        return (
            <div className="logement-panel-about">
                <div className='group-title-chevron' onClick={ReverseContentTitle}>
                    <h4>{props.title}</h4>
                    <span className='elementChevronUp'>{CollapseChevron}</span>
                </div>
                <p className={CollapseOpen}>{props.content} </p>
            </div>

        );
    };
}



export default LogementPanel;