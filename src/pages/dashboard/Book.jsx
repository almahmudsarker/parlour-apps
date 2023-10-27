import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getService } from "../../api/services";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useBooked from "../../hooks/useBooked";

const Book = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name, price } = services;
  const { user } = useContext(AuthContext);
  const [booked, refetch] = useBooked();

  const navigate = useNavigate();

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

  const handleAddToBook = (item) => {
    console.log("Item:", item);
    if (user && user.email) {
      const bookItem = { bookedItemId: id, name, price, email: user.email };
      fetch(`${import.meta.env.VITE_API_URL}/booked`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast.success("Booked Successfully");
            navigate("/dashboard/my-booking");
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Pay to Book
      </h1>
      <section>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-gray-300 p-2 rounded-md w-1/2 m-4"
            value={user.displayName}
          />
          <input
            type="text"
            placeholder="Email"
            className="border-2 border-gray-300 p-2 rounded-md w-1/2 m-4"
            value={user.email}
          />
          <input
            type="text"
            placeholder="Service Name"
            className="border-2 border-gray-300 p-2 rounded-md w-1/2 m-4"
            value={name}
          />
          <div>
            <h4 className="text-lg font-thin text-[#6e6e6e] p-5">Pay with</h4>
            <div className="p-5 flex">
              <input type="radio" name="payment" value="card" />
              <img
                src="https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Icon/credit-card%201.png?raw=true"
                alt=""
                className="w-5 h-5 ml-2"
              />
              <label className="text-[#6e6e6e] px-2">Creadit Card</label>

              <input type="radio" name="payment" value="paypal" />
              <img
                src="https://github.com/abirhasan33/jerin-parlour-client/blob/main/src/Assests/Images/Icon/image%2017.png?raw=true"
                alt=""
                className="w-5 h-5 ml-2"
              />
              <label className="text-[#6e6e6e] px-2">Paypal</label>
            </div>
          </div>
          <input
            type="text"
            placeholder="Card Number"
            className="border-2 border-gray-300 p-2 rounded-md w-1/2 m-4"
          />
          <div className="flex">
            <input
              type="text"
              placeholder="MM/YY"
              className="border-2 border-gray-300 p-2 rounded-md w-3/12 my-4 ml-4"
            />
            <input
              type="text"
              placeholder="CVC"
              className="border-2 border-gray-300 p-2 rounded-md w-3/12 my-4"
            />
          </div>
          <br />
          <span className="text-gray-400 text-sm m-4">
            Your Service Charge will be ${price}
          </span>
          <button
            onClick={handleAddToBook}
            className="bg-[#f86e9c] hover:bg-[#F63E7B] text-white p-2 rounded-md m-4"
          >
            Pay Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Book;
