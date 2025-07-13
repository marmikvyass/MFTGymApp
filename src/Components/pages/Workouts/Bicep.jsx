import React from 'react'
import './Bicep.css'


function Bicep() {
  return (
    
    <>
    
    <div className="containering">

    <h1 className='bicepHeading'>Bicep Workout</h1>

      <div className="biginnerContainer">

        {/* Brachialies  */}
        <h1 className='brachialies'>Brachialies - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="bicepcard1">
              </div>
              <div className="cardname">
                <h2>Cable Hammer Curl - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="bicepcard2">
              </div>
              <div className="cardname">
                <h2>Cross Body Hammer Curl - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="bicepcard3">
              </div>
              <div className="cardname">
                <h2>Hammer Curl - 12 * 4</h2>
              </div>
            </div>
          </div>


          {/* Bicep Short Head  */}

          <h1 className='brachialies'>Bicep Short Head - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="bicepcard4">
              </div>
              <div className="cardname">
                <h2>Preacher Curl - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="bicepcard5">
              </div>
              <div className="cardname">
                <h2>Concerntration Curl Each - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="bicepcard6">
              </div>
              <div className="cardname">
                <h2>Dumbell Preacher Curl Each - 12 * 4</h2>
              </div>
            </div>
          </div>

          {/* Bicep Long Heads */}

          <h1 className='brachialies'>Bicep Long Heads - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="bicepcard7">
              </div>
              <div className="cardname">
                <h2>One Arm Cable Curl Each - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="bicepcard8">
              </div>
              <div className="cardname">
                <h2>Incline Bicep Curl - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="bicepcard9">
              </div>
              <div className="cardname">
                <h2>Cable Curl - 12 * 4</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bicep