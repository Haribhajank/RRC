import { Fragment, useState } from 'react';
import '../index.css';

function Footer2 () {
    return (
        <>
        <div className='flex flex-col bg-black flex-wrap px-4'>
            <div className='flex flex-col flex-wrap justify-center align-center lg:grid lg:grid-cols-2 text-white'>
                <div className='flex flex-wrap justify-center align-center lg:ml-60 mx-10 mt-10'>
                    <div className=''><img src={require('../images/full logo (1) 2 (Traced).png')}></img></div>  
                </div>
                <div className='flex flex-wrap justify-center align-center lg:ml-64 mx-10 mt-16 gap-10' >
                    <div><a href='https://www.youtube.com/@RCIITG'>Instagram</a></div>
                    <div><a href='https://www.youtube.com/@RCIITG'>Linkedin</a></div>
                    <div><a href='https://www.youtube.com/@RCIITG'>Youtube</a></div>
                    <div><a href='https://discord.gg/DC4fX5fu'>Discord</a></div>
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