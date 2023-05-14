import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import Footer2 from '../Components/Footer2';


function Contact () {
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
            <div className=' lg:mx-40 mx-24 justify-center align-center my-10  py-10 z-10'>
                <div className='text-4xl mb-5'>Events team</div>
                <div className='flex flex-wrap justify-center align-center lg:gap-52 gap-10 md:gap-32 mb-10 mt-10'>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                </div>
                <div className='text-4xl mb-5'>Admins</div>
                <div className='flex flex-wrap justify-center align-center lg:gap-52 gap-10 md:gap-32 mb-10 mt-10'>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                </div>
                <div className='text-4xl mb-5'>Corporate</div>
                <div className='flex flex-wrap justify-center align-center lg:gap-52 gap-10 md:gap-32 mb-10 mt-10'>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                    <div>
                        <div className='text-2xl'>Name Surname</div>
                        <div>Phone Number: 123456789</div>
                        <div>Email sexysnailsuki@gmail.com</div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Contact;