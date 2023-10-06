import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
// import { useRef } from "react";
import { saveUser } from "../../api/auth";
import Navbar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";

const SignUp = () => {
    const { loading, setLoading, signInWithGoogle, createUser, updateUserProfile } =
      useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

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

const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    //image upload
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            updateUserProfile(name, imageUrl)
              .then(() => {
                toast.success("Signup successful");
                saveUser(result.user);
                navigate(from, { replace: true });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
    return
}

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen p-10">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900">
        <div className="mb-8 text-center">
        <img src="https://github.com/almahmudsarker/jerins-parlour/blob/main/src/assets/images/logo.png?raw=true" className="mx-24 mb-4" />
          <h1 className="text-xl font-medium text-gray-400">Create an account</h1>
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
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#F63E7B] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
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
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center border m-3 py-2 border-gray-300 rounded-full cursor-pointer"
        >
          <FcGoogle size={32} />
          <p className="ml-10 mr-16">Continue with Google</p>
        </div>
        <div
          // onClick={}
          className="flex justify-center items-center border m-3 py-2 border-gray-300 rounded-full cursor-pointer"
        >
          <FaFacebook size={32} />
          <p className="ml-9 mr-12">Continue with Facebook</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-[#F63E7B]"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SignUp;