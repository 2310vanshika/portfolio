import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Binary Metrix",
            text: "As a Full Stack Development Intern at Binary Metrix, I worked on designing and developing web applications using the MERN stack, focusing on creating user-friendly interfaces, building scalable backend systems, and optimizing performance. I gained hands-on experience in implementing both frontend and backend solutions to meet client needs and ensure seamless application functionality."
        },
        {
            id: 2,
            name: "Wetsern Coal Fields Limited",
            text: "As a Software Development Engineer (SDE) Intern at Western Coalfields Limited (WCL), I played a key role in designing and developing a comprehensive Safety Management System. The system included features such as accident reporting, role-based access control, and detailed data visualization for tracking safety trends. I integrated OTP-based email verification and streamlined user authentication."
        },
    ]

    return (
        <div id='testimonials' className='py-10 bg-light-purple relative' >
            <h1 className='text-center text-3xl lg:text-4xl font-bold ml-4 lg:ml-10 '>Experience</h1>
            <div className='max-w-6xl mx-auto py-10 px-5 ml-auto'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination]}
                    loop={false}
                    speed={600}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id} className='flex justify-center'>
                            <div className='border border-gray-400 shadow-lg shadow-red-500 rounded-lg flex flex-col p-4 max-w-md ml-auto'>
                                {/* {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )} */}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
