import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Dr. Caudi</h4>
            <p> <FontAwesomeIcon style = {{color: '#1CC7C1'}}icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;