import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import '../index.css';
import { Link, NavLink } from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 lg:py-0" aria-label="Global">
        <div className="flex-none mr-2">
          <a href="#" className="-m-1">
            <img className="h-8 w-auto" src={require('../images/RRC logo 2.png')} alt="" />
          </a>
        </div>
        <div className="flex-auto">
          <a href="#" className="-m-0.5">
            <img className="h-8 w-auto" src={require('../images/RRC.png')} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
          <Popover className="relative">

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

            </Transition>
          </Popover>           
          <Link to='/'><div className="px-4 py-1.5 hover:text-white hover:bg-green-400 rounded-full"  >About</div></Link>
          <Link to='/team'><div  className="px-4 py-1.5 hover:text-white hover:bg-green-400 hover:rounded-full">Robotics Club</div></Link>
          <Link to='/contact'><div  className="px-4 py-1.5 hover:text-white hover:bg-green-400 hover:rounded-full">Contact Us</div></Link>
          
          
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link to="/form1"><button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register Now!</button></Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={require('../images/RRC logo 2.png')}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to='/'><div
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </div></Link>
                <Link to='/team'><div
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Robotics Club
                </div></Link>
                {/* <a
                  href="team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Team
                </a> */}
                <Link to='/contact'><div
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </div></Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}













































// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Nav()  {
//     return (
//         <>
//             <div className='nav'>
//                 <img className={'img-rrc'} src={require('./images/RRC logo 2.png')}></img>
//                 <div className='rrc'>RRC</div>
//                 <a href=''><div className='abt'>About</div></a>
//                 <a href=''><div className='rbt'>Robotics Club</div></a>
//                 <a href=''><div className='tm'>Team</div></a>
//                 <a href=''><div className='cu'>Contact Us</div></a>
//                 <button className='r-btn'>Register Now !</button>
//             </div>

//         </>
//     );
// }

// export default Nav;