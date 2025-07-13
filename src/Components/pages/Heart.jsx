import React from 'react'
import './Heart.css'

function Heart() {
  return (
     <>
    
      <div className="container1">
      <h1 className='titleHeader'>
        Heart Fitness Workout
      </h1>
      <p className='titleDesc'>
          Loosing stubborn fat is no easy feat, but our fat  plans can help you achieve your goals.
      </p>
      <div className="heartcards">
          <div className="heartcard">
            <img className='heartimg' src="https://cdn.dribbble.com/userupload/21346579/file/original-ac7e4112deff4ca4e5b626b5a904fe79.gif" />
            <h3 className='cardTitle'>Incline Treadmill Walk</h3>
            <p className='heartcardText'>An accessible and low-impact way to strengthen the heart.</p>
            <a  href="/InclineTreadmillWalk"><button className='cardBtn' >Train Now</button></a>
          </div>
          <div className="heartcard">
            <img className='heartimg' src='https://cdn.dribbble.com/userupload/21346579/file/original-ac7e4112deff4ca4e5b626b5a904fe79.gif' />
            <h3 className='cardTitle'>Indoor Cycling</h3>
            <p className='heartcardText'>A low-impact exercise that's excellent for heart fitness.</p>
            <a  href="/IndoorCycling"><button className='cardBtn' >Train Now</button></a>
          
          </div>
          <div className="heartcard">
            <img className='heartimg' src="https://cdn.dribbble.com/userupload/21346579/file/original-ac7e4112deff4ca4e5b626b5a904fe79.gif" />
            <h3 className='cardTitle'>Rope Jumps</h3>
            <p className='heartcardText'>A highly effective, full-body workout that significantly elevates heart rate.</p>
            <a  href="/RopeJumps"><button className='cardBtn' >Train Now</button></a>
          </div>
      </div>
    </div>
    
    </>
  )
}

export default Heart