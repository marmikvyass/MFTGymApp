import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import './Countdown.css'

function Countdown() {

    const[timer,setTimer] = useState(); 
    const[currentTimeLeft, setCurrentTimeLeft] = useState(0);
    const[istimerrunning, setisTimerrunning] = useState(false);

    const timerRef = useRef(null);

    const formatTime = (totalSecond) =>{
        const hours = Math.floor(totalSecond / 3600);
        const minutes = Math.floor((totalSecond % 3600) / 60);
        const seconds = totalSecond % 60;


        const paddedHours = String(hours).padStart(2,'0');
        const paddedMinutes = String(minutes).padStart(2,'0');
        const paddedSeconds = String(seconds).padStart(2,'0');

        return `${paddedHours} : ${paddedMinutes} : ${paddedSeconds}`;
    }

    useEffect(()=>{
        if(istimerrunning && currentTimeLeft > 0)
        {
            timerRef.current = setInterval(()=>{
                setCurrentTimeLeft(prevTime => prevTime - 1);
            },1000)
        }
        else if(currentTimeLeft === 0)
        {
            clearInterval(timerRef.current)
            setisTimerrunning(false);
        }

        return ()=>{
            clearInterval(timerRef.current)
        }
    },[istimerrunning, currentTimeLeft ])

    const handleSliderChanges = (e)=>{
            const newDuration = Number(e.target.value);
            setTimer(newDuration);

            if(!istimerrunning) {
                setCurrentTimeLeft(newDuration);
            }
            
    }

    function start(){
        if(!istimerrunning){

            if(currentTimeLeft === 0 && timer > 0)
            {
                setCurrentTimeLeft(timer)
            }
            else if(currentTimeLeft > 0){

            }
            else{
                return;
            }
            setisTimerrunning(true);
        }
    }
    function pause(){
        setisTimerrunning(false);
        clearInterval(timerRef.current);
    }
    function reset(){
        clearInterval(timerRef.current);
        setisTimerrunning(false);
        setCurrentTimeLeft(0);
        setTimer(0);
    }

  return (
    <>
        <div className='timer'>
          {formatTime(currentTimeLeft)}
        </div>
         {/* <label htmlFor="time-slider">Set Duration: {formatTime(timer)}</label> */}
        <input 
        className='input' 
        type="range"
        id="time-slider"
        min="0"
        max="3600"
        step="10"
        placeholder='Enter Timer' 
        value={timer} 
        onChange={handleSliderChanges}
        disabled={istimerrunning} />
        <div className="buttons">
            <button className='startbtn' onClick={istimerrunning? pause : start}>
            {istimerrunning ? 'Pause' : 'Start'}
            </button>
            <button className='startbtn' onClick={reset}>Reset</button>
        </div>
        
    </>
  )
}

export default Countdown