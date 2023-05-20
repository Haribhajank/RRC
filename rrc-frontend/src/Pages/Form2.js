import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import { indianStateDB } from '../assets/StateDB';
import Footer2 from '../Components/Footer2';import { Link } from 'react-router-dom';
 function Form2() {
    const [districts, setDistricts] = useState(indianStateDB.states[0].districts);
    const handleDistrict = (e) => {
        const selectedIndex = e.target.selectedIndex;
        setDistricts(indianStateDB.states[selectedIndex].districts);
    }
    return (
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
            {/* Form */}
            {/* <div className='my-10 py-10'>
                <div className='lg:mx-72 mx-24 justify-center align-center'>
                    <form >
                        <label><span className='text-red-600'>*</span>State </label><br />
                        <select className='my-4 w-80 ' name="State" onChange={handleDistrict} >
                            {indianStateDB.states.map((state) => {
                                return <option value={state.state}>{state.state}</option>
                            })}
                        </select>
                        <br></br>
                        <label><span className='text-red-600'>*</span>City/town </label><br />
                        <select className='my-4 w-80 ' name="State" >
                            {districts.map((district) => {
                                return <option value={district}>{district}</option>
                            })}
                        </select>
                        <br></br>
                        <div>
                            <label>Pincode</label><br></br>
                            <input name='teamName' class='w-full border-b-2 border-0' type='text'></input>
                        </div>  <br></br>
                    </form>
                    <div className='mt-6'>
                        <Link to="/form3"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Next </button></Link>
                    </div>
                </div>
            </div> */}
            <Footer2 />
        </>
    )
}

export default Form2;