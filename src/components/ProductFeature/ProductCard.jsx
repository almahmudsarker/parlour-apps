import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaOpencart } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ProductCard = ({ product }) => {
  const { _id, name, description, price, imageUrl } = product;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (product) => {
    if (user && user.email) {
      const cartItem = {
        productId: _id,
        name,
        description,
        price,
        imageUrl,
        email: user.email,
      };
      fetch(`${import.meta.env.VITE_API_URL}/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast.success("Product added to cart!");
          }
        });
    } else {
      toast.error("Please login to purchase product!");
      navigate("/login");
    }
  };
  return (
    <>
      <div
        key={product._id}
        className="bg-white border rounded-lg shadow-md p-4 transition transform hover:scale-105 duration-300"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold text-[#F63E7B]">${product.price}</p>
            <button
              className="px-3 py-1 text-sm text-white bg-[#F63E7B] rounded-md"
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              Add to Cart <FaOpencart className="inline-block mr-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;