import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import Link from "next/link";
import Heading from "./Heading";
import List from "./List";
import ListItem from "./ListItem";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#151515] border-b-8 border-yellowp  ">
      <div className="lg:max-w-container mx-auto  border-b-2 mb-4">
        <div className="flex flex-wrap justify-between gap-y-4  py-5 px-5 sm:py-16 md:py-10 lg:py-10">
        <div className="w-[90%]  sm:w-[35%] lg:w-[25%]">
            <div>
              <Link href="/">
              <div className="w-[85px] h-[81px] md:w-[110px] md:h-[105px] relative">
                <Image fill src="/assets/logo.png" alt="logo" cover />
              </div>
              </Link>
              <p className="text-white mt-6 mr-2">
                In our daily life, people usually look for different IT services
                for that. But from now on, no more worries, our service has the
                solution for everything. Read More.....
              </p>
            </div>
          </div>
          <div className="w-[50%] sm:w-[30%] lg:w-[22%]">
            <div>
              <Heading
                className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold  font-pop   text-yellowp"
                title="Connect Online"
              />
              <div className=" flex mt-4 gap-x-2 text-yellow text-3xl d-flex flex-wrap gap-2">
              <div className="bg-white p-2 duration-200 ease-in-out hover:bg-yellowp rounded-md">
                  <FaFacebookF className="duration-150 ease-in-out  hover:cursor-pointer" />
                </div>
                <div className="bg-white p-2 duration-200 ease-in-out hover:bg-yellowp rounded-md">
                  <AiOutlineTwitter className="duration-150 ease-in-out  hover:cursor-pointer" />
                </div>
                <div className="bg-white p-2 duration-200 ease-in-out hover:bg-yellowp rounded-md">
                  <AiFillInstagram className="duration-150 ease-in-out  hover:cursor-pointer" />
                </div>
                <div className="bg-white p-2 duration-200 ease-in-out hover:bg-yellowp rounded-md">
                  <AiOutlineMail className="duration-150 ease-in-out  hover:cursor-pointer" />
                </div>
                <div className="bg-white p-2 duration-200 ease-in-out hover:bg-yellowp rounded-md">
                  <AiFillLinkedin className="duration-150 ease-in-out  hover:cursor-pointer" />
                </div>
                <div className="bg-white p-2 duration-200 ease-in-out hover:bg-yellowp rounded-md">
                  <BsWhatsapp className="duration-150 ease-in-out  hover:cursor-pointer" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-[50%]  sm:w-[37%]  lg:w-[12%]">
            <div>
              <Heading
                className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold  font-pop   text-yellowp"
                title="Support"
              />
              <List className="font-pop font-light mt-5 text-sm md:text-base  text-white">
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="FAQs"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Contact Us"
                />
              </List>
            </div>
            <div></div>
          </div>
          <div className="w-[50%] sm:w-[63%] lg:w-[17%] mr-auto sm:mr-0">
            <div>
              <Heading
                className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold  font-pop   text-yellowp"
                title="Contact Info"
              />
              <List className="font-pop font-light mt-2 sm:mt-5 text-sm md:text-base text-white">
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Address"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Number"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Email:"
                />
              </List>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center lg:max-w-container mx-auto px-3 lg:px-0 pb-3 ">
        <div>
          <p className="text-white">All right reserved by Dm Abu Hasib</p>
        </div>
        <div className="flex gap-x-2">
          <p className="text-white">Sitemap | </p>
          <p className="text-white"> Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
