import Image from "next/image";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import Para from "../layout/Para";
import SubHeading from "../layout/SubHeading";
import ButtonP from "../layout/ButtonP";


const CreativeSec = () => {
  return (
    <div className=" py-10 md:py-12 lg:py-14">
      <Container>
        <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[70%] mx-auto">
          <SubHeading
            className="text-center text-sm sm:text-base md:text-lg lg:text-xl yellow-gr font-pop font-bold"
            title="CREATIVE SERVICES"
          />
          <Heading
            className="text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
            title="We Are A Full-Stack Digital Creative
          Consulting Agency"
          />
          <div className="mx-auto">
            <Para
              className=" text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-8"
              title="In our daily life, people usually look for different IT services for that. But from now on, no more worries, our service has the solution for everything. We have"
            />
          </div>
        </div>
        <div className="flex justify-between flex-wrap px-3 md:px-5 gap-y-4 md:gap-y-6 lg:gap-y-8  sm:py-6 md:py-8">
          <div className="w-[48%] sm:w-[31.5%] px-3 py-5 sm:px-5 sm:py-8 lg:px-5 xl:px-7 lg:py-10 xl:py-14 rounded-md text-center  bg-primaryBg">
            <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/graphics_icon_image.png"
                alt="graphics_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-semibold text-base sm:text-lg lg:text-xl
            pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="GRAPHICS DESIGN"
            />
            <Para
              className="font-light text-sm md:text-base lg:text-lg text-para font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[48%] sm:w-[31.5%] px-3 py-5 sm:px-5 sm:py-8 lg:px-5 xl:px-7 lg:py-10 xl:py-14 rounded-md text-center  bg-primary">
            <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/uxdesign_icon_image.png"
                alt="uxdesign_icon_image"
              />
            </div>
            <SubHeading
              className="text-white font-pop font-semibold text-base sm:text-lg lg:text-xl
                pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="UI&UX DESIGN"
            />
            <Para
              className="font-light text-sm md:text-base lg:text-lg text-white font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[48%] sm:w-[31.5%] px-3 py-5 sm:px-5 sm:py-8 lg:px-5 xl:px-7 lg:py-10 xl:py-14 rounded-md text-center   bg-primary sm:bg-primaryBg">
            <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/motiondesign_icon_image.png"
                alt="motiondesign_icon_image"
              />
            </div>
            <SubHeading
              className="text-white sm:text-primary font-pop font-semibold text-base sm:text-lg lg:text-xl
             pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="MOTION DESIGN"
            />
            <Para
              className=" font-light text-sm md:text-base lg:text-lg text-white sm:text-para font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[48%] sm:w-[31.5%] px-3 py-5 sm:px-5 sm:py-8 lg:px-5 xl:px-7 lg:py-10 xl:py-14 rounded-md text-center  bg-primaryBg sm:bg-primary">
            <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/2D&3Ddesign_icon_image.png"
                alt="2D&3Ddesign_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary sm:text-white font-pop font-semibold text-base sm:text-lg lg:text-xl
         pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="2D & 3D DESIGN"
            />
            <Para
              className="font-light text-sm md:text-base lg:text-lg text-para sm:text-white font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[48%] sm:w-[31.5%] px-3 py-5 sm:px-5 sm:py-8 lg:px-5 xl:px-7 lg:py-10 xl:py-14 rounded-md text-center  bg-primaryBg">
            <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/3Danimation_icon_image.png"
                alt="3Danimation_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-semibold text-base sm:text-lg lg:text-xl
             pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="3D ANIMATION"
            />
            <Para
              className=" font-light text-sm md:text-base lg:text-lg text-para font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[48%] sm:w-[31.5%] px-3 py-5 sm:px-5 sm:py-8 lg:px-5 xl:px-7 lg:py-10 xl:py-14 rounded-md text-center  bg-primary">
            <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/3Dmodeling_icon_image.png"
                alt="3Dmodeling_icon_image"
              />
            </div>
            <SubHeading
              className="text-white font-pop font-semibold text-base sm:text-lg lg:text-xl
           pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="3D MODELING"
            />
            <Para
              className=" font-light text-sm md:text-base lg:text-lg text-white font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
        </div>

        <div className="mt-8 md:mt-12 xl:mt-16 text-center">
          <ButtonP title="Read More" />
        </div>
      </Container>
    </div>
  );
};

export default CreativeSec;
