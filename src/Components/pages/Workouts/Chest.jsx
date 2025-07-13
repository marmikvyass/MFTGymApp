import React from 'react'
import './Chest.css'

function Chest() {
  return (
    <>
    
      <div className="containering">

    <h1 className='bicepHeading'>Chest Workout</h1>

      <div className="biginnerContainer">

        {/* Brachialies  */}
        <h1 className='brachialies'>Upper Chest - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="chestcard1">
              </div>
              <div className="cardname">
                <h2>Incline Dumbell Press - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="chestcard2">
              </div>
              <div className="cardname">
                <h2>Cable Low FLy - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="chestcard3">
              </div>
              <div className="cardname">
                <h2>Lever Incline Chest Press - 12 * 4</h2>
              </div>
            </div>
          </div>


          {/* Bicep Short Head  */}

          <h1 className='brachialies'>Middle Chest - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="chestcard4">
              </div>
              <div className="cardname">
                <h2>Lever Chest Press - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="chestcard5">
              </div>
              <div className="cardname">
                <h2>Pectoral Dec Fly - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="chestcard6">
              </div>
              <div className="cardname">
                <h2>Bench Press - 12 * 4</h2>
              </div>
            </div>
          </div>

          {/* Bicep Long Heads */}

          <h1 className='brachialies'>Lower Chest - Only One Exercise </h1>
          <div className="innerContainer1">

            <div className="card">
              <div className="chestcard7">
              </div>
              <div className="cardname">
                <h2>Decline Dumbell Bench Press - 12 * 4</h2>
              </div>
            </div>


            <div className="card">
              <div className="chestcard8">
              </div>
              <div className="cardname">
                <h2>Cable Standing Fly - 12 * 4</h2>
              </div>
            </div>

            <div className="card">
              <div className="chestcard9">
              </div>
              <div className="cardname">
                <h2>Chest Dip - 12 * 4</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Chest