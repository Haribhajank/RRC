import { Fragment, useState } from 'react';
import './index.css';

function Challenges() {
    return (
        <>
            <div className='lg:grid mx-0 lg:gap-20 justify-center align-center h-auto lg:h-screen flex-wrap lg:grid-cols-2'>
                <div className='lg:my-60 mx-20'>
                    <div className='mt-16 text-6xl font-black f pb-5'>
                        Several Key Challenges
                    </div>
                    <div className='mt-5'>
                        The robot your will be making must be addressing these challenges.
                        Keeping these factor in mind, lets have a close look into them.The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly.
                    </div>
                </div>
                <div className='bg-black text-white '>
                    <div className='lg:mt-72 mx-24 text-2xl font-black'>Material Selection:</div>
                    <div className='mt-5 mx-24'>IIT Guwahati students will be judging your projects. There are a lot of prizes and exciting things        to wins from this competition, so give your best to win this</div>
                </div>
            </div>
        </>
    )
};

export default Challenges;