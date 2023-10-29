import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"; // You can choose a different icon if desired
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const ProductFeature = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      price: 19.99,
      imageUrl:
        "https://images.unsplash.com/photo-1566534268110-74c44e12e34d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fEJlYXV0eSUyMFByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      price: 24.99,
      imageUrl:
        "https://images.unsplash.com/photo-1512207846876-bb54ef5056fe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fEJlYXV0eSUyMFByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
      price: 14.99,
      imageUrl:
        "https://images.unsplash.com/photo-1512207855369-643452a63d46?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fEJlYXV0eSUyMFByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for Product 4",
      price: 29.99,
      imageUrl:
        "https://images.unsplash.com/photo-1538022890810-8f4000ca9a10?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fEJlYXV0eSUyMFByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description for Product 5",
      price: 19.99,
      imageUrl:
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxCZWF1dHklMjBQcm9kdWN0fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description for Product 6",
      price: 24.79,
      imageUrl:
        "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxCZWF1dHklMjBQcm9kdWN0fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description for Product 7",
      price: 14.37,
      imageUrl:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxCZWF1dHklMjBQcm9kdWN0fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Product 8",
      description: "Description for Product 8",
      price: 22.19,
      imageUrl:
        "https://images.unsplash.com/photo-1530863138121-03aea5f46fd4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxCZWF1dHklMjBQcm9kdWN0fGVufDB8fDB8fHww",
    },
  ];

  const [displayedProducts, setDisplayedProducts] = useState(
    products.slice(0, 4)
  );
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init();
  }, []);

  const handleExploreMore = () => {
    if (showAllProducts) {
      setDisplayedProducts(products.slice(0, 4));
    } else {
      setDisplayedProducts(products);
    }
    setShowAllProducts(!showAllProducts);
  };

  return (
    <section className="my-20 items-center justify-center flex">
      <div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {displayedProducts.map((product) => (
            <div
              key={product.id}
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
                  <p className="text-xl font-bold text-[#F63E7B]">
                    ${product.price}
                  </p>
                  <button
                    className="px-3 py-1 text-sm text-white bg-[#F63E7B] rounded-md"
                    onClick={() => {
                      // Handle adding the product to the cart
                      toast.success("Product sell not available right now!");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-[#F63E7B] text-white font-medium py-3 px-8 rounded-md mt-10 mx-auto block"
          onClick={handleExploreMore}
        >
          {showAllProducts ? "Show Less" : "Explore More"}
        </button>
      </div>
    </section>
  );
};

export default ProductFeature;
