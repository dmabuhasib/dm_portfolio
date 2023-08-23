import Image from "next/image";
import Link from "next/link";
import SubHeading from "../layout/SubHeading";
import Para from "../layout/Para";
import ButtonP from "../layout/ButtonP";
import Container from "../layout/Container";

const OfferSec = () => {
  return (
    <div className="py-10 md:py-14">
      <Container>
        <div className="w-[95%] sm:w-[85%] lg:w-[65%] mx-auto">
          <SubHeading
            className=" text-center text-sm md:text-base lg:text-lg xl:text-xl yellow-gr2 font-pop font-bold"
            title="WHAT I OFFER"
          />
           <div className=" leading-[36px] lg:pt-8 lg:pb-4 sm:leading-[44px] md:leading-[58px] text-center">
            <h2 className=" text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] inline font-pop font-semibold text-primary">
            My Services
            </h2>
            &nbsp; &nbsp;
            <h2 className=" text-[28px] sm:text-[36px] md:text-[40px]  inline lg:text-[56px] font-pop font-semibold yellow-gr2">
            Category
            </h2>
          
          </div>
          <div className=" w-[100%] sm:w-[90%] mx-auto">
            <Para
              className=" text-center text-sm sm:text-base lg:text-lg text-para font-pop pb-10"
              title="Explore a range of expert services tailored to your needs, from dynamic web development and responsive design to seamless e-commerce solutions. Elevate your online presence with us"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-2/4 pr-4 sm:pr-16 md:pr-24 border-r-2 border-primary border-dashed">
            <Link href="/services/creativeServices">

            <div className="w-[90%] hover:shadow-cshadow2 delay-75 ml-auto shadow-cshadow p-3 sm:p-5 md:p-7 rounded-md relative mt-48 sm:mt-48 lg:mt-52">
              <div className="w-10 h-10  sm:w-16 sm:h-16 md:w-20 md:h-20  bg-gradient-to-r from-[#17BD8D] to-[#FFE53B] flex rounded-[50%] absolute top-[17%] sm:top-[33%] right-[-122px] sm:right-[-97px] md:right-[-137px]">
                <Para
                  className="text-white font-bold text-base sm:text-xl md:text-2xl mx-auto my-auto"
                  title="02"
                />
              </div>
              <div className="w-[35px] h-[35px] sm:w-[80px] sm:h-[80px] relative">
                <Image
                  fill
                  src="/assets/webdevelopment.png"
                  alt="webdevelopment_icon"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
               pt-1 pb-2 lg:pt-2 lg:pb-4"
                title="Web Development"
              />
              <Para
                className="  text-xs sm:text-base lg:text-lg text-para font-pop"
                title="Expert web development that brings visions to life, creating dynamic sites with seamless functionality and exceptional user experiences."
              />
            </div>
            </Link>
            <Link href="/services/softwareDevelopment">

            <div className="w-[90%] hover:shadow-cshadow2 delay-75  ml-auto shadow-cshadow p-3 sm:p-5 md:p-7 rounded-md relative mt-32 lg:mt-40">
              <div className="w-10 h-10   sm:w-16 sm:h-16 md:w-20 md:h-20  bg-gradient-to-r from-[#00E5FF] to-[#1200FF] flex rounded-[50%] absolute top-[40%] sm:top-[33%] right-[-122px] sm:right-[-97px] md:right-[-137px]">
                <Para
                  className="text-white font-bold text-base sm:text-xl md:text-2xl mx-auto my-auto"
                  title="04"
                />
              </div>
              <div className="w-[32px] h-[32px] sm:w-[80px] sm:h-[80px] relative">
                <Image
                  fill
                  src="/assets/wordpress_icon2.png"
                  alt="wordpress_icon"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-1 pb-2 lg:pt-2 lg:pb-4"
                title="WordPress"
              />
              <Para
                className=" text-xs sm:text-base lg:text-lg text-para font-pop"
                title="
                Harness the power of WordPress for dynamic and customizable websites, simplifying content management and enhancing user engagement."
              />
            </div>
            </Link>
          </div>
      
          <div className="w-2/4 pl-4 sm:pl-16 md:pl-24">
            <Link href="/services/digitalMarketing">

            <div className="w-[90%] hover:shadow-cshadow2 delay-75  shadow-cshadow p-3 sm:p-5 md:p-7 rounded-md relative mb-28 lg:mb-40">
              <div className=" w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20  bg-gradient-to-r from-[#FECDA4] to-[#F54D77] flex rounded-[50%] absolute  top-[33%] left-[-122px] sm:left-[-98px] md:left-[-137px]">
                <Para
                  className="text-white font-bold text-base sm:text-xl md:text-2xl mx-auto my-auto"
                  title="01"
                />
              </div>

              <div className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] relative">
                <Image
                  fill
                  src="/assets/webdesing_Icon.png"
                  alt="webdesing_Icon"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-1 pb-2 lg:pt-4 lg:pb-4"
                title="Web Design"
              />
              <Para
                className="  text-xs sm:text-base lg:text-lg text-para font-pop"
                title="Our web designs combine creativity and functionality, delivering engaging user experiences and impactful online presence."
              />
            </div>
            </Link>
            <Link href="/services/webDesingDev">

            <div className="w-[90%] hover:shadow-cshadow2 delay-75  shadow-cshadow p-3 sm:p-5 md:p-7 rounded-md relative">
              <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#FF8EEE] to-[#AD00FF] flex rounded-[50%] absolute top-[75%]  sm:top-[33%] left-[-122px]  sm:left-[-98px] md:left-[-137px]">
                <Para
                  className="text-white font-bold text-base sm:text-xl md:text-2xl mx-auto my-auto"
                  title="03"
                />
              </div>
              <div className="w-[40px] h-[34px] sm:w-[80px] sm:h-[80px] relative">
                <Image
                  fill
                  src="/assets/uiux.png"
                  alt="uiux_icon"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                  pt-1 pb-2 lg:pt-2 lg:pb-4"
                title="Ui/UX Design"
              />
              <Para
                className="  text-xs sm:text-base lg:text-lg text-para font-pop"
                title="Creating seamless and visually appealing user experiences through expert UI/UX design, enhancing engagement and satisfaction."
              />
            </div>
            </Link>
          </div>
        </div>
        <div className="mt-16 text-center">
          <ButtonP title="Get Started Now" />
        </div>
      </Container>
    </div>
  );
};

export default OfferSec;
