import React from 'react'
import Countdown from '../Cardio/CountdownTimer/Countdown'
import './Burpees.css'

function Burpees() {
  return (
    <>
    
    <div className="Burpeescontainering">

        <h1 className='bicepHeading'>Fat Burn</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="BurpeesCard">
                            <h1 className='Burpees'>Burpees</h1>
                            <div className="Burpeescard">
                            </div> 
                            <p className='Burpeesdesc'>How to : Start standing, drop into a squat with hands on the floor, kick feet back to a plank, perform a push-up (optional), jump feet back to squat, then explode into a jump with arms overhead.</p>
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

export default Burpees