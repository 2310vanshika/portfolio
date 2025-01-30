import React from 'react'
import girl from '../assets/girl.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Vanshika <span className='text-red-500'>Dwivedi</span></h1>
               <p className='md:text-2xl text-xl mb-4'>Software Engineer</p>
               <p className='mb-4'>I'm a passionate software engineer with expertise in the MERN stack, Java, and modern web technologies. I specialize in designing and building scalable, efficient, and user-friendly software solutions that address real-world problems. My focus lies in creating high-quality, functional applications with a strong emphasis on performance, security, and maintainability.</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="/RESUME.pdf" download ='RESUME.pdf'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={girl} alt="" className='lg:h-[90vh] h-96' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      {/* <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'> 
         <img src={facebook} alt="" className='w-20'/> 
        <img src={instagram} alt="" className='w-20'/> 
        <img src={twitter} alt="" className='w-20'/>
         <a href="www.linkedin.com/in/23-vanshika" target="_blank" rel="noopener noreferrer"></a>
        <img src={linkedin} alt="" className='w-20'/>
      </div> */}
    </section>
  )
}

export default Hero
