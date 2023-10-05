import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="w-full md:w-auto py-2 cursor-pointer">
      <div className="flex flex-row items-center justify-between">
            <Link
              to="/" className="text-pink-600 text-semibold pr-4"
            >Home</Link>
            <Link
              to="/" className="text-pink-600 text-semibold pr-4"
            >Our Portfolio</Link>
            <Link
              to="/" className="text-pink-600 text-semibold pr-4"
            >Our Team</Link>
            <Link
              to="/" className="text-pink-600 text-semibold"
            >Contact Us</Link>
      </div>
    </div>
  );
};

export default Search;
