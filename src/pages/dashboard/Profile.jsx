import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  // Dummy information
  const address = "123 Main Street, Cityville";
  const country = "Countryland";
  const quotes = [
    "Live, laugh, love.",
    "Be yourself; everyone else is already taken.",
  ];
  const blogPosts = [
    {
      title: "My Journey in React",
      date: "2022-01-01",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      title: "Travel Adventures",
      date: "2022-02-15",
      content: "Consectetur adipiscing elit...",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        My Account
      </h1>
      {/* Branding & Profile Info */}
      <div className="flex flex-col items-center mt-6 -mx-2">
        <Link to="">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src={user?.photoURL}
            alt="avatar"
            referrerPolicy="no-referrer"
          />
        </Link>
        <Link to="">
          <h4 className="mx-2 mt-2 font-medium text-gray-800">
            {user?.displayName}
          </h4>
        </Link>
        <Link to="">
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
            {user?.email}
          </p>
        </Link>

        {/* Additional User Information */}
        <div className="mt-4">
          <p className="mx-2 text-sm text-gray-600">
            <span className="font-medium">User ID:</span> {user?.uid}
          </p>
          <p className="mx-2 text-sm text-gray-600">
            <span className="font-medium">Date of Birth:</span>{" "}
            {user?.dob || "Not specified"}
          </p>
          <p className="mx-2 text-sm text-gray-600">
            <span className="font-medium">Location:</span>{" "}
            {user?.location || "Not specified"}
          </p>
          <p className="mx-2 text-sm text-gray-600">
            <span className="font-medium">Address:</span> {address}
          </p>
          <p className="mx-2 text-sm text-gray-600">
            <span className="font-medium">Country:</span> {country}
          </p>
        </div>

        {/* Quotes */}
        <div className="mt-4">
          <p className="mx-2 text-sm text-gray-600">
            <span className="font-medium">Favorite Quotes:</span>
          </p>
          <ul className="list-disc mx-6 text-sm text-gray-600">
            {quotes.map((quote, index) => (
              <li key={index}>{quote}</li>
            ))}
          </ul>
        </div>

        {/* Blog Section */}
        <div className="mt-4">
          <p className="mx-2 text-sm text-gray-600">
            <span className="font-medium">Latest Blog Posts:</span>
          </p>
          <ul className="mx-6 text-sm text-gray-600">
            {blogPosts.map((post, index) => (
              <li key={index} className="mb-2">
                <strong>{post.title}</strong> - {post.date}
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Add/Edit Profile Button */}
        {/* <Link to="/edit-profile">
          <button className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Edit Profile
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Profile;
