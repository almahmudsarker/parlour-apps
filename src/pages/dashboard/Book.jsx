import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getService } from "../../api/services";

const Book = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name, price, description, img } = services;

  useEffect(() => {
    setLoading(true);
    console.log("ID:", id);
    getService(id)
      .then((data) => {
        console.log("Service Data:", data);
        setServices(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Pay to Book
      </h1>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h3>{description}</h3>
      <img src={img} alt="" />
    </div>
  );
};

export default Book;
