import React from 'react';
import Container from '../layout/Container';
import Para from '../layout/Para';
import Link from 'next/link';
import ButtonP from '../layout/ButtonP';
import { BiLogoUpwork } from 'react-icons/bi';
import { BsSkype, BsWordpress } from 'react-icons/bs';
import { AiOutlineDropbox } from 'react-icons/ai';
import { SiFreelancer, SiMailchimp, SiFiverr } from 'react-icons/si';
import { FaLinkedin, FaAws } from 'react-icons/fa';

const BrandCSec = () => {
  return (
    <>
      <Container>
        <div className="sm:flex px-3 sm:px-5 xl:px-0 mt-[140px]">
          <div className="w-[95%] sm:w-[45%] md:w-[50%] mt-4 mb-6 sm:mb-28  md:mb-36 lg:mb-40">
            <div className="leading-[36px] sm:leading-[44px] md:leading-[58px]">
              <h2 className=" text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-pop font-semibold text-primary">
                Work For All This
              </h2>
              <h2 className=" inline-block text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-pop font-semibold yellow-gr2">
                Brand & Client
              </h2>
            </div>
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-pop pb-6 md:pb-6 lg:pb-12 pt-3 md:pt-4"
              title="Lorem ipsum dolor sit amet consectetur. Eget pellentesque
            congue facilisi eget viverra leo tempor aliquet . Commodo et  
             venenatis pellentesque. Commodo et montes id."
            />
            <div className="flex gap-4">
              <Link href="/">
                <ButtonP title="Details" />
              </Link>
            </div>
          </div>
          <div className=" sm:w-[45%] md:w-[50%]">
            <div className=" w-[370px] h-[370px] lg:w-[420px] lg:h-[420px] flex items-center relative mx-auto shadow-cshadow2 rounded-full">
              <div className=" w-[75%] h-[75%] flex items-center justify-center bg-white mx-auto  rounded-full shadow-cshadow2">
                <div className=" w-[55%] h-[55%] bg-white mx-auto  rounded-full shadow-cshadow2">
                  <div className="w-[70px] h-[70px] absolute top-[7%] duration-300 ease-in-out left-[42%]  hover:cursor-pointer hover:top-[5%] hover:shadow-cshadow3 shadow-cshadow bg-white rounded-full ">
                    <BiLogoUpwork className="text-[36px] text-green-500 mx-auto mt-[17px]" />
                  </div>
                  <div className="w-[70px] h-[70px] absolute top-[16%] right-[17%]  shadow-cshadow  rounded-full duration-300 ease-in-out hover:shadow-cshadow3 hover:cursor-pointer hover:top-[14%] bg-white">
                    <SiFreelancer className="text-[36px] text-[#29B2FE] mx-auto mt-[17px]" />
                  </div>
                  <div className="w-[70px] h-[70px] absolute top-[16%] left-[17%] shadow-cshadow bg-white rounded-full duration-300 ease-in-out hover:shadow-cshadow3 hover:cursor-pointer hover:top-[14%] ">
                    <BsWordpress className="text-[36px] text-[#444444] mx-auto mt-[17px]" />
                  </div>
                  <div className="w-[70px] h-[70px] absolute top-[41%] left-[41%] lg:top-[42%] lg:left-[42%] shadow-cshadow rounded-full bg-white  duration-300 ease-in-out hover:shadow-cshadow3 hover:cursor-pointer hover:top-[38%]">
                    <FaLinkedin className="text-[36px] text-[#0270AD] mx-auto mt-[17px]" />
                  </div>
                  <div className="w-[70px] h-[70px] absolute top-[40%] left-[6%] shadow-cshadow bg-white rounded-full duration-300 ease-in-out hover:shadow-cshadow3 hover:cursor-pointer hover:top-[38%]">
                    <SiFiverr className="text-[36px] text-[#00AB2A] mx-auto mt-[17px]" />
                  </div>
                  <div className="w-[70px] h-[70px] absolute top-[40%] right-[6%] shadow-cshadow bg-white rounded-full duration-300 ease-in-out hover:shadow-cshadow3 hover:cursor-pointer hover:top-[38%]">
                    <FaAws className="text-[36px] text-[#F79400] mx-auto mt-[17px]" />
                  </div>
                  <div className="w-[70px] h-[70px] absolute bottom-[7%] left-[42%] shadow-cshadow bg-white rounded-full duration-300 ease-in-out hover:shadow-cshadow3 hover:cursor-pointer hover:bottom-[9%]">
                    <SiMailchimp className="text-[36px] text-[#6F4F44] mx-auto mt-[17px]" />
                  </div>
                  <div className="w-[70px] h-[70px] absolute bottom-[16%] left-[17%] shadow-cshadow bg-white rounded-full duration-300 ease-in-out hover:shadow-cshadow3 hover:cursor-pointer hover:bottom-[18%]">
                    <BsSkype className="text-[36px] text-[#01A6E2] mx-auto mt-[17px]" />
                  </div>
                  <div className="w-[70px] h-[70px] absolute bottom-[16%] right-[17%]  shadow-cshadow bg-white rounded-full duration-300 ease-in-out hover:shadow-cshadow3 hover:cursor-pointer hover:bottom-[18%]">
                    <AiOutlineDropbox className="text-[36px] text-[#007FE6] mx-auto mt-[17px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BrandCSec;
