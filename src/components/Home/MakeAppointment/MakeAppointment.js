import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <div className = "appointment-section">
            <div className="container">
                <div className="row">
                    <div className = "col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className = "col-md-7 text-white py-5">
                        <h5 style = {{color: '#1CC7C1'}}>APPOINTMENT</h5>
                        <h2 className="my-4">Make an appointment <br/> Today </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit eius incidunt corrupti blanditiis? <br/> Perferendis saepe atque debitis sequi expedita!</p>
                        <button className = "btn btn-primary">Learn More</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;