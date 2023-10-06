import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Nash Patrik", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Miriam Barron", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Bria Malone", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Nash Patrik", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "Miriam Barron", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Nash Patrik", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Miriam Barron", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Bria Malone", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 9, name: "Nash Patrik", title: "CEO, Manpol", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
  ];
  return (
    <div className="bg-[#FFFFFF] pt-20 px-4">
      <h1 className="mb-16 text-center font-bold text-3xl">
        Testimonials
      </h1>
      <div>
        <Swiper
          
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper h-[340px]"
        >
          <h1>hello</h1>
          {reviews.map((r) => (
            <SwiperSlide key={r.id}>
              <div className="p-5 rounded-xl md:w-[370px] mx-auto ">
                <div className="flex items-center gap-5">
                  <img src={r.img} className="w-16 h-16 rounded-full" alt="" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {r.name}
                    </h2>
                    <p className="text-gray-600 text-sm">{r.title}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptatibus.
                </p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;