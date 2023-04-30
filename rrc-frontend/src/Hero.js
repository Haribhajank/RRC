import { Fragment, useState } from 'react';
import './index.css';

function Hero() {
    return (
        <>
            <div className='flex justify-center flex-wrap'>
                <div className='ml-40 mt-10  justify-center'>
                    <img className='h-3/4'  src={require('./images/Cloner Cube Binary 536x794 1.png')}></img>
                </div>
                <div className='flex-1 mr-20 mt-20 justify-center'>
                    <img src={require('./images/RECYCLOTRON ROBOTICS CHALLENGE.png')}></img>
                    <p className='mt-10 w-3/4'>Test your taste in technology by designing and making a robot from scrap, and push your limits to make something truly ground breaking.</p>
                    <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register Now!</button>
                </div>
            </div>
        </>
    )
};

export default Hero;