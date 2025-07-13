import React from 'react'
import './Fat.css'

function Fat() {
  return (
    <>
    
      <div className="container1">
      <h1 className='titleHeader'>
        Fat Burn Workout
      </h1>
      <p className='titleDesc'>
          Loosing stubborn fat is no easy feat, but our fat  plans can help you achieve your goals.
      </p>
      <div className="fatcards">
          <div className="fatcard">
            <img className='fatimg' src="https://cdn.dribbble.com/userupload/21634546/file/original-b97247309f10a4355c5ce2b448cdd8d4.gif" />
            <h3 className='cardTitle'>Mountain Climbers Cross</h3>
            <p className='fatcardText'>Full-body exercise that targets the core and burns excessive calories.</p>
            <a  href="/MountainClimber"><button className='cardBtn' >Train Now</button></a>
          </div>
          <div className="fatcard">
            <img className='fatimg' src='https://cdn.dribbble.com/userupload/21634546/file/original-b97247309f10a4355c5ce2b448cdd8d4.gif' />
            <h3 className='cardTitle'>Kettlebag Swing</h3>
            <p className='fatcardText'>High-intensity, lower-body focused cardio that boosts cardiovascular endurance.</p>
            <a  href="/KettlebagSwing"><button className='cardBtn' >Train Now</button></a>
          
          </div>
          <div className="fatcard">
            <img className='fatimg' src="https://cdn.dribbble.com/userupload/21634546/file/original-b97247309f10a4355c5ce2b448cdd8d4.gif" />
            <h3 className='cardTitle'>Burpees</h3>
            <p className='fatcardText'>The elliptical is a low-impact machine that provides an excellent cardiovascular workout.</p>
            <a  href="/Burpees"><button className='cardBtn' >Train Now</button></a>
          </div>
      </div>
    </div>
    
    </>
  )
}

export default Fat