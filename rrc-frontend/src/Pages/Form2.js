import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import Footer2 from '../Components/Footer2';


function Form2 () {
    return(
        <>
        <Nav />
        {/* Header */}
        <div className='head lg:grid lg:grid-cols-2 flex justify-center flex-wrap '>
            <div className='my-10 ml-20'>
                <div className='flex flex-wrap justify-center align-center text-4xl mt-20 pr-24 font-black'>TAKE PART IN THE CHALLENGE AND COMPETE WITH STUDENTS FROM OTHER SCHOOLS</div>
                <div className='mt-5'>The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly. The design should be innovative and cost-effective and use readily available waste materials.</div> 
            </div>
            <div className='lg:flex-1 lg:ml-20 px-10 mt-0'>
                <div>
                {/* <img className='max-w-xs mr-0' src={require('../images/Rectangle 110.png')}></img> */}
                </div>
            </div>
        </div>
        <Footer2 />
        </>
    )
}

export default Form2;