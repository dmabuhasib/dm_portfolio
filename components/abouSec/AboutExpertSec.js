import Image from "next/image";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import Para from "../layout/Para";

const AboutExpertSec = () => {
  return (
    <div className="bg-[#F0FBFF] py-8 sm:py-10 md:py-16 lg:py-20">
      <Container>
        <div className="px-3 sm:px-5 xl:px-0">
          <div className="w-[100%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto">
            <SubHeading
              className="text-center text-sm md:text-base lg:text-lg xl:text-xl yellow-gr font-pop font-bold"
              title="EXPERTS"
            />
            <Heading
              className="text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl-7 lg:leading-[54px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
              title="Meet With Our Experts"
            />
          </div>

          <div className="flex flex-wrap gap-y-4 justify-between pt-8 sm:pt-10 lg:pt-14">
            <div className="w-[48%] sm:w-[31.5%] lg:w-[31%] xl:w-[30%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[180px] sm:h-[220px] md:h-[240px] lg:h-[300px] xl:h-[340px] relative">
                <Image
                  fill
                  src="/assets/expert_image_1.png"
                  alt="expert_image_1"
                />
              </div>
              <div className=" rounded-b-3xl pt-10 lg:pt-12 mt-[-26px] text-center">
                <SubHeading
                  className="font-pop font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
                  title="Devon Lane"
                />
                <Para
                  className="text-xs sm:text-sm lg:text-base font-medium text-primary font-pop  sm:py-1 lg:py-2"
                  title="Graphic Designer"
                />
              </div>
            </div>
            <div className="w-[48%] sm:w-[31.5%] lg:w-[31%] xl:w-[30%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[180px] sm:h-[220px] md:h-[240px] lg:h-[300px] xl:h-[340px] relative">
                <Image
                  fill
                  src="/assets/expert_image_2.png"
                  alt="expert_image_2"
                />
              </div>
              <div className=" rounded-b-3xl pt-10 lg:pt-12 mt-[-26px] text-center">
                <SubHeading
                  className="font-pop font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
                  title="Jane Cooper"
                />
                <Para
                  className="text-xs sm:text-sm lg:text-base font-medium text-primary "
                  title="Developer"
                />
              </div>
            </div>
            <div className=" mx-auto sm:mx-0 w-[48%] sm:w-[31.5%] lg:w-[31%] xl:w-[30%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[180px] sm:h-[220px] md:h-[240px] lg:h-[300px] xl:h-[340px] relative">
                <Image
                  fill
                  src="/assets/expert_image_3.png"
                  alt="expert_image_3"
                />
              </div>
              <div className=" rounded-b-3xl pt-10 lg:pt-12 mt-[-26px] text-center">
                <SubHeading
                  className="font-pop font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
                  title="John Henry"
                />
                <Para
                  className="text-xs sm:text-sm lg:text-base font-medium text-primary "
                  title="Digital Marketer SEO Specialist"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutExpertSec;
