import React from "react";
import Navbar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap justify-center text-center mb-8">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Get in Touch</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Have questions, concerns, or just want to say hello? Feel free to
              reach out to us.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-4/12 px-4">
            <div className="py-6">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Visit Us</h3>
              </div>
              <p className="text-lg text-gray-600">
                123 Main Street
                <br />
                Cityville, State 12345
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 px-4">
            <div className="py-6">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Contact Info</h3>
              </div>
              <p className="text-lg text-gray-600">
                Email: info@example.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 px-4">
            <div className="py-6">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Social Media</h3>
              </div>
              <p className="text-lg text-gray-600">
                Follow us on Twitter, Facebook, and Instagram for updates and
                news.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
