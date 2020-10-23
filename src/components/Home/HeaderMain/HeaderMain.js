import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <div className = "container">
            <main  style={{height:'600px'}}  className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sequi, adipisci nisi modi beatae voluptas!</p>
                <button class="btn btn-primary">GET APPOINTMENT</button>

            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
            
        </main>
        </div>
    );
};

export default HeaderMain;