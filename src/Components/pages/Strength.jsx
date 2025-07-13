import React from 'react'
import './Strength.css'

function Strength() {
  return (
    <>
    <div className="container1">
      <h1 className='titleHeader'>
        Strength Building Workout
      </h1>
      <p className='titleDesc'>
          Increasing strength is no easy feat, but ourstrength-building workout plans can help you achieve your goals.
      </p>
      <div className="cards">
          <div className="cardses">
            <img className='bicepimg' src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/power_muscle_burn_5_day_-_1200x630.jpg?itok=dQ3pkPgF" />
            <h3 className='cardTitle'>Bicep</h3>
            <p className='cardText'>Want Big Biceps ?</p>
            <a  href="/Biceps"><button className='cardBtn' >Train Now</button></a>
          </div>
          <div className="cardses">
            <img className='bicepimg' src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/sweatshirt-swole-thumb.jpg" />
            <h3 className='cardTitle'>Back</h3>
            <p className='cardText'>Want Wide Back ?</p>
            <a  href="/Back"><button className='cardBtn' >Train Now</button></a>
           
          </div>
          <div className="cardses">
            <img className='bicepimg' src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/crazy-5-method-feature.jpg" />
            <h3 className='cardTitle'>Chest</h3>
            <p className='cardText'>Want Huge Biceps ?</p>
            <a  href="/Chest"><button className='cardBtn' >Train Now</button></a>
          </div>
          <div className="cardses">
            <img className='bicepimg' src="https://imgs.search.brave.com/Lms4SvBWNIDg8vq2rcG9cKl8r0skoerSeUCwRdE6Yb8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZXVwLW1h/bi1kb2luZy1leGVy/Y2lzZXMtbXVzY2xl/cy10cmljZXBzLXNp/bXVsYXRvci1tdXNj/bGVzLWFybXMtbGln/YW1lbnRzLWNvbmNl/cHQtd29ya291dC1i/b2R5YnVpbGRlci1n/eW1fNjI5NjY1LTE4/ODcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA" />
            <h3 className='cardTitle'>Tricep</h3>
            <p className='cardText'>Want Big Tricep ?</p>
            <a  href="/Tricep"><button className='cardBtn' >Train Now</button></a>
          </div>
          <div className="cardses">
            <img className='bicepimg' src="https://imgs.search.brave.com/qCGfjJaHKFVLN0SZ-PclwNz7aj9m7r8ItYN4EAEww_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzEyLzQ3LzQ3/LzM2MF9GXzExMjQ3/NDc0N19VcXNCTzla/QTFEeDdsQVl6a285/WnJqdXNlc2trTmll/aS5qcGc" />
            <h3 className='cardTitle'>Shoulder</h3>
            <p className='cardText'>Want Broad Shoulders ?</p>
            <a  href="/Shoulders"><button className='cardBtn' >Train Now</button></a>
          </div>
          <div className="cardses">
            <img className='bicepimg' src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/pause-reps-for-size-feature.jpg" />
            <h3 className='cardTitle'>Legs</h3>
            <p className='cardText'>Want Muscular Legs ?</p>
            <a  href="/Legs"><button className='cardBtn' >Train Now</button></a>
          </div>
      </div>
    </div>

    </>
  )
}

export default Strength