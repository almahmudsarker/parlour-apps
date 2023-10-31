import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";
import { useRef } from "react";
import { saveUser } from "../../api/auth";
import { FaFacebook } from "react-icons/fa";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/navbar/Navbar";

const Login = () => {
  const {
    signIn,
    loading,
    setLoading,
    signInWithGoogle,
    signInWithFacebook,
    resetPassword,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Success");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleReset = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        toast.success("Password check your email for reset link");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-1 text-gray-900">
          <div className="mb-8 text-center">
            <img src="https://i.ibb.co/dtvy93x/logo.png" className="mx-20" />
            <h1 className="text-lg font-medium pt-2 text-gray-400">
              Login With
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#F63E7B] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#F63E7B] bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#F63E7B] w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button
              onClick={handleReset}
              className="text-xs hover:underline hover:text-sky-500 text-gray-400"
            >
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center border m-3 py-2 border-gray-300 rounded-full cursor-pointer"
          >
            <FcGoogle size={32} />
            <p className="ml-10 mr-20">Continue with Google</p>
          </div>
          <div
            onClick={handleFacebookSignIn}
            className="flex justify-center items-center border m-3 py-2 border-gray-300 rounded-full cursor-pointer"
          >
            <FaFacebook size={32} />
            <p className="ml-9 mr-16">Continue with Facebook</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-rose-400 text-[#F63E7B]"
            >
              Create new for free!
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
