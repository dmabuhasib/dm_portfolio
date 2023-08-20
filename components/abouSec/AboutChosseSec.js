import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';

const AboutChosseSec = () => {
  return (
    <div className="py-20">
      <Container>
        <div>
          <div className="w-[75%] md:w-[65%] mx-auto">
            <SubHeading
              className="text-center text-sm md:text-base lg:text-lg xl:text-xl yellow-gr2 font-pop font-bold"
              title="WHY CHOOSE US"
            />

            <div className=" leading-[36px]  w-[100%] lg:pt-8 lg:pb-4 sm:leading-[44px] md:leading-[58px] text-center">
              <h2 className=" text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] inline font-pop font-semibold text-primary">
                We Help You To Increase
              </h2>
              &nbsp;
              <h2 className=" text-[28px] sm:text-[36px] md:text-[40px]  inline lg:text-[46px] font-pop font-semibold yellow-gr2">
                Your Sale Through Solution
              </h2>
            </div>
            <div className="w-[95%] sm:w-[90%] md:w-[100%] lg:w-[70%] mx-auto">
              <Para
                className="text-center text-sm sm:text-base lg:text-lg text-para font-pop pb-8"
                title="In our daily life, people usually look for different IT services 
            for that. But from now on, no more worries,"
              />
            </div>
          </div>
          <div className="flex flex-wrap px-3 sm:px-5 justify-between md:pt-3 lg:pt-6 gap-y-4 sm:gap-y-6 md:px-">
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image fill src="/assets/brand-icon.png" alt="brand-icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Branding Stategy"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-pop"
                title="We will help you with all your needs. In fact, you will get all kinds of services "
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image
                  fill
                  src="/assets/social-icon.png"
                  alt="brand-icon-img"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-2"
                title="Professional Marketing"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-pop"
                title="We will help you with all your needs. In fact, you will get all kinds of services "
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image
                  fill
                  src="/assets/design-icon.png"
                  alt="brand-icon-img"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Unique Design"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-pop"
                title="We will help you with all your needs. In fact, you will get all kinds of services "
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image fill src="/assets/grow-icon.png" alt="brand-icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Growing Sales"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-pop"
                title="We will help you with all your needs. In fact, you will get all kinds of services "
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutChosseSec;
