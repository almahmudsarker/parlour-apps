import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { _id, name, price, description, img } = service;
  const [infoImage, setInfoImage] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:4000/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  return (
    <div>
      <div className="bg-secondary font-poppins h-screen px-5 md:px-10 ">
        {/* <h1 className="text-3xl font-poppins font-semibold text-accent py-5">
          Confrim Booking
        </h1> */}
        <div className=" w-full md:w-3/6 mx-auto flex justify-center items-center h-full md:h-[80vh]  py-10">
          <div className="bg-white  space-y-4 py-8 px-9 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-accent">{name}</h2>
            <img className="w-32" src={img} alt="" />
            <p className="text-center">{description}</p>
            <p className="text-primary text-xl font-bold">${price}</p>
            <button
              onClick={() => navigate(`/dashboard/payment/${_id}`)}
              className="px-5 font-semibold rounded py-2  bg-primary text-white"
            >
              Booking Confrim
            </button>
          </div>
        </div>
        {/* <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {infoImage.slice(4, 10).map((singleImg) => (
            <div key={singleImg.id}>
              <img className=" w-full" src={singleImg.largeImageURL} alt="" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ServiceDetails;
