import React from 'react'
import Countdown from '../Cardio/CountdownTimer/Countdown'
import './IndoorCycling.css'
function IndoorCycling() {
  return (
    <>
     <div className="IndoorCyclingcontainering">

        <h1 className='bicepHeading'>Heart Fitness</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="IndoorCyclingCard">
                            <h1 className='IndoorCycling'>Indoor Cycling</h1>
                            <div className="IndoorCyclingcard">
                            </div> 
                            <p className='IndoorCyclingdesc'>How to: Ride a bicycle outdoors or use a stationary bike at the gym. Vary your speed and resistance to keep your heart rate elevated.</p>
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

export default IndoorCycling