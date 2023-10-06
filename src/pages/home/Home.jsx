import React from 'react';
import HeadBanner from '../../components/banner/HeadBanner';
import Services from '../../components/services/Services';
import Ad from '../../components/advertise/Ad';
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
    return (
      <>
        <HeadBanner />
        <Services />
        <Ad />
        <Testimonials />
      </>
    );
};

export default Home;