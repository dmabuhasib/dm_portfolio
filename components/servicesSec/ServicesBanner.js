import Image from 'next/image';
import Container from '../layout/Container';
import Heading from '../layout/Heading';

const ServicesBanner = () => {
  return (
    <div className="pt-2">
      <div className="h-[180px] sm:h-[240px] md:h-[300px] lg:h-[380px] xl:h-[400px] flex items-center relative">
        <div className="absolute w-[100%] h-[100%] left-0 top-0 -z-10">
          <div className="w-[100%] h-[100%] relative">
            <Image fill src="/assets/banner2.png" alt="services_banner_image" />
          </div>
        </div>
        <Container>
          <div className="flex justify-center gap-3 md:gap-4">
            <Heading
              className="  text-white font-pop text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
              title="MY"
            />
            <Heading
              className="font-pop text-3xl yellow-gr2 sm:text-4xl md:text-5xl lg:text-7xl font-bold"
              title=" SERVICES"
            />
          </div>
        </Container>
      </div>

      <div className="absolute right-0 top-[26px] sm:top-[24px] md:top-[23px] lg:top-[-12px]"></div>
    </div>
  );
};

export default ServicesBanner;
