import Container from '../layout/Container';
import Para from '../layout/Para';
import Link from 'next/link';
import ButtonP from '../layout/ButtonP';
import Image from 'next/image'; 

const ServicePart = () => {
  return (
    <Container>
      <div className="sm:flex justify-between flex-wrap pb-24 sm:pt-0 sm:pb-7 md:pb-0 sm: px-3 sm:px-5 xl:px-0 sm:mb-10 md:mb-[40px]">
        <div className="w-[95%] sm:w-[50%] md:w-[60%] mt-4 mb-6 sm:mb-28  md:mb-36 lg:mb-40">
          <div className="leading-[36px] sm:leading-[44px] md:leading-[58px]">
            <h2 className=" text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-pop font-semibold text-primary">
              My Awesome
            </h2>
            <h2 className=" inline-block text-[32px] yellow-gr2 sm:text-[36px] md:text-[40px] lg:text-[50px] font-pop font-semibold ">
              Services
            </h2>
          </div>
          <Para
            className=" text-sm sm:text-base lg:text-lg text-para font-inter pb-6 md:pb-6 lg:pb-10 pt-3 md:pt-4 "
            title="Harness the power of our expertise, and we'll magnify your returns twofold. No empty promises, just dedicated work that speaks volumes through your account manager."
          />
          <div className="flex gap-4">
            <Link href="/">
              <ButtonP title="Download Resume" />
            </Link>
          </div>
        </div>
        <div className=" w-[80%] sm:w-[40%] md:w-[35%] xl:w-[30%] mx-auto sm:mx-0 mt-[70px] sm:mt-0">
          <div className="w-[100%] py-7 px-3 lg:py-12 lg:px-4 rounded-xl duration-500 ease-in-out shadow-cshadow3 hover:mr-[-15px] sm:hover:mr-0 sm:hover:mt-[-30px] hover:cursor-pointer">
            <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mx-auto relative">
              <Image
                fill
                src="/assets/backend_icon.png"
                alt="frontend_icon_image"
              />
            </div>
            <h2 className=" text-center text-[20px] lg:text-[24px] pt-2 lg:pt-7 font-mon font-semibold text-primary">
              Front End Development
            </h2>
            <Para
              className=" text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-3 md:pb-6 lg:pb-10 md:pt-4 "
              title="Lorem ipsum dolor sit  consectetur.
              Pellentesque eleifend interdum  amet
              donec pellentesque eget nec ."
            />
            <div className="text-center">
              <Link href="/services">
                <button
                  className="text-yellowp rounded duration-300 ease-in-out bg-white font-bold px-6 py-2 shadow-cshadow3
            hover:bg-yellowp hover:text-white"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex sm:h-[260px] lg:h-[400px] flex-wrap justify-center sm:justify-end gap-x-14 md:gap-x-6 lg:gap-x-10 w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%]   mx-auto sm:mx-0 mt-[70px] sm:mt-0 ">
          <div className="w-[80%] sm:w-[40%] md:w-[35%] xl:w-[30%] mb-16 sm:0 sm:mt-[-40px] md:mt-[-150px]">
            <div className=" py-7 px-3 lg:py-12 lg:px-4 rounded-xl duration-500 ease-in-out shadow-cshadow3 hover:mr-[-15px] sm:hover:mr-0 sm:hover:mt-[-30px] hover:cursor-pointer">
              <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mx-auto relative">
                <Image
                  fill
                  src="/assets/backend_icon2.png"
                  alt="backend_icon_image"
                />
              </div>
              <h2 className=" text-center text-[20px] lg:text-[24px] pt-2 lg:pt-7 font-mon font-semibold text-primary">
                Back End Development
              </h2>
              <Para
                className=" text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-3 md:pb-6 lg:pb-10 md:pt-4 "
                title="Lorem ipsum dolor sit  consectetur.
              Pellentesque eleifend interdum  amet
              donec pellentesque eget nec ."
              />
              <div className="text-center">
                <Link href="/services">
                  <button
                    className="text-yellowp rounded duration-300 ease-in-out bg-white font-bold px-6 py-2 shadow-cshadow3
            hover:bg-yellowp hover:text-white"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-[80%] sm:w-[40%] md:w-[35%] xl:w-[30%] sm:mt-[-40px] sm:mr-10 md:mr-0 md:mt-[-70px]  lg:mt-[-20px] lg:mr-10 xl:mr-20">
            <div className=" py-7 px-3 lg:py-12 lg:px-4 rounded-xl duration-500 ease-in-out shadow-cshadow3 hover:mr-[-15px] sm:hover:mr-0 sm:hover:mt-[-30px] hover:cursor-pointer">
              <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mx-auto relative">
                <Image
                  fill
                  src="/assets/fullstack_icon.png"
                  alt="fullstack_icon_image"
                />
              </div>
              <h2 className=" text-center text-[20px] lg:text-[24px] pt-2 lg:pt-7 font-mon font-semibold text-primary">
                FullStack Development
              </h2>
              <Para
                className=" text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-3 md:pb-6 lg:pb-10 md:pt-4 "
                title="Lorem ipsum dolor sit  consectetur.
              Pellentesque eleifend interdum  amet
              donec pellentesque eget nec ."
              />
              <div className="text-center">
                <Link href="/services">
                  <button
                    className="text-yellowp rounded duration-300 ease-in-out bg-white font-bold px-6 py-2 shadow-cshadow3
            hover:bg-yellowp hover:text-white"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicePart;
