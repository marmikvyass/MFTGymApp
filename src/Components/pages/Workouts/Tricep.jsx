import React from 'react'
import './Tricep.css'

function Tricep() {
  return (
      <>
      
        <div className="tricepcontainering">

    <h1 className='bicepHeading'>Tricep Workout</h1>

      <div className="biginnerContainer">

        {/* Brachialies  */}
        <h1 className='brachialies'>Tricep Lateral Head - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="tricepcard1">
              </div>
              <div className="cardname">
                <h2>Tricep Cable Pushdown - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="tricepcard2">
              </div>
              <div className="cardname">
                <h2>Tricep Rope Pushdown - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="tricepcard3">
              </div>
              <div className="cardname">
                <h2>Single Arm Tricep Pushdown - 12 * 4</h2>
              </div>
            </div>
          </div>


          {/* Bicep Short Head  */}

          <h1 className='brachialies'>Tricep Long Head - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="tricepcard4">
              </div>
              <div className="cardname">
                <h2>Overhead Cable Extension - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="tricepcard5">
              </div>
              <div className="cardname">
                <h2>Barbell Skull Crusher - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="tricepcard6">
              </div>
              <div className="cardname">
                <h2>Lying Single Extension - 12 * 4</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
  )
}

export default Tricep