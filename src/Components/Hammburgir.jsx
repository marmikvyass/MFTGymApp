import React from 'react'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import './Hammburgir.css'

function Hammburgir() {
    const [open,setOpen] = useState(false)
  return <>
  <div className='hammer'>

  
        <Hamburger
        toggled={open}
        toggle={setOpen}
        />
        {open && 

        <div>
            <div className="hamlist">
                <a href="">
                    Home
                </a>
                                
                <a href="#container2">
                    Programs
                </a>
                                
                <a href="#container3">
                    Plans
                </a>
                                
                <a href="#container4">
                    Testimonials    
                </a>
            </div>
                            
        </div>}
    </div>
  </>
    
}

export default Hammburgir