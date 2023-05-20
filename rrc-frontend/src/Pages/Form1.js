import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import Footer2 from '../Components/Footer2';
import { Link } from 'react-router-dom';

function Form1() {
    const [inputFields, setInputFields] = useState([
        { teamName: '', memberFname: '', memberLname: '', emailAddress: '', schoolName: '', standard: '' }
    ]);
    const [memberLimit, setMemberLimit] = useState(3);
    const handleFormChange = () => {
        // let data = [...inputFields];
        // data[index][event.target.teamName] = event.target.value;
        // data[index][event.target.memberFname] = event.target.value;
        // data[index][event.target.memberLname] = event.target.value;
        // data[index][event.target.emailAddress] = event.target.value;
        // data[index][event.target.schoolName] = event.target.value;
        // setInputFields(data);
    }
    const addFields = () => {
        if (memberLimit !== 0) {
            let newfield = { teamName: '', memberFname: '', memberLname: '', emailAddress: '', schoolName: '', standard: '' }

            setInputFields([...inputFields, newfield]);
            setMemberLimit(prev => {
                prev = prev - 1;
                return prev;
            })
        }
    }
    return (
        <>
            <Nav />
            <div className='flex mx-16 md:my-40 lg:my-40 px-auto py-36 justify-center align-center lg:text-6xl md:text-6xl text-4xl'>
                Registrations Starting Soon....
            </div>
            {/* Header */}
            {/* <div className='head lg:grid lg:grid-cols-2 flex justify-center lg:overflow-hidden flex-wrap '>
                <div className='my-10 ml-20'>
                    <div className='flex flex-wrap justify-center align-center text-4xl mt-20 pr-24 font-black'>TAKE PART IN THE CHALLENGE AND COMPETE WITH STUDENTS FROM OTHER SCHOOLS</div>
                    <div className='mt-5'>The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly. The design should be innovative and cost-effective and use readily available waste materials.</div>
                </div>
                <div className='lg:flex-1  mt-0 relative'>
                    <div className='lg:logo-form-page'>
                        <img className='max-w-s ' src={require('../images/Rectangle 7.png')}></img>
                    </div>
                </div>
            </div> */}


            {/* Form */}
            {/* <div className='my-10 py-10 '>
                <div className='lg:mx-72 mx-24 justify-center align-center'>
                    <form>
                        {inputFields.map((input, index) => {
                            return (
                                <div>
                                    <div>
                                        <label>Team Name</label><br></br>
                                        <input name='teamName' value={input.teamName} onChange={event => handleFormChange(index, event)} id="name" class='w-full border-b-2 border-0' type='text' required></input>
                                    </div>  <br></br>
                                    <div>
                                        <label>Member's First Name</label><br></br>
                                        <input name='memberFname' value={input.memberFname} onChange={event => handleFormChange(index, event)} type='text' className='w-full border-b-2 border-0' required></input>
                                    </div> <br></br>
                                    <div>
                                        <label>Member's Last Name</label><br></br>
                                        <input name='memberLname' value={input.memberLname} onChange={event => handleFormChange(index, event)} type='text' class='w-full border-b-2 border-0' required></input>
                                    </div><br></br>
                                    <div>
                                        <label>Email Address</label><br></br>
                                        <input name='emailAddress' value={input.emailAddress} onChange={event => handleFormChange(index, event)} type='text' class='w-full border-b-2 border-0' required></input>
                                    </div> <br></br>
                                    <div>
                                        <label>School Name</label><br></br>
                                        <input name='schoolName' value={input.schoolName} onChange={event => handleFormChange(index, event)} type='text' class='w-full border-b-2 border-0' required></input>
                                    </div> <br></br>
                                    <div>
                                        <label>Standard</label><br></br>
                                        <div class="items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">8th</label>
                                        </div>
                                        <div class="items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">9th</label>
                                        </div>
                                        <div class="items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">10th</label>
                                        </div>
                                        <div class="items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">11th</label>
                                        </div>
                                        <div class="items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">12th</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {!memberLimit ? null : <div className='mt-8'>
                            <button onClick={addFields} type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"> + Add Member </button>
                        </div>}
                    </form>
                    <div className='mt-6'>
                        <Link to="/form2"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Next </button></Link>
                    </div>
                </div>
            </div> */}
            <Footer2 />
        </>
    )
};


export default Form1;