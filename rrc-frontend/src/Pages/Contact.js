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
            <div className=' lg:mx-40 mx-auto px-10 justify-center align-center my-10  py-10 z-10'>
                {/* <div className='text-4xl mb-5'>Events team</div>
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
                </div> */}
                <div className='text-4xl mb-5'>Admins</div>
                <div className='flex flex-wrap justify-center align-center gap-16 my-20'>
                    <div>
                        <div className='f'>Secretary</div>
                        <div className='text-2xl f'>Ayush Mothiya</div>
                        <div>Phone Number: 9560571410</div>
                        <div>Email : a.mothiya@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='f'>Overall Co-ordinator</div>
                        <div className='text-2xl f'>Rohak Jain</div>
                        <div>Phone Number: 8285940695</div>
                        <div>Email : j.rohak@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='f'>Corporate and Outreach Head</div>
                        <div className='text-2xl f'>Dhruv Agarwal</div>
                        <div>Phone Number: 8619050846</div>
                        <div>Email: a.dhruv@iitg.ac.in</div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center align-center gap-16 my-28'>
                    <div>
                        <div className='f'>Team Manager, Yuvaan</div>
                        <div className='text-2xl f'>Aditya Paul </div>
                        <div>Phone Number: 9167956235</div>
                        <div>Email: aditya.paul@iitg.ac.in </div>
                    </div>
                    <div>
                        <div className='f'>Creative/Content Head</div>
                        <div className='text-2xl f'>Bedanta Mandal</div>
                        <div>Phone Number: 9674188296</div>
                        <div>Email: bedanta.mandal@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='f'>Inventory head</div>
                        <div className='text-2xl f'>Anurag Patil</div>
                        <div>Phone Number: 7989449213</div>
                        <div>Email: anurag.patil@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='f'>Competitions Head</div>
                        <div className='text-2xl f'>Pratima Tomar</div>
                        <div>Phone Number:9870648474</div>
                        <div>Email: p.tomar16@iitg.ac.in</div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center align-center gap-16 my-28'>
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
                <div className='flex flex-wrap justify-center align-center gap-16 my-28'>
                    <div>
                        <div className='f'>Project manager</div>
                        <div className='text-2xl f'>Sohil Monpara</div>
                        <div>Phone Number:7977362592</div>
                        <div>Email: m.sohil@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='f'>Project manager</div>
                        <div className='text-2xl f'>Akshit Shishodia</div>
                        <div>Phone Number:9289380257</div>
                        <div>Email: s.akshit@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='f'>Project manager</div>
                        <div className='text-2xl f'>Anuraj Bhaskar </div>
                        <div>Phone Number:9905739309</div>
                        <div>Email: b.anuraj@iitg.ac.in</div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center align-center gap-16 my-28'>
                    <div>
                        <div className='f'>Web-Dev Head</div>
                        <div className='text-2xl f'>Raunit</div>
                        <div>Phone Number:7542896549</div>
                        <div>Email: s.raunit@iitg.ac.in</div>
                    </div>
                    <div>
                        <div className='f'>Web-Dev Head</div>
                        <div className='text-2xl f'>Haribhajan</div>
                        <div>Phone Number:7985017028</div>
                        <div>Email: k.haribhajan@iitg.ac.in</div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Contact;