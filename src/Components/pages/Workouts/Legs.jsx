import React from 'react'
import './Leg.css'

function Legs() {
  return (
    <>
    
    <div className="containering">

    <h1 className='bicepHeading'>Leg Workout</h1>

      <div className="biginnerContainer">

        {/* Brachialies  */}
        <h1 className='brachialies'>Quadriceps - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="legcard1">
              </div>
              <div className="cardname">
                <h2>Lever Leg Extension - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="legcard2">
              </div>
              <div className="cardname">
                <h2>Full Squats - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="legcard3">
              </div>
              <div className="cardname">
                <h2>Wide Leg Press - 12 * 4</h2>
              </div>
            </div>
          </div>


          {/* Bicep Short Head  */}

          <h1 className='brachialies'>Hamstring - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="legcard4">
              </div>
              <div className="cardname">
                <h2>Lever Lying Leg Curl - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="legcard5">
              </div>
              <div className="cardname">
                <h2>Lever Kneeling Leg Curl - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="legcard6">
              </div>
              <div className="cardname">
                <h2>Lever Seated Leg Curl - 12 * 4</h2>
              </div>
            </div>
          </div>

          {/* Bicep Long Heads */}

          <h1 className='brachialies'>Hip & Calfs - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="legcard7">
              </div>
              <div className="cardname">
                <h2>Lever Hip Abduction - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="legcard8">
              </div>
              <div className="cardname">
                <h2>Lever Standing Calf Raise - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="legcard9">
              </div>
              <div className="cardname">
                <h2>Smith Seated Calf Raise - 12 * 4</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Legs