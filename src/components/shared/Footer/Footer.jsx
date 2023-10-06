import { BsFillPinMapFill } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import Container from '../Container';
const Footer = () => {
  return (
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
