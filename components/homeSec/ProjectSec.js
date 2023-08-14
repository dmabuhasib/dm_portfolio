import React from 'react'
import Container from '../layout/Container'
import Para from '../layout/Para'
import Image from 'next/image'
import Link from 'next/link'
import ButtonP from '../layout/ButtonP'

const ProjectSec = () => {
  return (
    <Container>
        <div className='py-[100px]'>
        <div className="flex justify-center">
              <h2 className=" text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-monA font-semibold text-primary">
                Recent
              </h2> &nbsp; &nbsp;
              <h2 className="  text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-monA font-semibold text-yellowp">
                Project
              </h2>

            </div>
              <Para className="text-center w-[70%] mx-auto pt-6 pb-10"
              title="Lorem ipsum dolor sit amet consectetur. Amet rhoncus id  uam ac sodales proin habitasse. Semper ac id enim aenean dolor tortor scelerisque eget augue. Purus neque eget pellentesque elementum vel"
               />

               <div className='flex justify-between flex-wrap pt-14 gap-y-10'>
                <div className='w-[350px] h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/msg_banner_image.png" alt="project_image" />
                </div>
                <div className='w-[350px] h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/msg_banner_image.png" alt="project_image" />
                </div>
                <div className='w-[350px] h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/msg_banner_image.png" alt="project_image" />
                </div>
                <div className='w-[350px] h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/msg_banner_image.png" alt="project_image" />
                </div>
                <div className='w-[350px] h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3'>
                    <Image fill src="/assets/msg_banner_image.png" alt="project_image" />
                </div>
                <div className='w-[350px] h-[270px] relative shadow-cshadow rounded-lg duration-300 ease-in-out hover:mt-[-16px] hover:cursor-pointer hover:shadow-cshadow3]'>
                    <Image fill src="/assets/msg_banner_image.png" alt="project_image" />
                </div>
               </div>
               <div className="flex gap-4 justify-center mt-16">
            <Link href="/">
              <ButtonP title="View More..." />
            </Link>
          </div>
        </div>
    </Container>
  )
}

export default ProjectSec