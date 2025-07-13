import React from 'react'
import Countdown from '../Cardio/CountdownTimer/Countdown'
import './InclineTreadmillWalk.css'

function InclineTreadmillWalk() {
  return (
    <>
    
    <div className="InclineTreadmillWalkcontainering">

        <h1 className='bicepHeading'>Heart Fitness</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="InclineTreadmillWalkCard">
                            <h1 className='InclineTreadmillWalk'>Incline Treadmill Walk</h1>
                            <div className="InclineTreadmillWalkcard">
                            </div> 
                            <p className='InclineTreadmillWalkdesc'>How to: Walk at a pace where you can still talk but are slightly breathless. For added challenge, find hills, stairs, or use a treadmill with an incline.</p>
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

export default InclineTreadmillWalk