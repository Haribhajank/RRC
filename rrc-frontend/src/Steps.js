import { Fragment, useState } from 'react';
import './index.css';

function Steps() {
    return (
        <>
            <div className='flex flex-col mt-20 p-20'>
                <div className='flex flex-wrap flex-row'>
                    <div className='flex flex-wrap flex-col ml-60'>
                        <div className='flex justify-left flex-wrap flex-col mb-10 text-2xl font-black'><h1>1. Understand the Problem</h1></div>
                        <div className='justify-left flex-wrap flex-col w-96'>The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly. The design should be innovative and cost-effective and use readily available waste materials.</div>
                    </div>
                    <div className='flex justify-right flex-wrap ml-32'><img src={require('./images/Rectangle 7.png')}></img></div>
                </div>
                <div className='flex flex-1 flex-wrap flex-row mt-5'>
                    <div className='flex flex-wrap ml-60'><img src={require('./images/Rectangle 7.png')}></img></div>
                    <div className='flex flex-wrap flex-col ml-20'>
                        <div className='flex justify-right  flex-wrap flex-col mb-10 text-2xl font-black'><h1>2. Look out for usefull scrap</h1></div>
                        <div className='flex justify-right flex-wrap flex-col w-96'>In order to make the robot you want, you need to list down the thing your need and starts looking for it around your house. You can buy things like batteries and motors from stores</div>
                    </div>
                </div>
                <div className='flex flex-wrap flex-row mt-5'>
                    <div className='flex flex-wrap flex-col ml-60'>
                        <div className='flex justify-left flex-wrap flex-col mb-10 text-2xl font-black'><h1>3. Build it up !!</h1></div>
                        <div className='justify-left flex-wrap flex-col w-96'>Start thinking on how you will be making the robot with the scraps and useful items you found. A proper working robot model would be your target</div>
                    </div>
                    <div className='flex justify-right flex-wrap ml-32'><img src={require('./images/Rectangle 7.png')}></img></div>
                </div>
                <div className='flex flex-1 flex-wrap flex-row mt-5'>
                    <div className='flex flex-wrap ml-60'><img src={require('./images/Rectangle 7.png')}></img></div>
                    <div className='flex flex-wrap flex-col ml-20'>
                        <div className='flex justify-right  flex-wrap flex-col mb-10 text-2xl font-black'><h1>4. Submit and win prizes</h1></div>
                        <div className='flex justify-right flex-wrap flex-col w-96'>IIT Guwahati students will be judging your projects. There are a lot of prizes and exciting things to wins from this competition, so give your best to win this</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Steps;