import React from 'react'
import './Elliptical.css'
import Countdown from './CountdownTimer/Countdown'

function Elliptical() {
  return (
    <>
    
            <div className="ellipticalcontainering">

        <h1 className='bicepHeading'>Cardio</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="elipCard">
                            <h1 className='elliptical'>Elliptical Walk </h1>
                            <div className="ellipticalcard">
                            </div>
                            <p className='ellipdesc'>How to: Step onto the foot pedals and grasp the moving handles. Begin a continuous, gliding motion, mimicking walking or running, while engaging your legs and arms. You can adjust resistance and incline.</p>
                        </div>
                         
                        <div className='counting'>
                            <Countdown/>
                        </div>
                    </div>
                
                <div className="cardname">
                    <h4></h4>
                </div>
                
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Elliptical