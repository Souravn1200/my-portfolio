import { useState } from 'react';
import "./Home.css"
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { saveAs } from 'file-saver';
import myCv from '../../public/SouravDuttaCV.txt'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


import tech1 from "../assets/tech/tech1.png"
import tech2 from "../assets/tech/tech2.png"
import tech3 from "../assets/tech/tech3.png"
import tech4 from "../assets/tech/tech4.png"
import tech5 from "../assets/tech/tech5.png"
import tech6 from "../assets/tech/tech6.png"
import tech7 from "../assets/tech/tech7.png"

import pen1 from "../assets/peninsula/pen1.png"
import pen2 from "../assets/peninsula/pen2.png"
import pen3 from "../assets/peninsula/pen3.png"
import pen4 from "../assets/peninsula/pen4.png"

import event1 from "../assets/event/event1.png"
import event2 from "../assets/event/event2.png"
import event3 from "../assets/event/event3.png"
import event4 from "../assets/event/event4.png"
import event6 from "../assets/event/event6.png"
import event5 from "../assets/event/event5.png"

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleCvDownload = () => {
        saveAs(myCv, 'SouravDuttaCV.txt')
    }

    return (
        <div>



            {/* Navbar starts */}

            <nav className="bg-[#ffffff] p-4 fixed w-full top-0 z-50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">


                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-14 rounded">
                                    <img className='' src="https://i.ibb.co/2vKwp5t/356209715-117516454709683-8495291898662524202-n-removebg-preview.png" />
                                </div>

                            </div>

                            <div className=' hidden lg:block ml-4 gfont text-lg hover:text-[#7843e9]'>
                                <h2 className='space-x-4'>SOURAV  DUTTA</h2>

                            </div>

                        </div>



                    </div>
                    <div className="block lg:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="flex items-center  px-3 py-2 border rounded text-black-200 border-gray-400 hover:text-[#7843e9] hover:border-[#7843e9]"
                        >
                            <svg
                                className="h-3 w-3 fill-current"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 5h12a1 1 0 110 2H4a1 1 0 110-2zm0 5h12a1 1 0 110 2H4a1 1 0 110-2zm0 5h12a1 1 0 110 2H4a1 1 0 110-2z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 3a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } lg:flex lg:items-center lg:w-auto`}
                    >
                        <div className="gfont text-lg lg:flex-grow">
                            <a
                                href="#home"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#7843e9] mr-7"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#7843e9] mr-7"
                            >
                                About
                            </a>
                            <a
                                href="#services"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#7843e9] mr-7"
                            >
                                Services
                            </a>
                            <a
                                href="#contact"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#7843e9]"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Navbar ends */}





            {/* Hero section starts */}
            <div className='bg-[#f0f0f0] lg:mt-[85px] h-[90vh]'>

                <div>

                    <div className='pt-36'>
                        <div className='mx-auto w-[100%] text-center'>
                            <h2 className='gfont font-bold text-2xl lg:text-6xl tracking-widest text-[#111] mb-5'> HEY, I'M SOURAV DUTTA</h2>
                            <p className='gfont font-medium text-base lg:text-2xl tracking-normal text-[#111]'> A Frontend Web Developer, Building the Frontend of Websites.</p>
                            <div className='flex gap-8 justify-center items-center mt-10'>
                                <a href="" className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn'> Projects </a>
                                <a onClick={handleCvDownload} href="" className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn flex items-center gap-2'> <FaDownload className='' /> My CV </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            {/* Hero section ends */}



            {/* About section starts */}

            <div className=' bg-[#f2f2f2] pb-20 '>

                <div className='mx-auto w-[100%] text-center lg:pb-10'>

                    <h2 className='gfont font-bold text-xl lg:text-4xl'>ABOUT ME</h2>
                    <span className=''></span>
                    <hr className="border-t-4 border-[#7843e9] w-[4%] lg:w-[2%] mx-auto rounded-md mt-2 mb-4"></hr>

                    <p className='gfont text-sm lg:text-xl lg:w-[70%] mx-auto px-4'>Here's more information about me, what I do, and about my skills of programming and technology</p>

                </div>

                <div className='mt-10 lg:grid grid-cols-2 items-center gap-28 lg:max-w-screen-xl mx-auto lg:px-10'>
                    <div>
                        <h2 className='gfont pl-4 text-xl font-extrabold lg:text-2xl '>Get to know me!</h2>
                        <p className='gfont p-2 mt-8 pl-4 text-sm lg:text-base font-medium font-serif'> I am A Frontend Web Developer, Building the Frontend of Websites. Check out some of my work in the Projects section.</p>
                        <p className='gfont p-2 mt-4 pl-4 text-sm lg:text-base  font-medium font-serif'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/souravn1200/" target='blank' className='text-[#7843e9] underline font-thin'>Linkedin</a> where I post useful content related to Web Development and Programming</p>
                        <p className='gfont p-2 mt-4 pl-4 text-sm lg:text-base  font-medium font-serif'>
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </p>

                        <div className='flex gap-8 justify-center items-center mt-10'>
                            <a href="mailto:souravn1200@gmail.com" className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn'> Contact Me </a>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2 className='gfont mt-10 lg:-mt-24 pl-4 text-xl font-extrabold  lg:text-2xl'>My Skills</h2>
                        </div>
                        <div className='grid grid-cols-3 mt-5 gap-5 p-5'>
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#f16729'
                            >
                                <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
                            </svg>



                            <svg
                                viewBox="0 0 384 512"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#2161af'

                            >
                                <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />

                            </svg>

                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#000'

                            >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                            </svg>

                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#38bdf8'
                            >
                                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
                            </svg>


                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#efda4d'

                            >
                                <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
                            </svg>

                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#89ebf2'
                            >
                                <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                            </svg>

                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#4b4b4b'

                            >
                                <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                            </svg>

                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#148f4c'

                            >
                                <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481a28.48 28.48 0 01.51-3.07c.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                            </svg>

                            <svg
                                viewBox="0 0 640 512"
                                fill="currentColor"
                                height="5em"
                                width="5em"
                                color='#7fba01'

                            >
                                <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z" />
                            </svg>


                        </div>
                    </div>
                </div>

            </div>


            {/* about section ends */}



            {/* Project section stats */}

            <div className='bg-[#f4f4f4] pb-20 '>
                <div className='mx-auto w-[100%] text-center lg:pb-10'>

                    <h2 className='gfont font-bold text-xl lg:text-4xl'>PROJECTS</h2>
                    <span className=''></span>
                    <hr className="border-t-4 border-[#7843e9] w-[4%] lg:w-[2%] mx-auto rounded-md mt-2 mb-4"></hr>

                    <p className='gfont text-sm lg:text-xl lg:w-[70%] mx-auto px-4'>Here's some personal projects that i've done in recent time. Github Code and Live Demo is open for everyone.</p>

                </div>

                <div className='lg:flex items- justify-center gap-10 mt-10 lg:max-w-screen-xl mx-auto px-10'>

                    <div className='flex-1'>
                        {
                            <Carousel autoPlay="true" className='lg:w-[640px]'>
                                <div>
                                    <img src={tech1} />

                                </div>
                                <div>
                                    <img src={tech2} />

                                </div>
                                <div>
                                    <img src={tech3} />

                                </div>
                                <div>
                                    <img src={tech5} />

                                </div>
                                <div>
                                    <img src={tech4} />

                                </div>
                                <div>
                                    <img src={tech6} />

                                </div>
                                <div>
                                    <img src={tech7} />

                                </div>
                            </Carousel>
                        }
                    </div>

                    <div className='flex-1'>
                        <h2 className='gfont font-bold text-xl lg:text-4xl'>TECH HUB</h2>
                        <span className=''></span>
                        <hr className="border-t-4 border-[#7843e9] w-[31%] lg:w-[32%]  rounded-md mb-4"></hr>

                        <div>
                            <p className='gfont text-base'>
                                Tech Hub, a thriving open-source product empowering innovation and collaboration among tech enthusiasts. <strong>MongoDB</strong> as database, Firebase <strong>Authentication</strong>, <strong>Payment Gateway</strong> and many more funionality.
                            </p>

                            <h2 className='hidden lg:block text-xl font-bold mt-6'>Based On:</h2>
                            <div className='hidden lg:flex items-center gap-2 mt-2'>

                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>HTML5</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>CSS3</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>React</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>ExpressJs</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>NodeJS</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>MongDB</strong>

                            </div>

                            <div>
                                <div className='flex gap-8 justify-center items-center mt-10'>
                                    <a href="https://github.com/Souravn1200/Tech-hub" target='blank' className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn'> Github </a>
                                    <a href="https://techhub-13f97.web.app/" target='blank' className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn flex items-center gap-2'>  Live Demo </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='lg:flex flex-row-reverse justify-center gap-10 mt-20 lg:max-w-screen-xl mx-auto px-10'>

                    <div className='flex-1'>
                        {
                            <Carousel autoPlay="true" className='lg:w-[640px]'>
                                <div>
                                    <img src={pen1} />

                                </div>
                                <div>
                                    <img src={pen2} />

                                </div>
                                <div>
                                    <img src={pen3} />

                                </div>
                                <div>
                                    <img src={pen4} />

                                </div>

                            </Carousel>
                        }
                    </div>

                    <div className='flex-1'>
                        <h2 className='gfont font-bold text-xl lg:text-4xl'>PENINSULA</h2>
                        <span className=''></span>
                        <hr className="border-t-4 border-[#7843e9] w-[36%] lg:w-[36%]  rounded-md mb-4"></hr>

                        <div>
                            <p className='gfont text-base'>
                                PENINSULA, a thriving open-source  hotel management product empowering web app. General <strong>JWT</strong> focoused website as well as <strong>Authentication</strong> and <strong>Dinamic Activites</strong>.
                            </p>

                            <h2 className='hidden lg:block text-xl font-bold mt-6'>Based On:</h2>
                            <div className='hidden lg:flex items-center gap-2 mt-2'>

                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>HTML5</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>CSS3</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>React</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>ExpressJs</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>NodeJS</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>MongDB</strong>

                            </div>

                            <div>
                                <div className='flex gap-8 justify-center items-center mt-10'>
                                    <a href="https://github.com/Souravn1200/Hotel-Peninsula" target='blank' className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn'> Github </a>
                                    <a href="https://peninsula-95bda.web.app/" target='blank' className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn flex items-center gap-2'>  Live Demo </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='lg:flex justify-center gap-10 mt-20 lg:max-w-screen-xl mx-auto px-10'>

                    <div className='flex-1'>
                        {
                            <Carousel autoPlay="true" className='lg:w-[640px]'>
                                <div>
                                    <img src={event1} />

                                </div>
                                <div>
                                    <img src={event2} />

                                </div>
                                <div>
                                    <img src={event3} />

                                </div>
                                <div>
                                    <img src={event4} />

                                </div>
                                <div>
                                    <img src={event5} />

                                </div>
                                <div>
                                    <img src={event6} />

                                </div>

                            </Carousel>
                        }
                    </div>

                    <div className='flex-1'>
                        <h2 className='gfont font-bold text-xl lg:text-4xl'>EVENTO</h2>
                        <span className=''></span>
                        <hr className="border-t-4 border-[#7843e9] w-[24%] lg:w-[24%]  rounded-md mb-4"></hr>

                        <div>
                            <p className='gfont text-base'>
                                EVENTO, a Semi-pro open-source  event management product empowering web app. General <strong>Registration</strong> <strong>Login</strong> focoused website as well as <strong>Authentication</strong>.
                            </p>

                            <h2 className='hidden lg:block text-xl font-bold mt-6'>Based On:</h2>
                            <div className='hidden lg:flex items-center gap-2 mt-2'>

                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>HTML5</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>CSS3</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>React</strong>
                                <strong className='px-3 py-2 bg-[#39304e] rounded text-white font-thin text-sm mr-2'>NodeJS</strong>


                            </div>

                            <div>
                                <div className='flex gap-8 justify-center items-center mt-10'>
                                    <a href="https://github.com/Souravn1200/Evento-Management" target='blank' className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn'> Github </a>
                                    <a href="https://evento-d3900.web.app/" target='blank' className='my-btn-phone-bg my-btn-phone my-btn-bg my-btn flex items-center gap-2'>  Live Demo </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


            {/* Project section ends */}




            {/* personal info starts */}

            <div className='bg-[#f6f6f6] pb-20 '>
                <div className='mx-auto w-[100%] text-center lg:pb-10'>

                    <h2 className='gfont font-bold text-xl lg:text-4xl'>PERSONAL INFORMATION</h2>
                    <span className=''></span>
                    <hr className="border-t-4 border-[#7843e9] w-[4%] lg:w-[2%] mx-auto rounded-md mt-2 mb-4"></hr>

                    <p className='gfont text-sm lg:text-xl lg:w-[70%] mx-auto px-4'>Here's some personal information that you might want to know.</p>

                </div>

                <div className='max-w-4xl mx-auto text-justify bg-[#ffffff] p-8'>
                    <p className='font-serif  lg:text-lg'>Hey there, I'm Sourav Dutta—a dedicated management student currently pursuing my master's degree after completing my honors. While I navigate the world of academia, my heart beats for football. As an avid Liverpool Football Club supporter, you'll often find me cheering passionately for my team.
                        <br /><br />
                        Beyond the field, my aspirations lie in tech. Over the next two years, I'm on a mission to become a proficient full-stack professional, aiming to excel in my field and make significant strides in my career. Passion, dedication, and the pursuit of knowledge drive me forward on this exciting journey.
                        <br /> <br />
                        Join me as I blend my academic pursuits, football fervor, and tech ambitions into a compelling story of growth and success.</p>


                        <div className='flex items-center justify-center gap-4 mt-5'>

                        <AwesomeButton type='secondary'> <a href="https://www.facebook.com/souravn1200" target='blank'>Facebook</a> </AwesomeButton>
                    
                        <AwesomeButton type="secondary"><a href="https://github.com/Souravn1200" target='blank'>Git Hub</a></AwesomeButton>

                        <AwesomeButton type="secondary"> <a href="https://www.linkedin.com/in/souravn1200/" target='blank'>Linked In</a></AwesomeButton>
                            
                        
                        </div>
                </div>
            </div>

            {/* personal info ends */}
            <div>

            </div>

        </div>
    );
};
export default Home;