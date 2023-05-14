import React from 'react';
import ReactDOM from 'react-dom/client';



function Footer() {
    return (
        <>
           <div className='flex flex-col bg-black flex-wrap px-4'>
                <div className='grid grid-cols-2  lg:ml-72 my-8'>
                    <div className=''><img src={require('../images/full logo (1) 2 (Traced).png')}></img></div>
                    <div className='mx-10 lg:ml-44'><img src={require('../images/IITG_White 1.png')}></img></div>
                </div>
                <div className='grid md:grid-cols-3 gap-0 lg:ml-72 text-white justify-center'>
                    <div className='flex-cols'>
                        <div className='mb-10'>Contact Us</div>
                        <div>
                            <div><a href='#'>Register Now!</a></div>
                            <div><a href='#'>Query</a></div>
                            <div><a href='#'>Sponsor Us</a></div>
                        </div>
                    </div>
                    <div className='flex-cols'>
                        <div className='mb-10'>Stay Connected</div>
                        <div>
                            <div><a href='#'>Instagram</a></div>
                            <div><a href='#'>Linkedin</a></div>
                            <div><a href='#'>Facebook</a></div>
                            <div><a href='#'>Discord</a></div>
                            <div><a href='#'>Youtube</a></div>
                        </div>
                    </div>
                    <div className='flex-cols'>
                        <div className='mb-10'>Meet the Team</div>
                        <div>
                            <div><a href='#'>Events Team</a></div>
                            <div><a href='#'>Corporate Team</a></div>
                            <div><a href='#'>Creatives Team</a></div>
                            <div><a href='#'>Club Members</a></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center align-center lg:mx-60 my-8 text-white'>©2023 Robotics Club.All Rights Reserved</div>
            </div>
        </>
    )
};



export default Footer;