import Image from 'next/image';
import ButtonP from '../layout/ButtonP';
import Container from '../layout/Container';
import Para from '../layout/Para';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';



const Banner = () => {

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container>
        <div className="sm:flex justify-between pb-24 sm:pt-0 sm:pb-7 md:pb-0 sm: px-3 sm:px-5 xl:px-0">
          <div className="w-[95%] sm:w-2/4 md:w-[60%] mt-10 mb-6 sm:mb-28 md:mt-16 md:mb-36 lg:mt-20 lg:mb-40">
         
          <Slider {...settings}>
          <div className=" leading-[36px]  md:leading-[50px] lg:leading-[70px]">
              <h2 className="text-[30px] md:text-[40px] lg:text-[60px] font-pop font-semibold text-primary">
                Hi ! I Am
              </h2>
              <h2 className=" text-[30px] md:text-[40px] lg:text-[60px] font-pop font-semibold yellow-gr2">
              
                Dm Abu Hasib
              </h2>
            </div>
            <div className=" leading-[36px] md:leading-[50px] lg:leading-[70px]">
              <h2 className="text-[30px] md:text-[40px] lg:text-[60px] font-pop font-semibold text-primary">
               I Am A
              </h2>
              <h2 className=" text-[30px] md:text-[40px] lg:text-[60px] font-pop font-semibold yellow-gr2">
              Full Stack Developer
              </h2>
            </div>
          
          </Slider>
          <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter pt-2 lg:pt-4 pb-4 md:pb-6 lg:pb-10"
              title="Harness the power of our expertise, and we'll magnify your returns twofold. No empty promises, just dedicated work that speaks volumes through your account manager. Unlock your business's potential and become the town's talk with Magvide by your side. Let's create digital marketing magic together."
            />
         
            <div className="flex gap-4">
              <Link href="/contact">
                <ButtonP title="Hire Me" />
              </Link>
            </div>
          </div>
          <div className="w-[100%] mx-auto sm:w-2/4 md:[40%] md:mt-16 lg:mt-10">
            <div className="relative  w-[100%] h-[320px] lg:w-[461px] lg:h-[461px] mx-auto my-auto">
              <Image fill src="/assets/banner_image2.png" alt="banner-image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};




export default Banner;
