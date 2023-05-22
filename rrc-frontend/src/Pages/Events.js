import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import Footer2 from '../Components/Footer2';


function Events () {
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
            <div className='text-4xl mb-5'>Events Team</div>
                <div className='flex flex-wrap justify-center align-center lg:gap-52 gap-10 md:gap-32 mb-10 mt-10'>
                <div>
                        <div className='f'>Events Head</div>
                        <div className='text-2xl f'>Arnav Pandita</div>
                        <div>Phone Number: 9643607760</div>
                        <div>Email: p.arnav@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='f'>Events Manager</div>
                        <div className='text-2xl f'>Akash Chowdhury </div>
                        <div>Phone Number: 8274950102</div>
                        <div>Email: akash.chowdhury@iitg.ac.in </div>
                    </div>
                    <div>
                        <div className='f'>Events Manager</div>
                        <div className='text-2xl f'>Himaanshi Singh  </div>
                        <div>Phone Number: 8302187678</div>
                        <div>Email: himaanshi@iitg.ac.in </div>
                    </div>
            </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Events ;