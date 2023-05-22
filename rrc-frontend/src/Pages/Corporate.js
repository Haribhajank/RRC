import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import Footer2 from '../Components/Footer2';


function Corporate () {
    return(
        <>
            <Nav />
            <div className='head lg:grid lg:grid-cols-2 flex justify-center flex-wrap overflow-hidden md:py-16'>
                <div className='my-10 ml-20 '>
                    <div className='flex flex-wrap  align-center text-6xl mt-20 pr-24 font-black '>CONTACT US</div>
                    <div className='mt-5'>For any issues and quarries, contact us</div> 
                </div>
                <div className='lg:flex-1  mt-0 relative'>
                    <div className='logo-contact-page'>
                    <img className='max-w-s ' src={require('../images/RRC logo 2 (1).png')}></img>
                    </div>
                </div>
            </div>
            <div className=' lg:mx-40 mx-auto px-10 justify-center align-center my-10  py-10 z-10'>
            <div className='text-4xl mb-5'>Corporate Team</div>
                <div className='flex flex-wrap justify-center align-center gap-16 mb-10 mt-10'>
                    <div>
                        <div className='text-2xl'>Dhruva Kuthari</div>
                        <div>Phone Number: 8999644302</div>
                        <div>Email : k.dhruva@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Bhawana</div>
                        <div>Phone Number: 8851258602</div>
                        <div>Email : bhawana.mech22@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Chandan</div>
                        <div>Phone Number: 9142413091</div>
                        <div>Email : chandan.kmr@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Ambuj Mishra</div>
                        <div>Phone Number: 9773971295</div>
                        <div>Email : m.ambuj@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Sarvagna Grandhi</div>
                        <div>Phone Number: 9492874964 </div>
                        <div>Email : g.sarvagna@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Amit patel</div>
                        <div>Phone Number: 9179148110 </div>
                        <div>Email : p.amit@iitg.ac.in</div>
                    </div>
            </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Corporate;