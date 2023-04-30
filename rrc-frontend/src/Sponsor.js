import { Fragment, useState } from 'react';
import './index.css';


function Sponsor() {
    return (
        <>
            <div className=''>
                <div>
                    <div className='flex justify-center align-center text-2xl font-black mb-10'>Sponsored By</div>
                    <div className='flex justify-center align-center mb-10 text-center'>(Maximum 25 points):<br></br>
                        The video simulation should be 10 minutes long.
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-8 lg:ml-20 mb-20'>
                    <div><img src={require('./images/Rectangle 8.png')}></img></div>
                    <div><img src={require('./images/Rectangle 8.png')}></img></div>
                    <div><img src={require('./images/Rectangle 8.png')}></img></div>
                    <div><img src={require('./images/Rectangle 8.png')}></img></div>
                </div>
            </div>
        </>
    )
};

export default Sponsor;