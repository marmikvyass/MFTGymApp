import React from 'react'
import Countdown from '../Cardio/CountdownTimer/Countdown'
import './MountainClimber.css'

function MountainClimber() {
  return (
    <>
    
    <div className="MountainClimbercontainering">

        <h1 className='bicepHeading'>Fat Burn</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="MountainClimberCard">
                            <h1 className='MountainClimber'>Mountain Climber Cross</h1>
                            <div className="MountainClimbercard">
                            </div> 
                            <p className='MountainClimberdesc'>How to: Start in a plank position, hands under shoulders, body in a straight line. Alternately bring one knee towards your chest, then the other, mimicking a climbing motion. Keep your core tight.</p>
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

export default MountainClimber