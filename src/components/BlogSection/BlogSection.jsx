import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const BlogSection = () => {
  // Dummy blog data (replace with actual data)
  const blogPosts = [
    {
      title: "Top 10 Skincare Tips",
      content:
        "Achieve healthy and glowing skin with these top 10 skincare tips.",
    },
    {
      title: "Trendy Nail Art Ideas",
      content:
        "Explore the latest nail art trends and ideas for your next manicure.",
    },
  ];

  // Initialize AOS (Animate on Scroll) library
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 });
    });
  }, []);

  return (
    <section
      className="bg-gray-100 p-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Blog & Beauty Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105 duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.content}</p>
              <div className="flex items-center mt-2 text-[#F63E7B]">
                <FaHeart className="mr-2" />
                45 Likes
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
