import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src="./assets/images/Sorry, This page is not found..png" alt="error" />
      <img src="./assets/images/Frame.png" alt="404" />
      <Link to="/"><button className="w-[300px] h-[64px] rounded-xl text-white bg-[#F63E7B]">Back to Home</button></Link>
    </div>
  );
}