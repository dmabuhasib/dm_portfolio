import React from 'react';
import Container from '../layout/Container';
import Para from '../layout/Para';
import Link from 'next/link';
import ButtonP from '../layout/ButtonP';
import {BiLogoUpwork} from 'react-icons/bi'

 const WorkSec = () => {
  return (
    <>
      <Container>
        <div className="sm:flex justify-between px-3 sm:px-5 xl:px-0 mt-[120px]">
          <div className="w-[95%] sm:w-2/4 md:w-[50%] mt-4 mb-6 sm:mb-28  md:mb-36 lg:mb-40">
            <div className="leading-[36px] sm:leading-[44px] md:leading-[58px]">
              <h2 className=" text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-monA font-semibold text-primary">
                Work For All This
              </h2>
              <h2 className="  text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-monA font-semibold text-yellowp">
                Brand & Client
              </h2>
            </div>
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter pb-6 md:pb-6 lg:pb-10 pt-5 md:pt-6 "
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
          <div className="w-[95%] sm:w-2/4 md:w-[60%]">
            <div className=" w-[420px] h-[420px] relative mx-auto shadow-cshadow2 rounded-full">
              <div className="w-[70px] h-[70px] absolute top-[7%] duration-300 ease-in-out left-[42%] hover:bg-yellowp hover:cursor-pointer hover:top-[5%] shadow-cshadow bg-white rounded-full "><BiLogoUpwork /></div>
              <div className="w-[70px] h-[70px] absolute top-[16%] right-[17%]  shadow-cshadow bg-white rounded-full">
                2
              </div>
              <div className="w-[70px] h-[70px] absolute top-[16%] left-[17%] shadow-cshadow bg-white rounded-full ">
                3
              </div>
              <div className="w-[70px] h-[70px] absolute top-[40%] left-[42%] shadow-cshadow bg-white rounded-full">
                4
              </div>
              <div className="w-[70px] h-[70px] absolute top-[40%] left-[8%] shadow-cshadow bg-white rounded-full">
                5
              </div>
              <div className="w-[70px] h-[70px] absolute top-[40%] right-[8%] shadow-cshadow bg-white rounded-full">
                6
              </div>
              <div className="w-[70px] h-[70px] absolute bottom-[7%] left-[42%] shadow-cshadow bg-white rounded-full">
                7
              </div>
              <div className="w-[70px] h-[70px] absolute bottom-[16%] left-[17%] shadow-cshadow bg-white rounded-full">
                8
              </div>
              <div className="w-[70px] h-[70px] absolute bottom-[16%] right-[17%]  shadow-cshadow bg-white rounded-full">
                9
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};


export default WorkSec;