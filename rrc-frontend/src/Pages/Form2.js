import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import { indianStateDB } from '../assets/StateDB';
import { v4 as uuid } from "uuid";
import Footer2 from '../Components/Footer2';import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
 function Form2() {
    let navigate=useNavigate();
    var islogin=false;
    var Usernames=JSON.parse(localStorage.getItem("Username"));
    var Emails=JSON.parse(localStorage.getItem("Email"));
    var Classes=JSON.parse(localStorage.getItem("Class"));
    var School=JSON.parse(localStorage.getItem("School"));
    var Number=JSON.parse(localStorage.getItem("PhoneNumber"));

    var TeamName=localStorage.getItem("TeamName");

    const [formData, setFormData] = useState([
        {
          State:'',
          City:'',
          Pincode:''
        },
      ]);
    
    const [districts, setDistricts] = useState(indianStateDB.states[0].districts);
    const handleDistrict = (e) => {
        const selectedIndex = e.target.selectedIndex;
        setDistricts(indianStateDB.states[selectedIndex].districts);

        setFormData({ ...formData, [e.target.name]: [e.target.value] });
        console.log(formData.State)
        
    }
    const Handlechange = (event) => {
         setFormData({ ...formData, [event.target.name]: [event.target.value] });
         console.log(formData.state)
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8);
        console.log(small_id);
        
        Usernames.map(async (x, i) => {
          localStorage.setItem("State",formData.State);
          console.log(formData.State+" "+i);
          const response = await fetch("http://localhost:5000/api/registeruser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
    
            body: JSON.stringify({
              name: Usernames[i],
              email: Emails[i],
              phoneNumber: Number[i],
              City: formData.City.toString(),
              State:formData.State.toString(),
              Zip:  parseInt(formData.Pincode),
              School: School[i],
              Class: Classes[i],
              team_id: "RRC" + small_id,
            }),
          });
          //emailjs.sendForm('service_ig1onq2','template_6rhzqzf',e.target,"iIzGni5WTJe5o4g6B").then(()=>alert("email sent"))
        //   const config = {
        //     Host : "smtp.elasticemail.com",
        // Username : "username",
        // Password : "password",
        //     To:"dhruvqagarwal@gmail.com" ,
        //     From: inputFields[i].email,
        //     Subject: "This is the subject",
        //     Body: "And this is the body",
        //   };
        //   if(window.Email)
        //   {
        //     console.log( inputFields[i].email)
        //   window.Email.send(config).then(()=>alert("email sent"));
        //   }
      
          const json =await response.json();
          console.log(json);
          
          if (!json.success) {
            alert(e);
          } 
          if (json.success) {
            islogin=true;
           // localStorage.setItem("authToken",json.authToken);
            localStorage.setItem("City",formData.City);
            
            localStorage.setItem("Team_id","RRC" + small_id);
           // navigate('/Successfull');
            navigate('/Success');
          }
    
          })
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
             <div className='my-10 py-10'>
                <div className='lg:mx-72 mx-24 justify-center align-center'>
                    <form onSubmit={handleSubmit} >
                        <label><span className='text-red-600'>*</span>State </label><br />
                        <select className='my-4 w-80 ' name="State" value={formData.State} onChange={handleDistrict}  required>
                            {indianStateDB.states.map((state) => {
                                return <option value={state.state}>{state.state}</option>
                            })}
                        </select>
                        <br></br>
                        <label><span className='text-red-600'>*</span>City/town </label><br />
                        <select className='my-4 w-80 ' name="City" value={formData.City} onChange={(e) => Handlechange(e)} id="City" required >
                            {districts.map((district) => {
                                // console.log(formData.City);
                                return <option value={district}>{district}</option>
                            })}
                        </select>
                        <br></br>
                        <div>
                            <label>Pincode</label><br></br>
                            <input name='Pincode'  onChange={(e) => Handlechange(e)} value={formData.Pincode} id="Pincode" required  class='w-full border-b-2 border-0' type='text' ></input>
                           
                        </div>  <br></br>
                   
                    <div className='mt-6'>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Next </button>
                    </div>
                    </form>
                </div>
            </div> 
            <Footer2 />
        </>
    )
}
 

export default Form2;
 