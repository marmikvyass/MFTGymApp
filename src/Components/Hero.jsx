import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import marmikImg from "../Components/images/marmik.jpg";
import krishImg from "../Components/images/krish.jpg";
import ghibliImg from "../Components/images/ghibli.jpg";
import Hammburgir from "./Hammburgir";

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* CONTAINER 1 */}
            <div className="h-screen w-full overflow-hidden text-white">
                {/* HEADER */}
                <div className="flex justify-between mt-3 sm:mt-5 px-6 sm:px-20 h-[70px]">
                    <div className="font-extrabold text-3xl">
                        <a href="#">MFT</a>
                    </div>

                    {/* NAV LINKS */}
                    <div className="relative">
                        <div className="hidden sm:flex gap-8">
                            <a href="#" className="hover:scale-110 transition">Home</a>
                            <a href="#container2" className="hover:scale-110 transition">Programs</a>
                            <a href="#container3" className="hover:scale-110 transition">Plans</a>
                            <a href="#container4" className="hover:scale-110 transition">Testimonials</a>
                        </div>

                        <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col bg-black gap-4 sm:hidden`}></div>
                        
                        {/* HAMBURGER */}
                        <div
                            className="sm:hidden absolute top-0 right-0 mb-20"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Hammburgir toggled={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
                        </div>
                    </div>

                    {/* JOIN BUTTON */}
                    <button className="bg-white h-10 text-black px-6 py-2 rounded-lg font-medium hover:hover:text-white hover:bg-black hover:scale-110 transition duration-200 cursor-pointer sm:block hidden">
                            Join
                    </button>
                </div>

                {/* HERO LEFT SIDE */}
                <div className="mt-28 ml-6 sm:ml-28">
                    <h1 className="text-gray-300 font-bold text-3xl sm:text-7xl border-r-4 border-gray-300 whitespace-nowrap overflow-hidden animate-typing">
                        The Best Fitness App.
                    </h1>

                    <h2 className="text-pink-300 text-2xl sm:text-4xl font-bold mt-6">Shape Your Body</h2>
                    <h2 className="text-pink-300 text-2xl sm:text-4xl font-bold">Track Your Calories</h2>

                    <p className="text-gray-300 mt-4  sm:text-lg text-sm">Here we help you build your body & track daily calories.</p>
                    <p className="text-gray-300 sm:text-lg text-sm">Best diet plan according to your body.</p>

                    <div className="flex gap-10 mt-10">
                        <div>
                            <h3 className="sm:text-3xl text-2xl text-gray-200">900+</h3>
                            <h4 className="sm:text-3xl text-2xl cursor-pointer">Members Joined</h4>
                        </div>
                        <div>
                            <h3 className="sm:text-3xl text-2xl text-gray-200">30+</h3>
                            <h4 className="sm:text-3xl text-2xl cursor-pointer">Fitness Programs</h4>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-16">
                        <a href="#container3">
                            <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:hover:text-white hover:bg-black hover:scale-110 transition duration-200">
                                Get Started
                            </button>
                        </a>
                        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:hover:text-white hover:bg-black hover:scale-110 transition duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* CONTAINER 2 — PROGRAMS */}
            <div id="container2" className="min-h-screen w-full overflow-hidden text-black py-20">
                <div className="text-center sm:text-5xl text-4xl font-extrabold bg-linear-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent flex justify-center gap-4">
                    <h1>Explore</h1> <h1>Programs</h1>
                </div>

                <div className="mt-30 grid grid-cols-1 sm:grid place-items-center sm:grid-cols-4 gap-5">
                    {[
                        {
                            title: "Strength Training",
                            link: "/Strength",
                            img: "https://img.icons8.com/?size=100&id=pMT9uH2RtEWp&format=png",
                        },
                        {
                            title: "Cardio Training",
                            link: "/Cardio",
                            img: "https://img.icons8.com/?size=100&id=7673&format=png",
                        },
                        {
                            title: "Fat Burning",
                            link: "/Fat",
                            img: "https://img.icons8.com/?size=100&id=UvNzKrFSVWpu&format=png",
                        },
                        {
                            title: "Heart Fitness",
                            link: "/Heart",
                            img: "https://img.icons8.com/?size=100&id=inSVW1evFMek&format=png",
                        },
                    ].map((item) => (
                        <div className="sm:w-70 w-60 h-60 sm:h-[350px] p-6 rounded-xl bg-linear-to-br from-purple-200 to-purple-100 hover:scale-105 hover:bg-linear-to-br hover:from-orange-200 hover:via-red-400 hover:to-red-500 transition">
                            <img src={item.img} className="h-16 mb-4" />
                            <p className="text-2xl font-semibold">{item.title}</p>
                            <p className="sm:text-lg text-xs">In this program, you are trained to improve your strength through many exercises</p>
                            <a href={item.link}>
                                <button className="mt-4 underline text-lg hover:scale-110 transition cursor-pointer">Join Now</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* CONTAINER 3 — PLANS */}
            <div id="container3" className="min-h-screen w-full  text-black py-16">
                <h1 className="text-center text-4xl sm:text-7xl font-extrabold bg-linear-to-b from-purple-800 via-pink-400 to-white bg-clip-text text-transparent">
                    Start Your Journey With Us
                </h1>

                <div className="mt-30 grid grid-cols-1 place-items-center sm:grid-cols-3 gap-5">
                    {/* PLAN BOX LOOP */}
                    {[
                        {
                            title: "Basic Plan",
                            price: "₹1500/Month",
                            list: ["2 devices login", "Free Consultation", "Access to community"],
                            icon: "https://img.icons8.com/?size=100&id=9806&format=png",
                        },
                        {
                            title: "Premium Plan",
                            price: "₹5500/Month",
                            list: ["5 devices login", "Free Consultation", "Access to minibar"],
                            icon: "https://img.icons8.com/?size=100&id=TMZaegazSPfK&format=png",
                        },
                        {
                            title: "Pro Plan",
                            price: "₹6500/Month",
                            list: ["Unlimited devices", "Private coaches", "Free merch"],
                            icon: "https://img.icons8.com/?size=100&id=9796&format=png",
                        },
                    ].map((plan) => (
                        <div className="sm:w-96 w-70 h-65 sm:h-[400px] rounded-xl sm:p-6 p-4 bg-linear-to-br from-purple-200 to-purple-100 hover:scale-105 hover:bg-linear-to-br hover:from-orange-200 hover:via-red-400 hover:to-red-500 transition">
                            <div className="flex items-center gap-4">
                                <img src={plan.icon} className="sm:h-12 h-8" />
                                <p className="sm:text-3xl text-xl font-bold">{plan.title}</p>
                            </div>

                            <p className="sm:text-3xl text-xl sm:mt-6 mt-3">{plan.price}</p>

                            <div className="sm:mt-6 mt-1 space-y-4">
                                {plan.list.map((l) => (
                                    <div className="flex gap-3 sm:text-lg text-sm">
                                        <img
                                            src="https://img.icons8.com/?size=100&id=82766&format=png"
                                            className="sm:h-6 h-4 mt-1"
                                        />
                                        <p>{l}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="sm:mt-6 mt-3 px-4 py-2 rounded-lg bg-transparent border border-black text-black hover:hover:text-white hover:bg-black transition">
                                Join now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CONTAINER 4 — TESTIMONIALS */}
            <div id="container4" className=" text-black py-20">
                <h1 className="text-center sm:text-5xl text-4xl font-extrabold bg-linear-to-t from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    Testimonials
                </h1>

                <div className="w-[80%] mx-auto mt-14 mb-24">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="flex flex-col items-center bg-white text-black rounded-xl p-10 h-100 sm:h-[500px]">
                                <img src={d.img} className="sm:h-40 sm:w-40 h-20 w-20 rounded-full mb-6" />
                                <p className="sm:text-2xl text-xl font-semibold mb-2">{d.name}</p>
                                <p className="sm:text-lg text-md h-50 sm:h-auto overflow-y-scroll sm:overflow-auto mb-6">{d.review}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* FOOTER EMAIL */}
                <div className="flex flex-col items-center text-center px-7 mt-20">
                    <div>
                        <h1 className="text-2xl sm:text-5xl font-extrabold italic text-white">READY TO LEVEL UP</h1>
                        <h1 className="text-3xl sm:text-5xl font-extrabold italic text-white">
                            YOUR BODY WITH US
                        </h1>
                    </div>

                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-72 sm:w-[450px] p-3 rounded-lg mt-6 border text-white font-semibold"
                    />
                </div>

                {/* SOCIAL */}
                <div className="flex justify-center gap-10 mt-16">
                    {[
                        ["https://www.instagram.com/marmikvyass", "https://img.icons8.com/?size=100&id=32323&format=png"],
                        ["https://github.com/marmikvyass", "https://img.icons8.com/?size=100&id=12599&format=png"],
                        ["https://www.linkedin.com", "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png"],
                        ["https://x.com", "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png"],
                    ].map(([link, icon]) => (
                        <a href={link} target="_blank">
                            <img src={icon} className="sm:h-12 sm:w-12 h-10 w-10" />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

const data = [
    {
        name: "Marmik Vyas",
        img: marmikImg,
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem minima aut similique fugit saepe officia nostrum molestias! Odio voluptatum id dolores delectus nihil blanditiis inventore autem tenetur est vel?. Fugiat tempore...",
    },
    {
        name: "Ghibli Bhai",
        img: ghibliImg,
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem minima aut similique fugit saepe officia nostrum molestias! Odio voluptatum id dolores delectus nihil blanditiis inventore autem tenetur est vel?. Fugiat tempore...",
    },
    {
        name: "Krish Brahambhatt",
        img: krishImg,
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem minima aut similique fugit saepe officia nostrum molestias! Odio voluptatum id dolores delectus nihil blanditiis inventore autem tenetur est vel?. Fugiat tempore...",
    },
];

export default Hero;
