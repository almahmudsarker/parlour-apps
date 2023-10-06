// import Img from '../../../assets/images/logo.png'
import { BsFillPinMapFill } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import Container from '../Container';
const Footer = () => {
  return (
    // <footer className="footer text-center py-12 bg-transparent text-gray-500">
    //   <div>
    //     <img
    //       className='mx-auto mb-1'
    //       width="150"
    //       height="150"
    //       viewBox="0 0 24 24"
    //       src={Img}
    //       alt=""
    //     />
    //     <p className="font-bold">
    //       BEAUTY SALON since 2023
    //     </p>
    //     <p className='my-1'>Copyright © 2023 - All right reserved</p>
    //   </div>
    //   <div>
    //     <div className="flex flex-1 justify-center gap-4">
    //       <a>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           className="fill-current"
    //         >
    //           <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
    //         </svg>
    //       </a>
    //       <a>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           className="fill-current"
    //         >
    //           <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
    //         </svg>
    //       </a>
    //       <a>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           className="fill-current"
    //         >
    //           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <div className="bg-[#F63E7B] text-white">
      <Container>
        <div className='flex justify-between py-20'>
        <div className='flex'>
          <BsFillPinMapFill className="w-6 h-6 mr-2" />
          <p>
            #000 (0th Floor), Road #00,
            <br /> New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div className='flex flex-col'>
          <span class=" text-lg md:mb-3 font-semibold">Company</span>
          <a class="link link-hover">About</a>
          <a class="link link-hover">Projects</a>
          <a class="link link-hover">Our Tems</a>
          <a class="link link-hover">Terms condition</a>
          <a class="link link-hover">Submit listing</a>
        </div>
        <div className='flex flex-col'>
          <span class=" text-lg md:mb-3 font-semibold">Quick Links</span>
          <a class="link link-hover">Floor</a>
          <a class="link link-hover">Rentals</a>
          <a class="link link-hover">Salse</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Our Blogs</a>
        </div>
        <div className='flex flex-col'>
          <span class=" text-lg md:mb-3 font-semibold">About Us</span>
          <p className="w-full lg:w-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium natus, maiores asperiores obcaecati numquam soluta
            dicta? Harum doloremque
          </p>
          <div className="flex gap-6 mt-2 ">
            <BsInstagram className="w-6 h-6" />
            <BsLinkedin className="w-6 h-6" />
            <BsYoutube className="w-6 h-6" />
            <BsFacebook className="w-6 h-6" />
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
