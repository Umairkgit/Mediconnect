import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-gray-500 mt-10 text-center'>
        <p>CONTACT <span className='text-gray-800'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500 '>444 Lajpat Nagar <br /> New Delhi 110045, India</p>
          <p className='text-gray-500 '>Tel: 238-384-4839 <br /> Email: medi-connect@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT MEDICONNECT</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='text-sm border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
