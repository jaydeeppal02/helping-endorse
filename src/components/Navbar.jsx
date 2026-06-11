import React from 'react'
import { Link, NavLink } from 'react-router-dom' 
import Login from './Login'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
    {/* <nav className='bg-[#6f1d1b] text-[#edede9] p-3 flex justify-between items-center shadow-2xl' >
     <a href="#" className='ml-7 text-lg'>helping endorse</a>
     <div className='flex gap-10 mr-18' >
      <a href="">Home</a>
      <a href="">About</a><a href="">Services</a><a href="" >Contact</a>

     </div>
    </nav> */}
    <header className="shadow sticky z-50 top-0">
            <nav className="bg-[#6f1d1b] text-[#edede9] border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                      <h1 className='font-bold text-xl hover:text-[#d8d7d7] transition-colors'>Helping endorse</h1>
                    </Link>
                    <div className="flex items-center lg:order-2 " >
                        <button onClick={() => {
                            navigate('/login');
                        }}
                            
                            className="bg-[#edede9] text-[#6f1d1b] hover:bg-[#e6d8d8]  focus:ring-4 focus:ring-[#6f1d1b]-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Login
                        </button>
                       
                    </div>
                    <div
                        className=" ml-28 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className='flex gap-7'>
                                <NavLink
                                    // className={() =>
                                    //     `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#6f1d1b] lg:p-0`
                                    // }
                                className={()=>
                                    `hover:text-[#edede9] font-medium hover:text-bold`
                                }>
                                    Home
                                </NavLink>

                                <NavLink
                                    className={() =>
                                        `hover:text-[#edede9]`
                                    }
                                >
                                    About
                                </NavLink>

                                <NavLink
                                    className={() =>
                                        `hover:text-[#edede9]`
                                    }
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    className={() =>
                                        `hover:text-[#edede9]`
                                    }
                                >
                                    Contact us
                                </NavLink>



                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar
