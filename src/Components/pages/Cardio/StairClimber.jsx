import React from 'react'
import './StairClimber.css'
import Countdown from './CountdownTimer/Countdown'

function StairClimber() {
  return (
    <>

    <div className="StairClimbercontainering">

        <h1 className='bicepHeading'>Cardio</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="stairCard">
                            <h1 className='StairClimber'>Stair Climber </h1>
                            <div className="StairClimbercard">
                            </div>
                            <p className='stairdesc'>How to: Climb stairs at a steady pace, or use a stair climber machine at the gym. Focus on engaging your glutes and quads.</p>
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

export default StairClimber