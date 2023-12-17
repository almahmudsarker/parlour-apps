import React, { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {
  const [count, setCount] = useState(1);
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();

  const handleDelete = (item) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Product?"
    );
    if (confirmDelete) {
      fetch(`${import.meta.env.VITE_API_URL}/carts/${item._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleted > 0) {
            refetch();
            toast.success("Product deleted successfully!");
            window.location.reload();
          }
        });
    }
  };

  // handle purchase  button
  const handlePurchase = () => {
    // Check if the user is authenticated
    if (!user) {
      toast.error("Please log in to make a purchase.");
      return;
    }

    // Prepare purchase data
    const purchaseData = {
      userEmail: user.email,
      items: cart.map((item) => ({ productId: item._id, quantity: count })),
      totalAmount: cart.reduce((total, item) => total + item.price, 0),
    };

    // Send the purchase request to the server
    fetch(`${import.meta.env.VITE_API_URL}/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchaseData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle the response from the server, update UI as needed
        // For example, you can show a success message, clear the cart, etc.
        console.log(data);
        toast.success("Purchase successful!");
        setCount(1);
        refetch();
      })
      .catch((error) => {
        console.error("Error making purchase:", error);
        toast.error("Error making purchase. Please try again.");
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        My Cart
      </h1>
      {cart?.length > 0 ? (
        <div className="flex flex-col gap-4 p-20">
          {cart?.map((item) => (
            <div
              key={item._id}
              className="flex flex-row items-center justify-between bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-row items-center gap-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-28 h-20 bg-gray-200 rounded-lg"
                />
                <div>
                  <h1 className="text-lg font-semibold text-[#0C0C0C]">
                    {item.name}
                  </h1>
                  <p className="text-sm text-[#0C0C0C]">
                    ${item.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <button
                  onClick={() => {
                    if (count > 0) {
                      setCount(count - 1);
                    } else {
                      setCount(1);
                      toast.error("Minimum quantity is 1");
                    }
                  }}
                  className="bg-[#F86E9C] text-white rounded-full px-2 py-1"
                >
                  -
                </button>
                <span className="text-[#0C0C0C]">{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="bg-[#F86E9C] text-white rounded-full px-2 py-1"
                >
                  +
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className="bg-[#F86E9C] text-white rounded-full px-2 py-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="bg-transparent p-5 rounded-xl  w-1/3 mx-auto">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-[#0C0C0C]">Total</h1>
              <h1 className="text-lg font-semibold text-[#0C0C0C]">
                $
                {cart?.reduce((a, b) => a + b.price, 0).toLocaleString("id-ID")}
              </h1>
            </div>
            <button
              onClick={handlePurchase}
              className="bg-[#F86E9C] text-white rounded-full px-2 py-1 w-full hover:shadow-md transition duration-400"
            >
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <svg
            enable-background="new 0 0 100 100"
            height="100px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 100 100"
            width="100px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path d="M50,47.807c-3.603,0-6.625-2.453-7.509-5.778c-13.41,0.208-25.268,1.006-27.205,2.414   c0.915,7.264,4.057,13.83,8.718,19.002c5.23,5.803,10.186,11.846,15.066,17.946L50,95.053l10.929-13.662   c4.885-6.107,9.852-12.152,15.083-17.965c4.65-5.167,7.785-11.724,8.7-18.975c-1.94-1.377-13.797-2.187-27.206-2.412   C56.619,45.359,53.599,47.807,50,47.807z M60.028,45.979c10.777,0.243,17.05,0.796,20.23,1.274   C76.975,61.081,64.508,71.141,50,71.141c-14.517,0-26.989-10.072-30.264-23.912c3.166-0.48,9.435-1.033,20.227-1.263   c2.06,3.482,5.845,5.731,10.037,5.731C54.184,51.696,57.966,49.453,60.028,45.979z" />
              <path d="M50,4.947c-19.33,0-35,15.67-35,35c0,0.289,0.015,0.574,0.022,0.861c0.127-0.51,1.542-0.951,3.879-1.323   C19.138,23.195,31.867,9.241,47.932,8.129C49.051,8.052,50,8.953,50,10.074c0,1.022-0.794,1.865-1.814,1.932   c-14.114,0.933-25.319,12.672-25.404,26.999c5.068-0.496,12.123-0.809,19.678-0.937c0.841-3.386,3.893-5.899,7.54-5.899   c3.643,0,6.692,2.508,7.537,5.889c14.427,0.224,27.05,1.133,27.441,2.748C84.985,40.519,85,40.235,85,39.947   C85,20.617,69.33,4.947,50,4.947z" />
            </g>
          </svg>
          <h1 className="text-lg font-semibold text-[#0C0C0C]">
            Your cart is empty
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyCart;
