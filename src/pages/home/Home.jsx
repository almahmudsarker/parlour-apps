import React from 'react';
import HeadBanner from '../../components/banner/HeadBanner';
import Services from '../../components/services/Services';
import Ad from '../../components/advertise/Ad';
import Testimonials from '../../components/testimonials/Testimonials';
import Connection from '../../components/connection/Connection';

const Home = () => {
    return (
      <>
        <HeadBanner />
        <Services />
        <Ad />
        <Testimonials />
        <Connection />
      </>
    );
};

export default Home;