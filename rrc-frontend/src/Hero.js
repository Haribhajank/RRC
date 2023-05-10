import { Fragment, useState } from 'react';
import './index.css';

function Hero() {
    return (
        <>
            <div className='flex justify-center flex-wrap my-10'>
                <div className='lg:ml-40 mt-10  justify-center ml-20'>
                    <img className='h-3/4'  src={require('./images/Cloner Cube Binary 536x794 1.png')}></img>
                </div>
                <div className='lg:flex-1 lg:mr-20 lg:mt-20 justify-center align-center lg:ml-20 px-10'>
                    <img className='' src={require('./images/RECYCLOTRON ROBOTICS CHALLENGE.png')}></img>
                    <p className='mt-10 w-3/4'>Test your taste in technology by designing and making a robot from scrap, and push your limits to make something truly ground breaking.</p>
                    <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register Now!</button>
                </div>
            </div>
            <div className='flex flex-wrap flex-col justify-center align-center lg:px-60 '>
                <div className='m-auto'>
                    <div className='flex flex-wrap justify-center align-center text-4xl font-black mb-10 f'>What is it?</div>
                    <div className='flex flex-wrap justify-center align-center lg:px-40 px-10 text-center'>This event is Robotic Club's first pan India initiative and is expected to attract large crowd of tech savvy minds.The challenge is to design and build a robot that can perform any task while minimizing the environmental impact involved in its designing.</div>
                </div>
            </div>


            {/* Steps */}
            <div className='flex flex-col mt-20 lg:p-20 max-[1220px]:items-center max-[1220px]:space-y-16'>
                <div className='flex flex-wrap flex-row max-[1220px]:flex-col-reverse max-[1220px]:items-center   '>
                    <div className='flex flex-wrap flex-col lg:ml-60'>
                        <div className='flex lg:justify-left flex-wrap flex-col mb-10 text-2xl font-black max-[1220px]:my-2'><h1>1. Understand the Problem</h1></div>
                        <div className='lg:justify-left flex-wrap flex-col w-96 max-[1220px]:w-80 '>The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly. The design should be innovative and cost-effective and use readily available waste materials.</div>
                    </div>
                    <div className='flex lg:justify-right flex-wrap lg:ml-32 max-[1220px]:ml-0'><img src={require('./images/Rectangle 7.png')}></img></div>
                </div>
                <div className='flex flex-1 flex-wrap flex-row mt-5 max-[1220px]:flex-col max-[1220px]:items-center '>
                    <div className='flex flex-wrap lg:ml-60 max-[1220px]:items-center'><img src={require('./images/Rectangle 7.png')}></img></div>
                    <div className='flex flex-wrap flex-col lg:ml-20'>
                        <div className='flex lg:justify-right  flex-wrap flex-col mb-10 text-2xl font-black max-[1220px]:my-2'><h1>2. Look out for usefull scrap</h1></div>
                        <div className='flex lg:justify-right flex-wrap flex-col w-96 max-[1220px]:w-80'>In order to make the robot you want, you need to list down the thing your need and starts looking for it around your house. You can buy things like batteries and motors from stores</div>
                    </div>
                </div>
                <div className='flex flex-wrap flex-row mt-5 max-[1220px]:flex-col-reverse max-[1220px]:items-center '>
                    <div className='flex flex-wrap flex-col lg:ml-60'>
                        <div className='flex lg:justify-left flex-wrap flex-col mb-10 text-2xl font-black max-[1220px]:my-2'><h1>3. Build it up !!</h1></div>
                        <div className='lg:justify-left flex-wrap flex-col w-96 max-[1220px]:w-80'>Start thinking on how you will be making the robot with the scraps and useful items you found. A proper working robot model would be your target</div>
                    </div>
                    <div className='flex lg:justify-right flex-wrap lg:ml-32'><img src={require('./images/Rectangle 7.png')}></img></div>
                </div>
                <div className='flex flex-1 flex-wrap flex-row mt-5 max-[1220px]:flex-col max-[1220px]:items-center '>
                    <div className='flex flex-wrap lg:ml-60'><img src={require('./images/Rectangle 7.png')}></img></div>
                    <div className='flex flex-wrap flex-col lg:ml-20 '>
                        <div className='flex lg:justify-right  flex-wrap flex-col mb-10 text-2xl font-black max-[1220px]:my-2'><h1>4. Submit and win prizes</h1></div>
                        <div className='flex lg:justify-right flex-wrap flex-col w-96 max-[1220px]:w-80'>IIT Guwahati students will be judging your projects. There are a lot of prizes and exciting things to wins from this competition, so give your best to win this</div>
                    </div>
                </div>
            </div>

            {/* Challenges */}
            <div className='lg:grid mx-0 lg:gap-20 justify-center align-center h-auto lg:h-screen flex-wrap lg:grid-cols-2'>
                <div className='lg:my-60 mx-20'>
                    <div className='mt-16 lg:text-6xl text-4xl font-black f pb-5'>
                        Several Key Challenges
                    </div>
                    <div className='mt-5'>
                        The robot your will be making must be addressing these challenges.
                        Keeping these factor in mind, lets have a close look into them.The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly.
                    </div>
                </div>
                <div className='bg-black text-white '>
                    <div className='lg:mt-72 mx-24 text-2xl mt-10 font-black'>Material Selection:</div>
                    <div className='mt-5 mx-24'>IIT Guwahati students will be judging your projects. There are a lot of prizes and exciting things        to wins from this competition, so give your best to win this</div>
                </div>
            </div>



            {/* Instruction */}
            <div className='flex flex-col justify-center align-center lg:px-60 mt-20 pt-20  flex-wrap' >
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





            {/* FAQs */}
            <div className='p-5 w-auto flex flex-col justify-center align-center mt-40 mb-60 lg:px-60  flex-wrap'>
                <div className='flex justify-center align-center text-4xl font-black mb-10 f'>Frequently Asked Question</div>
                <div className='px-20'>                    
                    <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>What is Flowbite?</span>
                        <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                        <span>Is there a Figma file available?</span>
                        <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                        <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-3">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                        <span>What are the differences between Flowbite and Tailwind UI?</span>
                        <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                            <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                            <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                        </ul>
                        </div>
                    </div>
                    
                    </div>

                </div>
            </div>



            {/* Sponsor */}
            <div className=''>
                <div>
                    <div className='flex justify-center align-center text-2xl font-black mb-10'>Sponsored By</div>
                    <div className='flex justify-center align-center mb-10 text-center'>(Maximum 25 points):<br></br>
                        The video simulation should be 10 minutes long.
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-8 lg:ml-20 mb-20'>
                    <div><img src={require('./images/Rectangle 8.png')}></img></div>
                    <div><img src={require('./images/Rectangle 8.png')}></img></div>
                    <div><img src={require('./images/Rectangle 8.png')}></img></div>
                    <div><img src={require('./images/Rectangle 8.png')}></img></div>
                </div>
            </div>
        </>
    )
};

export default Hero;