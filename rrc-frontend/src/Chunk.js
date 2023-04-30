import { Fragment, useState } from 'react';
import './index.css';


function Chunk() {
    return (
        <>
            <div className='flex flex-wrap flex-col justify-center align-center lg:px-60 '>
                <div className='m-auto'>
                    <div className='flex flex-wrap justify-center align-center text-4xl font-black mb-10 f'>What is it?</div>
                    <div className='flex flex-wrap justify-center align-center px-40 text-center'>This event is Robotic Club's first pan India initiative and is expected to attract large crowd of tech savvy minds.The challenge is to design and build a robot that can perform any task while minimizing the environmental impact involved in its designing.</div>
                </div>
            </div>
        </>
    )
};



export default Chunk;