import React, { useState } from 'react';
import axios from 'axios';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/send-email', formData);
      // No need to set the status anymore
      setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
  };

  return (
    <section id='contact' className='z-50 bg-custom-voilet relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
            <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
            <div className='flex space-x-4'>
              {/* <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                <img src={facebook} alt="" className='h-6 w-6' /></a> */}
              {/* <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                <img src={instagram} alt="" className='h-6 w-6' /></a> */}
                <a href="mailto:vanshikadwivedi2310@gmail.com" className='text-foreground/60 hover:text-foreground/80'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-custom-red">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                </a>
                
              <a href="https://www.linkedin.com/in/23-vanshika" className='text-foreground/60 hover:text-foreground/80'>
                <img src={linkedin} alt="" className='h-8 w-8' /></a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>
          <form onSubmit={handleSubmit} className='w-full md:w-1/2 bg-custom-voilet-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'>
            <h1 className='text-white text-4xl font-bold mb-7'>Contact Me</h1>
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-white'>Name</label>
              <input type="text" id='name' value={formData.name} onChange={handleChange} placeholder='Full Name'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-white'>Email</label>
              <input type="email" id='email' value={formData.email} onChange={handleChange} placeholder='Email'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-white'>Message</label>
              <textarea id='message' value={formData.message} onChange={handleChange} placeholder='Enter Your Message'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <button type="submit" className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
