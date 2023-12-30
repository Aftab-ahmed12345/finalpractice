import React from 'react';
import Aftab from "../assets/images/aftab.jpg"

function HeroSection() {
return (

    <div className='container'>
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 Hero-text ">
                <div className="subhero">
                <h1 className='Hi-h'> 
                    Hi,
                </h1>
                
                 <h3 >Aftab Ahmed Here</h3>
                                    
                <p >
                    4th Year Student Of Sukkur IBA University
                </p>
                </div>
                
               
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                 <img className='aftab-image' src={Aftab}/>
            </div>
        </div> 
         
    </div>
)
}

export default HeroSection