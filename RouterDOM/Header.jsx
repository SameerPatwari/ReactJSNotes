import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Sameer's App <input className='bg-white text-black p-3' /></h2>
        <div className='flex gap-10'>
            <Link className='text-xl' to="/">HOME</Link>
            <Link className='text-xl' to="/about">ABOUT</Link>
            <Link className='text-xl' to="/product">PRODUCT</Link>
            <Link className='text-xl' to="/contact">CONTACT</Link>
        </div>
    </div>
  )
}

export default Header
