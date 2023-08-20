import Image from 'next/image';
import ButtonP from '../layout/ButtonP';
import Container from '../layout/Container';
import Para from '../layout/Para';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="sm:flex justify-between pb-24 sm:pt-0 sm:pb-7 md:pb-0 sm: px-3 sm:px-5 xl:px-0">
          <div className="w-[95%] sm:w-2/4 md:w-[60%] mt-10 mb-6 sm:mb-28 md:mt-16 md:mb-36 lg:mt-20 lg:mb-40">
            <div className=" leading-[48px] md:leading-[58px] lg:leading-[70px]">
              <h2 className="text-[40px] md:text-[50px] lg:text-[64px] font-pop font-semibold text-primary">
                Hi ! I Am
              </h2>
              <h2 className=" text-[40px] md:text-[50px] lg:text-[64px] font-pop font-semibold text-yellowp">
                Dm Abu Hasib
              </h2>
            </div>

            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-pop pb-6 md:pb-6 lg:pb-10 pt-5 md:pt-6 "
              title="Harness the power of our expertise, and we'll magnify your returns twofold. No empty promises, just dedicated work that speaks volumes through your account manager."
            />
            <div className="flex gap-4">
              <Link href="/">
                <ButtonP title="Hire Me" />
              </Link>
            </div>
          </div>
          <div className="w-[100%] mx-auto sm:w-2/4 md:[40%] md:mt-16 lg:mt-10">
            <div className="relative  w-[100%] h-[320px] lg:w-[461px] lg:h-[461px] mx-auto my-auto">
              <Image fill src="/assets/home-1.gif" alt="banner-image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
