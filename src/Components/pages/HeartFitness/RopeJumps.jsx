import React from 'react'
import Countdown from '../Cardio/CountdownTimer/Countdown'
import './RopeJumps.css'

function RopeJumps() {
  return (
    <>
     <div className="RopeJumpscontainering">

        <h1 className='bicepHeading'>Heart Fitness</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="RopeJumpsCard">
                            <h1 className='RopeJumps'>Rope Jumps</h1>
                            <div className="RopeJumpscard">
                            </div> 
                            <p className='RopeJumpsdesc'>How to: Use a jump rope, focusing on light bounces and maintaining a consistent rhythm. You can try various footwork patterns for added challenge.</p>
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

export default RopeJumps