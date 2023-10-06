import React from 'react';

const Connection = () => {
    return (
        <div className="bg-neutral py-10">
      <div className="md:w-5/12 px-4 md:px-0  mx-auto ">
        <h1 className="text-center text-[34px] pt-5 font-bold text-gray-700">
         Let us handle your 
project, professionally.
        </h1>
     
      
        <div className=" mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="input w-full p-5 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input w-full p-5 rounded"
            />

            <input
              type="text"
              placeholder="Email Address"
              className="input w-full p-5 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input w-full p-5 rounded"
            />
          </div>

          <textarea
            className="textarea w-full pb-20 p-5 mt-6 rounded"
            placeholder="Your Message"
          ></textarea>
          <button className="block mx-auto my-6 rounded p-3 hover:bg-rose-500 transition duration-300 ease-in-out bg-[#F63E7B] text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
    );
};

export default Connection;