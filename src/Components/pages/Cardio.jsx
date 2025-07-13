import React from 'react'
import './Cardio.css'

function Cardio() {
  return (
    <>
    
        <div className="container1">
      <h1 className='titleHeader'>
        Cardio Workout
      </h1>
      <p className='titleDesc'>
          Increasing stamina is no easy feat, but our stamina-building cardio plans can help you achieve your goals.
      </p>
      <div className="cardiocards">
          <div className="cardiocard">
            <img className='cardioimg' src="https://cdn.dribbble.com/userupload/22468778/file/original-45950910cd104a959d4a4ed09204818d.gif" />
            <h3 className='cardTitle'>Rowing</h3>
            <p className='cardiocardText'>Full-body workout that improves cardiovascular endurance.</p>
            <a  href="/Rowing"><button className='cardBtn' >Train Now</button></a>
          </div>
          <div className="cardiocard">
            <img className='cardioimg' src='https://cdn.dribbble.com/userupload/22468778/file/original-45950910cd104a959d4a4ed09204818d.gif' />
            <h3 className='cardTitle'>Stair Climber Machine</h3>
            <p className='cardiocardText'>High-intensity, lower-body focused cardio that boosts cardiovascular endurance.</p>
            <a  href="/Stairclimber"><button className='cardBtn' >Train Now</button></a>
          
          </div>
          <div className="cardiocard">
            <img className='cardioimg' src="https://cdn.dribbble.com/userupload/22468778/file/original-45950910cd104a959d4a4ed09204818d.gif" />
            <h3 className='cardTitle'>Elliptical Machine Walk</h3>
            <p className='cardiocardText'>The elliptical is a low-impact machine that provides an excellent cardiovascular workout.</p>
            <a  href="/Elliptical"><button className='cardBtn' >Train Now</button></a>
          </div>
      </div>
    </div>

    </>
  )
}

export default Cardio