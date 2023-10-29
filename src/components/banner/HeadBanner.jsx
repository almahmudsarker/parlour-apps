import React from "react";
import Container from "../shared/Container";
import toast from "react-hot-toast";

const HeadBanner = () => {
  const appoinment = () => {
    toast.success("Explore Services & Booked right now!");
  };

  return (
    <Container>
      <section className="items-center justify-center flex">
        <div className="flex flex-row gap-5">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="flex flex-col gap-4 p-24">
              <h1 className="text-5xl font-bold text-left text-[#111430]">
                BEAUTY SALON
              </h1>
              <h1 className="text-5xl font-bold text-left text-[#111430]">
                FOR EVERY <span className="text-[#F63E7B]">WOMEN</span>
              </h1>
              <p className="text-left text-[#666666] w-[350px] h-[83px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </p>
              <button
                onClick={appoinment}
                className="bg-[#F63E7B] hover:bg-[#ff5289] text-white px-10 py-2 rounded-md w-[229px] h-[50]"
              >
                Get an Appointment
              </button>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img
              src="https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Image/header.png?raw=true"
              alt="banner"
              className="w-[484px] h-[478px] rounded-xl"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeadBanner;
