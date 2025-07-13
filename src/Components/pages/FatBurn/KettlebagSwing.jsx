import React from 'react'
import Countdown from '../Cardio/CountdownTimer/Countdown'
import './KettlebagSwing.css'


function KettlebagSwing() {
  return (
    <>
    
    <div className="KettlebagSwingcontainering">

        <h1 className='bicepHeading'>Fat Burn</h1>
        <div className="biginnerContainer">

            {/* Brachialies  */}
            
            <div className="innerContainer1">

                <div className="card">
                    <div className="timercard">
                        <div className="KettlebagSwingCard">
                            <h1 className='KettlebagSwing'>Kettlebag Swing</h1>
                            <div className="KettlebagSwingcard">
                            </div> 
                            <p className='KettlebagSwingdesc'>How to : Stand with feet wider than shoulder-width, holding a kettlebell with both hands. Hinge at your hips, keeping your back straight, and swing the kettlebell explosively upward by driving your hips forward. Control the descent.</p>
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

export default KettlebagSwing