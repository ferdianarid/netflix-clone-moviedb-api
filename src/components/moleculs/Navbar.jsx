import React from 'react'
import netflix from "../../assets/netflix.png"

import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/outline"

const Navbar = () => {
       return (
              <React.Fragment>
                     <div className="flex items-center justify-between bg-transparent">
                            <img src={netflix} alt="netflix" className='w-24 md:w-32 bg-transparent' />
                            <div className="flex gap-x-4 bg-transparent">
                                   <div className="border border-white py-2 px-2 bg-transparent w-fit flex">
                                          <GlobeAltIcon className='w-4 text-white mr-2' />
                                          <p className='text-white pr-4 md:pr-[72px] hover:cursor-pointer font-medium text-[13px] bg-transparent'>English</p>
                                          <ChevronDownIcon className='w-4 text-white' />
                                   </div>
                                   <a className="text-white font-medium hover:cursor-pointer hover:bg-red-800 text-[13px] bg-[#E30813] py-2 px-4 w-fit">
                                          Sign In
                                   </a>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default Navbar