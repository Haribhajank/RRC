import React from 'react'

export default function Success() {
    var Usernames=JSON.parse(localStorage.getItem("Username"));
    var Emails=JSON.parse(localStorage.getItem("Email"));
    var Classes=JSON.parse(localStorage.getItem("Class"));
    var School=JSON.parse(localStorage.getItem("School"));
    var Number=JSON.parse(localStorage.getItem("PhoneNumber"));
   var TeamName= localStorage.getItem("TeamName");
   var TeamID= localStorage.getItem("Team_id");

   var State= localStorage.getItem("State");
   var City= localStorage.getItem("City");



  return (
    <>
    {TeamID}
    <br></br>
     {Usernames.map((x, i) => {
                            return (
                                <>
                                {Usernames[i]}
                                <br></br>
                                {Emails[i]}
                                <br></br>
                                {Classes[i]}
                                <br></br>
                                {School[i]}
                                <br></br>
                                {Number[i]}
                                <br></br>
                                </>
                                
                            )})}
                            {TeamName};
                            <br></br>
                            {City};
                            <br></br>
                            {State};


                            {}

    </>
  )
}
