import React from 'react'
import 'slick-carousel/slick/slick.css';  
import Container from '../layout/Container'
import Image from 'next/image'
import Slider from 'react-slick'

import { GrNext, GrPrevious } from 'react-icons/gr';

const ClientSec = () => {
    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
          <div
            className=" absolute top-[95%]  sm:top-[51%] md:top-[55%] left-[50%] sm:left-[-75px] md:left-[-90px] lg:left-[-105px]  xl:left-[-120px] rounded-full shadow-cshadow3 bg-[#4F7EBF] p-3 md:p-4  !inline-block z-50"
            style={{ ...style, color:'white' }}
            onClick={onClick}
          >
            <GrNext className="text-2xl md:text-3xl" />
          </div>
        );
      }
      function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
          <div
            className=" absolute top-[95%] sm:top-[33%] md:top-[35%] left-[30%] sm:left-[-75px] md:left-[-90px] lg:left-[-105px] xl:left-[-120px] shadow-cshadow3 rounded-full yellow-gr p-3 md:p-4  !inline-block z-50"
            style={{ ...style }}
            onClick={onClick}
          >
            <GrPrevious className="text-2xl md:text-3xl" />
          </div>
        );
      }


    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
    
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    }

  return (
    <>
    <Container>
        <div className='  md:pt-[60px] lg:pt-[80px] px-3 sm:px-5 xl:px-0'>

          <div className=" leading-[36px] sm:leading-[44px] md:leading-[58px]">
            <h2 className=" text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] inline font-monA font-semibold text-primary">
            Client’s get 
            </h2> &nbsp;
            <h2 className=" text-[32px] sm:text-[36px] md:text-[40px]  inline lg:text-[50px] font-monA font-semibold text-yellowp">
              always exceptional
            </h2>
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px]  lg:text-[50px] font-monA font-semibold text-primary">
            works From me .......
            </h2>
          </div>

<div className='w-[85%] ml-10 my-7 md:my-10 sm:ml-auto'>

      <Slider {...settings}>
            <div className="max-w-[90%] shadow-cshadow my-7 mx-1">
                <div className="w-[100%] h-[300px] relative ">
                  <Image
                    fill
                    src="/assets/Screenshot_15.jpg"
                    alt="review-image"
                  />
                </div>
            </div>
            <div className="max-w-[90%] shadow-cshadow my-7 mx-1">
                <div className="w-[100%] h-[300px] relative ">
                  <Image
                    fill
                    src="/assets/Screenshot_15.jpg"
                    alt="review-image"
                  />
                </div>
            </div>
            <div className="max-w-[90%] shadow-cshadow my-7 mx-1">
                <div className="w-[100%] h-[300px] relative ">
                  <Image
                    fill
                    src="/assets/Screenshot_15.jpg"
                    alt="review-image"
                  />
                </div>
            </div>
            <div className="max-w-[90%] shadow-cshadow my-7 mx-1">
                <div className="w-[100%] h-[300px] relative ">
                  <Image
                    fill
                    src="/assets/Screenshot_15.jpg"
                    alt="review-image"
                  />
                </div>
            </div>
            
          </Slider>
</div>
        </div>
    </Container>
          </>
  )
}

export default ClientSec