import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import LogementPanel from '../components/LogementPanel';
const elementChevronUp = <FontAwesomeIcon icon={faChevronUp} />


const About = () => {

    return (
        <div>
            <LogementPanel />
            <LogementPanel />
            <LogementPanel />
            <LogementPanel />
        </div>
    );
};

export default About;