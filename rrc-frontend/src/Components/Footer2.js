import { Fragment, useState } from 'react';
import '../index.css';

function Footer2 () {
    return (
        <>
        <div className='flex flex-col bg-black flex-wrap px-4 '>
            <div className='flex flex-col flex-wrap justify-center align-center lg:grid lg:grid-cols-2 text-white'>
                <div className='flex justify-center align-center lg:ml-60 mx-10 mt-10'>
                    <div className=''><img src={require('../images/full logo (1) 2 (Traced).png')}></img></div>  
                </div>
                <div className='flex justify-center align-center lg:ml-64 mx-10 mt-24 gap-10' >
                    <div><a href='#'>Instagram</a></div>
                    <div><a href='#'>Linkedin</a></div>
                    <div><a href='#'>Facebook</a></div>
                    <div><a href='#'>Discord</a></div>
                </div>
            </div>
            <div className='flex justify-center align-center lg:mx-60 my-8 text-white'>
                    ©2023 Robotics Club.All Rights Reserved 
            </div>
        </div>

        </>
    )
};


export default Footer2 ;