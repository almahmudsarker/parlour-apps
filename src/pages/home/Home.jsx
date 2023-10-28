import React from "react";
import HeadBanner from "../../components/banner/HeadBanner";
import Services from "../../components/services/Services";
import Ad from "../../components/advertise/Ad";
import Testimonials from "../../components/testimonials/Testimonials";
import Connection from "../../components/connection/Connection";
import Promotions from "../../components/Promotions/Promotions";
import StaffProfiles from "../../components/StaffProfiles/StaffProfiles";
import BlogSection from "../../components/BlogSection/BlogSection";
import ProductFeature from "../../components/ProductFeature/ProductFeature";

const Home = () => {
  return (
    <>
      <HeadBanner />
      <Services />
      <Ad />
      <ProductFeature />
      <Promotions />
      <StaffProfiles />
      <BlogSection />
      <Testimonials />
      <Connection />
    </>
  );
};

export default Home;
