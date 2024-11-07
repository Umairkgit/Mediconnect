import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>MEDICONNECT</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-sm text-gray-600'>
          <p>At MediConnect, we aim to make healthcare accessible, efficient, and stress-free. Our platform connects patients with doctors, allowing for seamless appointment scheduling, easy access to medical professionals, and personalized healthcare services. Whether you're booking a routine check-up or seeking specialist advice, MediConnect simplifies the process with user-friendly features and real-time availability.</p>
          <p>MediConnect is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Medi Connect is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vison</b>
          <p>Our mission is to enhance the healthcare experience by bridging the gap between patients and practitioners, ensuring timely care for everyone. With MediConnect, quality healthcare is just a click away.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVINIENCE</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION</b>
          <p>Tailored recommendations and remainders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
