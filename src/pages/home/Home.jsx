import React from 'react';
import HeadBanner from '../../components/banner/HeadBanner';
import Services from '../../components/services/Services';
import Ad from '../../components/advertise/Ad';

const Home = () => {
    return (
      <>
        <HeadBanner />
        <Services />
        <Ad />
      </>
    );
};

export default Home;