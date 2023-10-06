import React from 'react';
import ServiceCard from './card/ServiceCard';

const Services = () => {
    return (
        <div className='bg-[#FFFFFF] w-full py-16 mt-10'>
            <h1 className='text-center text-4xl font-bold text-[#111430]'>Our Awesome <span className='text-[#F63E7B]'>Services</span></h1>
            <div data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-once="false">
            <ServiceCard />
            </div>
        </div>
    );
};

export default Services;