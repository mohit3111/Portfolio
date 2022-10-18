import React from 'react'
import Links from './Links'
import { animateScroll as scroll } from 'react-scroll'
const Navbar = () => {
  return (
    <div>
       <div className='nav' data-aos="fade-down" data-aos-duration="1500">
       <img  src="https://img.icons8.com/ios/50/c8d4f5/m-key.png" />
        <div className='links'>
        <Links/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
