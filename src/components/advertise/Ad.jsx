import React from 'react';
import Container from '../shared/Container';

const Ad = () => {
    return (
        <div className='w-full p-5'>
        <Container>
            <div className='flex flex-row py-8 gap-20'>
            <div data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false">
            <img className='w-[580px] h-[381px]' src='https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Image/washing.png?raw=true' alt='728x90' />
            </div>
            <div data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false">
            <div>
                <h1 className="text-4xl font-bold text-left text-[#111430] w-[409px] h-[82px] my-3">Let us handle your screen <span className='text-[#F63E7B]'>Professionally.</span></h1>
                <p className="text-left text-[#666666] w-[401px] h-[98px]">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
            </div>
            <div className='flex mt-10'>
              <p className="text-4xl font-bold text-left text-[#F63E7B] w-[110px] h-[60px] mt-5 mr-10">500+</p>
              <p className="text-4xl font-bold text-left text-[#F63E7B] w-[70px] h-[60px] mt-5">16+</p>
            </div>
            <div className='flex'>
              <span className="text-left text-[#666666] w-[140px] h-[24px]">Happy Customer</span>
              <span className="text-left text-[#666666] w-[140px] h-[24px] ml-3">Total Services</span>
            </div>
            </div>
            </div>
        </Container>
        </div>
    );
};

export default Ad;