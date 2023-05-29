import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import { v4 as uuid } from "uuid";
import Footer2 from '../Components/Footer2';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Form1() {
    let navigate=useNavigate();
    let islogin=false;
    const [inputFields, setInputFields] = useState([
        { teamName: '', memberFname: '', emailAddress: '', schoolName: '', standard: '' ,phoneNumber:''}
    ]);
    const [memberLimit, setMemberLimit] = useState(3);
    const handleFormChange = (index,e) => {
        const { name, value } = e.target;
    const list = [...inputFields];
    list[index][name] = value;
    console.log("hii");
    setInputFields(list);
        
    }
    const handleClassSelect = (index,e) => {
        const { id, value } = e.target;
    const list = [...inputFields];
    list[index][id] = value;
    
    setInputFields(list);
    console.log(...inputFields);
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
    
    
        console.log(inputFields[0].class);
        islogin=true;
        var usernames=[];
        var emails=[];
        var classes=[];
        var schoolnames=[];
        var PhoneNumbers=[];
        inputFields.map(async (x, i) => {
            usernames[i]=inputFields[i].memberFname;
            emails[i]=inputFields[i].emailAddress;
            classes[i]=inputFields[i].standard;
            schoolnames[i]=inputFields[i].schoolName;
            PhoneNumbers[i]=inputFields[i].phoneNumber;
      })
      localStorage.setItem("Username", JSON.stringify(usernames));
      localStorage.setItem("Email", JSON.stringify(emails));
      localStorage.setItem("Class", JSON.stringify(classes));
      localStorage.setItem("School", JSON.stringify(schoolnames));
      localStorage.setItem("PhoneNumber", JSON.stringify(PhoneNumbers));
      localStorage.setItem("TeamName",inputFields[0].teamName);

      navigate('/form2');
        
       
       
            
            
        
        
    
           
             
      };

    const addFields = () => {
        if (memberLimit !== 0) {
            let newfield = { teamName: '', memberFname: '', emailAddress: '', schoolName: '', standard: '' ,phoneNumber:''}

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
            {/* <div className='flex mx-16 md:my-40 lg:my-40 px-auto py-36 justify-center align-center lg:text-6xl md:text-6xl text-4xl'>
                Registrations Starting Soon....
            </div> */}
            {/* Header */}
            <div className='head lg:grid lg:grid-cols-2 flex justify-center lg:overflow-hidden flex-wrap '>
                <div className='my-10 ml-20'>
                    <div className='flex flex-wrap justify-center align-center text-4xl mt-20 pr-24 font-black'>TAKE PART IN THE CHALLENGE AND COMPETE WITH STUDENTS FROM OTHER SCHOOLS</div>
                    <div className='mt-5'>The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly. The design should be innovative and cost-effective and use readily available waste materials.</div>
                </div>
                <div className='lg:flex-1  mt-0 relative'>
                    <div className='lg:logo-form-page'>
                        <img className='max-w-s ' src={require('../images/Rectangle 7.png')}></img>
                    </div>
                </div>
            </div> 


            {/* Form */}
             <div className='my-10 py-10 '>
                <div className='lg:mx-72 mx-24 justify-center align-center'>
                    <form onSubmit={handleSubmit}>
                        {inputFields.map((x, index) => {
                            return (
                                <div>
                                    <div>
                                        <label>Team Name</label><br></br>
                                        <input name='teamName' value={inputFields.teamName} onChange={event => handleFormChange(index, event)} id="name" className='w-full border-b-2 border-0' type='text' required></input>
                                    </div>  <br></br>
                                    <div>
                                        <label>Member's First Name</label><br></br>
                                        <input name='memberFname' value={inputFields.memberFname} onChange={event => handleFormChange(index, event)} type='text' className='w-full border-b-2 border-0' required></input>
                                    </div> <br></br>
                                    <div>
                                        <label>Phone Number</label><br></br>
                                        <input name='phoneNumber' value={inputFields.phoneNumber} onChange={event => handleFormChange(index, event)} type='text' className='w-full border-b-2 border-0' required></input>
                                    </div> <br></br>
                                    <div>
                                        <label>Email Address</label><br></br>
                                        <input name='emailAddress' value={inputFields.emailAddress} onChange={event => handleFormChange(index, event)} type='text' className='w-full border-b-2 border-0' required></input>
                                    </div> <br></br>
                                    <div>
                                        <label>School Name</label><br></br>
                                        <input name='schoolName' value={inputFields.schoolName} onChange={event => handleFormChange(index, event)} type='text' className='w-full border-b-2 border-0' required></input>
                                    </div> <br></br>
                                    <div>
                                        <label>Standard</label><br></br>
                                        <div className="items-center mb-4">
                                            <input id="standard" type="radio" value="8th" name={index} onChange={event => handleClassSelect(index, event)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">8th</label>
                                        </div>
                                        <div className="items-center mb-4">
                                            <input id="standard" type="radio" value="9th" name={index} onChange={event => handleClassSelect(index, event)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">9th</label>
                                        </div>
                                        <div className="items-center mb-4">
                                            <input id="standard" type="radio" value="10th" name={index} onChange={event => handleClassSelect(index, event)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">10th</label>
                                        </div>
                                        <div className="items-center mb-4">
                                            <input id="standard" type="radio" value="11th" name={index} onChange={event => handleClassSelect(index, event)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">11th</label>
                                        </div>
                                        <div className="items-center mb-4">
                                            <input id="standard" type="radio" value="12th" name={index} onChange={event => handleClassSelect(index, event)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">12th</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {!memberLimit ? null : <div className='mt-8'>
                            <button onClick={addFields} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"> + Add Member </button>
                        </div>}
                    
                    <div className='mt-6'>
                      <button type="Submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Next </button>
                    </div>
                    </form>
                </div>
            </div> 
            <Footer2 />
        </>
    )
};


export default Form1;