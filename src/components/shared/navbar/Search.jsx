import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
const Search = () => {
  const [cart] = useCart();
  return (
    <div className="w-full md:w-auto py-2 cursor-pointer hidden md:block">
      <div className="flex flex-row items-center justify-between">
        <Link to="/" className="text-[#474747] text-semibold pr-4">
          Home
        </Link>
        <Link to="/" className="text-[#474747] text-semibold pr-4">
          About
        </Link>
        <Link to="/" className="text-[#474747] text-semibold pr-4 ">
          <div>
            <FaOpencart className="inline-block mr-2" />
            <small className="bg-[#f86e9c] rounded-full text-white absolute px-1 top-[40px] right-[908px]">
              +{cart?.length || 0}
            </small>
          </div>
        </Link>
        <Link to="/" className="text-[#474747] text-semibold">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Search;
