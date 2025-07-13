import React from 'react'
import './Rowing.css'
import Countdown from './CountdownTimer/Countdown'

function Rowing() {
  return (
    <>
    
    <div className="Rowingcontainering">

        <h1 className='bicepHeading'>Cardio</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="rowingCard">
                            <h1 className='rowing'>Rowing </h1>
                            <div className="rowingcard">
                            </div> 
                            <p className='rowingdesc'>How to: Sit on the rower, strap your feet in, grasp the handle with both hands. Push with your legs, then hinge at your hips, and finally pull with your arms, engaging your core throughout. Reverse the motion smoothly.</p>
                        </div>
                        
                        <div className='counting'>
                            <Countdown/>
                        </div>
                         
                    </div>
                
                <div className="cardname">
                    <h2></h2>
                </div>
                
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Rowing