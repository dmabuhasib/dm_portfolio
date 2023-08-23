import React from 'react'
import Container from '../layout/Container'
import Para from '../layout/Para'
import Image from 'next/image'
import Link from 'next/link'
import ButtonP from '../layout/ButtonP'

const ProjectSec = () => {
  return (
    <Container>
        <div className='py-[50px]  lg:py-[100px]'>
        <div className="flex justify-center">
              <h2 className=" text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-pop font-semibold text-primary">
                Recent
              </h2> &nbsp; &nbsp;
              <h2 className="  text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-pop font-semibold yellow-gr2">
                Project
              </h2>

            </div>
              <Para className="text-center w-[100%] xl:px-0 sm:w-[90%] md:w-[80%] lg:w-[70%] px-5  mx-auto pt-6 pb-10"
              title="Lorem ipsum dolor sit amet consectetur. Amet rhoncus id  uam ac sodales proin habitasse. Semper ac id enim aenean dolor tortor scelerisque eget augue. Purus neque eget pellentesque elementum vel"
               />

               <div className='flex justify-center sm:justify-between px-5 xl:px-0 flex-wrap pt-8 lg:pt-14 gap-y-8 xl:gap-y-10'>
               <Link href="https://magvide.com/" target="_blank">
               <div className='w-[350px] h-[270px] sm:w-[325px] sm:h-[242px] md:w-[340px] md:h-[255px] lg:w-[310px] lg:h-[231px] xl:w-[350px] xl:h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/magvide_image.png" alt="project_image" />
                </div>
                </Link>
                <Link href="https://dm-amazona-app.onrender.com/" target='_blank'>
                <div className='w-[350px] h-[270px] sm:w-[325px] sm:h-[242px] md:w-[340px] md:h-[255px] lg:w-[310px] lg:h-[231px] xl:w-[350px] xl:h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/amazona_image.png" alt="project_image" />
                </div>
                </Link>
                <Link href="https://user-sector-select-app.onrender.com/" target='_blank'>
                <div className='w-[350px] h-[270px] sm:w-[325px] sm:h-[242px] md:w-[340px] md:h-[255px] lg:w-[310px] lg:h-[231px] xl:w-[350px] xl:h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/sector_image.png" alt="project_image" />
                </div>
                </Link>
                <Link href="https://qatarsofaupholsterygallery.com/" target='_blank'>
                <div className='w-[350px] h-[270px] sm:w-[325px] sm:h-[242px] md:w-[340px] md:h-[255px] lg:w-[310px] lg:h-[231px] xl:w-[350px] xl:h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/qatarsofa_image.png" alt="project_image" />
                </div>
                </Link>
                <Link href="/">
                <div className='w-[350px] h-[270px] sm:w-[325px] sm:h-[242px] md:w-[340px] md:h-[255px] lg:w-[310px] lg:h-[231px] xl:w-[350px] xl:h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/msg_banner_image.png" alt="project_image" />
                </div>
                </Link>
                <Link href="/">
                <div className='w-[350px] h-[270px] sm:w-[325px] sm:h-[242px] md:w-[340px] md:h-[255px] lg:w-[310px] lg:h-[231px] xl:w-[350px] xl:h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/msg_banner_image.png" alt="project_image" />
                </div>
                </Link>
               </div>
               <div className="flex gap-4 justify-center mt-10 lg:mt-16">
            <Link href="/">
              <ButtonP title="View More..." />
            </Link>
          </div>
        </div>
    </Container>
  )
}

export default ProjectSec