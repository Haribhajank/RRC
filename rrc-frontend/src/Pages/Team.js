import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import Footer2 from '../Components/Footer2';
import { Link } from 'react-router-dom';


function Team () {
    return(
        <>
            <Nav />
            <div>
                <div className='head-team  lg:grid lg:grid-cols-2 flex justify-center flex-wrap '>
                    <div className='my-10 ml-20'>
                        <div className='flex flex-wrap  align-center text-6xl mt-20 pr-24 font-black'>WHO ARE WE ?</div>
                        <div className='mt-5'>We are students in IIT Guwahati, and part of the robotics club. As the members of the robotics club, we work upon various projects and competitions, RRC is an event we thought of conducting</div> 
                    </div>
                    <div className='lg:flex-1  mt-0 lg:ml-72'>
                        <div>
                        <img className='my-10 max-w-xs' src={require('../images/only  logo (1) 2 (Traced).png')}></img>
                        </div>
                    </div>
                </div>
                <div className='lg:mx-40 mx-24 justify-center align-center my-10 py-10'>
                    <div>
                        <div className='mb-5 text-4xl'>Robotics Enthusiasts</div>
                        <div>Welcome to the Robotics Club at IITG !
                                We are a dynamic group of students passionate about robotics and its limitless possibilities. Our primary focus lies in designing and constructing cutting-edge industrial robots that push the boundaries of innovation. With a strong emphasis on learning, application, and innovation, we strive to bridge the gap between theory and practice. Our club members actively participate in national and international competitions, where we showcase our expertise and compete with the best in the field. Join us to embark on an exciting journey of creativity, collaboration, and groundbreaking technological advancements in the world of robotics.
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div>
                            <div className='text-4xl mb-5'>Wanna know more</div>
                            <div className='mb-5'>Follow us in the social medias and reach out to us!!</div>
                            <div className='flex flex-wrap gap-3 align-center  mb-10 mt-10'>
                            <Link to=''><img className='max-w-xs w-10 h-10' src={require('../images/instagram.png')}></img></Link>
                            <Link to=''><img className='max-w-xs w-10 h-10' src={require('../images/facebook.png')}></img></Link>
                            <Link to=''><img className='max-w-xs w-10 h-10' src={require('../images/linkedin.png')}></img></Link>
                            <Link to=''><img className='max-w-xs w-10 h-10' src={require('../images/youtube.png')}></img></Link>
                            <Link to=''><img className='max-w-xs w-10 h-10' src={require('../images/discord.png')}></img></Link>
                            </div>
                        </div>
                        <div>
                            <div>WE ARE THE FUTURE</div>
                            <div>Robotics Club IIT Guwahati</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Team;