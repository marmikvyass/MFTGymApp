import React, { useState } from 'react'
import './hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import marmikImg from '../Components/images/marmik.jpg'
import krishImg from '../Components/images/krish.jpg'
import ghibliImg from '../Components/images/ghibli.jpg'
import Hammburgir from './Hammburgir';


function Hero() {

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear"
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
    
    <div className="contianer1">
        <div className="Hero">
            <div className="hero_header">
                <div className="logo">
                    <a href="#">MFT</a>
                </div>
                <div className="hamlists">
                    <div className={`list ${isMenuOpen ? 'show' : ''}`}>
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
                    <div className="hamburgir" onClick={toggleMenu}>
                            <Hammburgir toggled={isMenuOpen} toggle={toggleMenu} />
                    </div>
                </div>
                
                <div className="join_now">
                    <button className='join_button'>
                        Join
                    </button>
                </div>
            
            </div>
            <div className="left_hero">
                <div className="h1cont">
                <h1>The Best Fitness App.</h1>
                </div>
                <h2 className='h21'>Shape Your Body</h2>
                <h2 className='h22'>Track Your Calories</h2>
                <p>Here we will help you to build your body and track your daily calories and give you</p>
                <p>Best diet plan according to your body</p>
                
                <div className="left_hero_bottom">
                    
                    <div className='left_bottom'>
                        <h3>+900</h3>
                        <h4>Members Joined</h4> 
                    </div>
                    
                    <div>
                        <h3>+30</h3>
                        <h4>Fitness Programs</h4>
                    </div>
                    
                </div>
                
                <div className="footer1">
                    <a href="#container3">
                    <button className='btn1'>
                        Get Started
                    </button>
                    </a>
                    <button className='btn2'>
                        Learn More
                    </button>
                </div>
            </div>

        </div> 
    </div>


    <div className="container2" id='container2'>
        <div className="header2">
            <h1>
                Explore
            </h1>
            <h1>
                Programs
            </h1>
        </div>

        <div className="box">
        <div className="boxes">
            <img className='dumbble' src="https://img.icons8.com/?size=100&id=pMT9uH2RtEWp&format=png&color=000000" />
            <p className='cardHeading'>Strength Training</p>
            <p className='info'>In this program, you are trained</p>
            <p className='info'>to improve your strength</p>
            <p className='info'>through many exercises</p>
            <a href="/Strength"><button className='LinkBtn'>Join Now</button></a>
        </div>
        <div className="boxes">
            <img className='dumbble' src="https://img.icons8.com/?size=100&id=7673&format=png&color=000000"/>
            <p className='cardHeading'>Cardio Training</p>
            <p className='info'>In this program, you are trained</p>
            <p className='info'>to improve your strength</p>
            <p className='info'>through many exercises</p>
            <a href="/Cardio"><button className='LinkBtn'>Join Now</button></a>

        </div>
        <div className="boxes">
            <img className='dumbble' src="https://img.icons8.com/?size=100&id=UvNzKrFSVWpu&format=png&color=000000" />
            <p className='cardHeading'>Fat Burning</p> 
            <p className='info'>In this program, you are trained</p>
            <p className='info'>to improve your strength</p>
            <p className='info'>through many exercises</p>
            <a href="/Fat"><button className='LinkBtn'>Join Now</button></a>
            <p></p>
        </div>
        <div className="boxes">
            <img className='dumbble' src="https://img.icons8.com/?size=100&id=inSVW1evFMek&format=png&color=000000"  />
            <p className='cardHeading'>Heart Fitness</p>
            <p className='info'>In this program, you are trained</p>
            <p className='info'>to improve your strength</p>
            <p className='info'>through many exercises</p>
            <a href="/Heart"><button className='LinkBtn'>Join Now</button></a>
        </div>


        </div>
        
    </div>
        
    <div className="container3" id='container3'>
        <h1 className='header3'>Start Your Journy With Us</h1>

        <div className="Plans">
            <div className="planBoxes">
                    <div className="planHeader">
                    <img className='planLogo' src="https://img.icons8.com/?size=100&id=9806&format=png&color=000000" />
                    <p>
                        Basic Plan
                    </p>
                </div>
                
                <p className='price'>₹1500/Month</p>

                <div className="planDesc">

                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                            2 devices login
                        </p>
                    </div>
                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                            Free Consultation to coaches
                        </p>
                    </div>
                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                            Access to community
                        </p>
                    </div>
                    
                </div>

                <button className='planbtn'>
                    Join now
                </button>
            </div>
            <div className="planBoxes">
                <div className="planHeader">
                    <img className='planLogo' src="https://img.icons8.com/?size=100&id=TMZaegazSPfK&format=png&color=000000" />
                    <p>
                        Premium Plan
                    </p>
                </div>
                
                
                <p className='price'>₹5500/Month</p>
                <div className="planDesc">

                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                            5 devices login
                        </p>
                    </div>
                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                            Free Consultation to coaches
                        </p>
                    </div>
                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                            Access to community & minibar
                        </p>
                    </div>
                    
                </div>

                <button className='planbtn'>
                    Join now
                </button>
            </div>
            <div className="planBoxes">
                <div className="planHeader">
                    <img className='planLogo' src="https://img.icons8.com/?size=100&id=9796&format=png&color=000000" />
                    <p>
                        Pro Plan
                    </p>
                </div>
                
                
                <p className='price'>₹6500/Month</p>
                <div className="planDesc">

                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                            unlimited devices login
                        </p>
                    </div>
                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                             Consultation to Private coaches
                        </p>
                    </div>
                    <div className="desc1">
                        <img className='tickimg' src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"/>
                        <p>
                           Free Fitness Merchandises
                        </p>
                    </div>
                    
                </div>

                <button className='planbtn'>
                    Join now
                </button>
            </div>
        </div>
    </div>

    <div className="container4" id='container4'>
        <h1 className='testiHeader'>Testimonials</h1>

        <div className="testiContain">
            <Slider {...settings}>
            {data.map((d)=>(
                <div className='testiContainer'>
                    <div>
                        <img className='testiImages' src={d.img} />
                    </div>
                    <div>
                        <p className='name'>{d.name}</p>
                        <p className='review'>{d.review}</p>
                        <button className='readBtn'>Read More</button>
                    </div>
                </div>
            ))}
            </Slider>
        </div> 

        <div className="footer">
            <div className="footerHeader">
                <h1>READY TO LEVEL UP</h1>
                <h1>YOUR BODY WITH US</h1>
            </div>
            
            {/* <textarea className='email' name="email" placeholder='Enter Your Email'  id="">Email</textarea> */}
            <input type="email" className='email' placeholder='Enter Your Email' />
        </div>

        <div className="socialM">
            <a href="https://www.instagram.com/marmikvyass?igsh=YWtsaXU5aHhrZjM2"><img className='socialMedia'  src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" /></a>
            <a href="https://github.com/marmikvyass"><img className='socialMedia' src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" /></a>
            <a href="https://www.linkedin.com/in/marmik-vyas-9b2b72220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className='socialMedia' src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" /></a>
            <a href="https://x.com/MarmikVyas3?t=KZWdLbMexrw0z0k8VdpnZg&s=09"><img className='socialMedia' src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" /></a>
        </div>
    </div>

    </>
  )
}

const data =[
    {
       name:`Marmik Vyas`,
       img: marmikImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    },
    {
       name:`Ghibli Bhai`,
       img:ghibliImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    },
    {
       name:`Krish Brahambhatt`,
       img: krishImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    },
    {
       name:`Marmik Vyas`,
       img: marmikImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    },
    {
       name:`Ghibli Bhai`,
       img:ghibliImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    },
    {
       name:`Krish Brahambhatt`,
       img: krishImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    },
    {
       name:`Marmik Vyas`,
       img: marmikImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    },
    {
       name:`Ghibli Bhai`,
       img:ghibliImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    },
    {
       name:`Krish Brahambhatt`,
       img: krishImg,
       review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore at suscipit vitae perspiciatis provident nobis aliquid dolore veniam aut maiores iste id reprehenderit expedita, velit placeat repellendus natus! Expedita maiores mollitia incidunt maxime! Sequi vero nobis numquam esse optio totam nesciunt accusamus tenetur minima sit, error sint, eveniet fuga.`
    }
]

export default Hero