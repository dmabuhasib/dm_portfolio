import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Para from '../layout/Para';

const AboutChosseSec = () => {
  return (
    <div className="pb-20">
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
                title="
                Choose us for unparalleled expertise, innovative solutions, and a track record of delivering exceptional results"
              />
            </div>
          </div>
          <div className="flex flex-wrap px-3 sm:px-5 justify-between md:pt-3 lg:pt-6 gap-y-4 sm:gap-y-6 md:px-">
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 duration-300 ease-in-out rounded-md hover:shadow-cshadow2">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image fill src="/assets/perfomance_icon.png" alt="perfomance_icon_img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Fast Performance"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-pop"
                title="Optimized for a smaller build size, faster dev compilation and dozens of other improvements."
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md duration-300 ease-in-out hover:shadow-cshadow2">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image
                  fill
                  src="/assets/responsive_icon.png"
                  alt="responsive_icon_img"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-2"
                title="Perfect Responsive"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-pop"
                title="My Design is full Perfect for all device. You can visit this design all device easily."
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md duration-300 ease-in-out hover:shadow-cshadow2">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image
                  fill
                  src="/assets/support_icon.png"
                  alt="support_icon_img"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Fast & Friendly Support"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-pop"
                title="I am provide 24 hours support for all clients.You can purchase without hesitation."
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md duration-300 ease-in-out hover:shadow-cshadow2">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image fill src="/assets/Grow_icon.png" alt="Grow_icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Growing Sales"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-pop"
                title="Partner with us to fuel your business growth through tailored strategies and innovative solutions."
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutChosseSec;
