import React from "react";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";

const MyCart = () => {
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
                <button className="bg-[#F86E9C] text-white rounded-full px-2 py-1">
                  -
                </button>
                <span className="text-[#0C0C0C]">1</span>
                <button className="bg-[#F86E9C] text-white rounded-full px-2 py-1">
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
            <button className="bg-[#F86E9C] text-white rounded-full px-2 py-1 w-full hover:shadow-md transition duration-400">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <img
            src="/images/empty-cart.svg"
            alt="empty-cart"
            className="w-[50%] object-cover"
          />
          <h1 className="text-lg font-semibold text-[#0C0C0C]">
            Your cart is empty
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyCart;
