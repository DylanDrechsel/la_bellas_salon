import React from 'react';
import './SalonEtiquette.css'
import Title from './Components/Title'
import Arrival from './Components/Arrival';
import Cancellations from './Components/Cancellations';
import Children from './Components/Children';
import CellPhones from './Components/CellPhones';

const SalonEtiquette = () => {
    return (
        <div className='EtiquetteMainDiv'>
            <Title />
            
            <div className='SalonEtiquetteDiv'>
                <Arrival />
                <Cancellations />
                <Children />
                <CellPhones />
            </div>
        </div>
    );
};

export default SalonEtiquette;