import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';
import ButtonP from '../layout/ButtonP';

const AboutPartnerSec = () => {
  return (
    <Container>
      <div className="sm:flex justify-between px-3 sm:px-5 xl:px-0 pt-10 sm:pt-16 md:pt-20 lg:pt-24">
        <div className="w-full sm:w-2/4 ">
          <div className="mx-auto sm:mx-0 w-[365px] h-[193px] sm:w-[345px] sm:h-[185px] md:w-[365px] md:h-[193px] lg:w-[480px] lg:h-[240px]  xl:w-[550px] xl:h-[272px] relative">
            <Image fill src="/assets/about-banner.jpg" alt="about-banner" />
          </div>
        </div>
        <div className="w-full sm:w-2/4 sm:pl-6 py-8 sm:py-0">
          <SubHeading
            className="inline-block text-sm md:text-base lg:text-lg xl:text-xl yellow-gr2 font-pop font-bold"
            title="WHO I AM"
          />
          <div className=" leading-[36px] w-[100%]  lg:pt-4 lg:pb-4 sm:leading-[44px] md:leading-[50px]">
            <h2 className=" text-[28px] sm:text-[36px] md:text-[46px] inline font-pop font-semibold text-primary">
            Your Trusted Partner  
            </h2>  &nbsp;
            &nbsp;
            <h2 className=" text-[28px] sm:text-[36px] md:text-[46px]  inline  font-pop font-semibold yellow-gr2">
            For Web App Solution
            </h2>
          </div>
          <Para
            className=" text-sm sm:text-base md:text-sm sm:pb-5 md:pb-6 lg:pb-8 lg:text-lg text-para font-pop"
            title="
            Passionate professionals dedicated to crafting exceptional digital experiences, merging creativity with technology for impactful results."
          />
        </div>
      </div>
      <div className=" flex gap-y-4 sm:gap-y-0 flex-wrap justify-between pt-4 pb-8 lg:pb-11 px-3 sm:px-5 xl:px-0">
        <div className=" w-[48%] sm:w-[31%] text-center px-3 py-4 md:px-5 md:pt-4 md:pb-8 lg:px-7 lg:pt-6 lg:pb-12 shadow-cshadow rounded-lg">
          <SubHeading
            className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                pt-4 pb-2 lg:pt-6 lg:pb-4"
            title="Our Mission"
          />
          <Para
            className=" text-sm sm:text-base lg:text-lg text-para font-pop"
            title="Our mission: To innovate and empower by creating digital solutions that inspire and drive growth."
          />
        </div>
        <div className=" w-[48%] sm:w-[31%] text-center px-3 py-4 md:px-5 md:pt-4 md:pb-8 lg:px-7 lg:pt-6 lg:pb-12 shadow-cshadow rounded-lg">
          <SubHeading
            className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                  pt-4 pb-2 lg:pt-6 lg:pb-4"
            title="Our Values"
          />
          <Para
            className=" text-sm sm:text-base lg:text-lg text-para font-pop"
            title="Guided by integrity, innovation, and collaboration, our values shape our commitment to excellence and client success."
          />
        </div>
        <div className=" w-[48%] mx-auto sm:mx-0 sm:w-[31%] text-center px-3 py-4 md:px-5 md:pt-4 md:pb-8 lg:px-7 lg:pt-6 lg:pb-12 shadow-cshadow rounded-lg">
          <SubHeading
            className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                   pt-4 pb-2 lg:pt-6 lg:pb-4"
            title="Our Vision"
          />
          <Para
            className=" text-sm sm:text-base lg:text-lg text-para font-pop"
            title="Envisioning a future where cutting-edge technology and creative solutions converge to transform businesses worldwide."
          />
        </div>
      </div>
      <div className="text-center pb-10 sm:pb-16 md:pb-20 lg:pb-24">
        <ButtonP title="Learn More" />
      </div>
    </Container>
  );
};

export default AboutPartnerSec;
