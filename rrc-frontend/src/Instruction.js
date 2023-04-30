import { Fragment, useState } from 'react';
import './index.css';


function Instruction() {
    return (
        <>
            <div className='flex flex-col justify-center align-center mx-60 my-28 h-screen flex-wrap' >
                <div className='flex justify-center align-center text-4xl font-black mb-10 f'>Instructions</div>
                <div className='px-20'><b>1.Each team should submit a video </b>(Maximum 25 points):
                    <br></br>The video simulation should be 10 minutes long.
                    The video should demonstrate a complete description of the robot and its working.
                    The team members should always be visible in front of the camera.<br></br><br></br>

                    <b>2.Report Submission</b> (Maximum 20 points):
                    <br></br>The report should include a basic idea about model and design details, such as material choice, the calculation (if any), motor and sensor selection.<br></br><br></br>
                    <u>Introduction</u>: Provide an overview of the project, its objectives, and the problem statement being addressed.<br></br><br></br>
                    <u>Design</u>: Describe the design of the project, including the selection of waste materials, the design process, and the final product design.<br></br><br></br>
                    <u>Functionality</u>: Explain how the project is functional and serves its intended purpose effectively.<br></br><br></br>
                    <u>Technical proficiency</u> (maximum 25 points): The project should demonstrate technical proficiency in the selection of materials, construction techniques, and the use of tools and equipment.<br></br><br></br>
                    *The use of motors, sensors, microcontrollers and other electronic equipment is allowed but the idea of utilizing waste should not be overlooked/ignored.<br></br><br></br>

                    <b>3.Use of waste materials</b> (maximum 10 points): The project should effectively utilize waste materials in a creative and eco-friendly way, reducing waste and promoting sustainability.<br></br><br></br>

                    <b>4.Creativity and uniqueness</b> (maximum 20 points): The project should demonstrate creativity and uniqueness using waste materials, design, and functionality.</div>                
            </div>
        </>
    )
};

export default Instruction;