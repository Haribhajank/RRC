import { Fragment, useState } from 'react';
import './index.css';

function Hero() {
    return (
        <>
            <div className='flex justify-center flex-wrap my-10'>
                <div className='lg:ml-40 mt-10  justify-center ml-20'>
                    <img className='h-3/4'  src={require('./images/Cloner Cube Binary 536x794 1.png')}></img>
                </div>
                <div className='lg:flex-1 lg:mr-20 lg:mt-20 justify-center align-center lg:ml-20 px-10'>
                    <img className='' src={require('./images/RECYCLOTRON ROBOTICS CHALLENGE.png')}></img>
                    <p className='mt-10 w-3/4'>Test your taste in technology by designing and making a robot from scrap, and push your limits to make something truly ground breaking.</p>
                    <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register Now!</button>
                </div>
            </div>
        </>
    )
};

export default Hero;