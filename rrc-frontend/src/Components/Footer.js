import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <>
           <div className='flex flex-col bg-black flex-wrap px-4'>
                <div className='flex flex-cols justify-center align-center my-8 lg:gap-80'>
                    <div className='mx-10 justify-center align-center'><img src={require('../images/full logo (1) 2 (Traced).png')}></img></div>
                    <div className='mx-10 '><img src={require('../images/IITG_White 1.png')}></img></div>
                </div>
                <div className='mx-16 grid md:grid-cols-3 md:mx-16 gap-0 lg:ml-72 text-white justify-center'>
                    <div className='flex-cols'>
                        <div className='mb-4'>Contact Us</div>
                        <div className='mb-8'>
                            <Link to='/form1'><div>Register Now!</div></Link>
                            <div><a href='#'>Query</a></div>
                            <div><a href='#'>Sponsor Us</a></div>
                        </div>
                    </div>
                    <div className='flex-cols'>
                        <div className='mb-4'>Stay Connected</div>
                        <div className='mb-8'>
                            <div><a href='https://instagram.com/roboclubiitg?igshid=NTc4MTIwNjQ2YQ=='>Instagram</a></div>
                            <div><a href='https://www.linkedin.com/company/robotics-club-iitg/'>Linkedin</a></div>
                            <div><a href='https://www.youtube.com/@RCIITG'>Youtube</a></div>
                            <div><a href='https://discord.gg/ts4HDaPyMF'>Discord</a></div>
                            {/* <div><a href='#'>Facebook</a></div> */}

                        </div>
                    </div>
                    <div className='flex-cols'>
                        <div className='mb-4'>Meet the Team</div>
                        <div className='mb-8'>
                            <div><a href='#'>Events Team</a></div>
                            <div><a href='#'>Corporate Team</a></div>
                            <div><a href='#'>Creatives Team</a></div>
                            <div><a href='#'>Club Members</a></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center align-center lg:mx-60 my-8 text-white'>© {new Date().getFullYear()} Robotics Club.All Rights Reserved</div>
            </div>
        </>
    )
};



export default Footer;