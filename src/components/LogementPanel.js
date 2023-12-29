import React, { useState } from 'react';
import elementChevronUpp from '../assets/fonts/img/chevronUp.png';
import elementChevronDownn from '../assets/fonts/img/chevronDown.png'



import "../styles/components/LogementPanel.css"

const LogementPanel = (props) => {
    const elementChevronDown = <img src={elementChevronDownn} />
    const elementChevronUp = <img src={elementChevronUpp} />

    const [CollapseOpen, SetCollapseOpen] = useState(false)

    //Si le <p> est visible alors on affiche le chevron Up sinon on affiche le chevronDown 
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