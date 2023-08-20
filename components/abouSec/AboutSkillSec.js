import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import ProgressBar from '@ramonak/react-progress-bar';

const AboutSkillSec = () => {
  return (
    <Container>
      <div className="py-24">
        <div className="text-center">
          <SubHeading
            className="text-sm md:text-base lg:text-lg xl:text-xl yellow-gr2 font-pop font-bold"
            title="SKILL SET"
          />
          <div className=" leading-[36px] mx-auto w-[100%] sm:w-[80%] xl:w-[70%] lg:pt-8 lg:pb-4 sm:leading-[44px] md:leading-[58px] text-center">
            <h2 className=" text-[28px] sm:text-[36px] md:text-[40px] lg:text-[52px] inline font-pop font-semibold text-primary">
              We Have A Set Of 
            </h2>
            &nbsp;
            <h2 className=" text-[28px] sm:text-[36px] md:text-[40px]  inline lg:text-[52px] font-pop font-semibold yellow-gr2">
             Skill With High Quality
            </h2>
          </div>
        </div>
        <div className="sm:flex justify-between gap-x-5 md:gap-x-8 lg:gap-x-10 xl:gap-x-16 px-3 sm:px-5 xl:px-0">
          <div className="w-full  sm:w-2/4  ">
            <div className="mt-8 xl:mt-10 w-full  flex justify-between relative">
              <SubHeading
                title="HTML"
                className="text-primary text-base lg:text-lg font-bold"
              />
            </div>
            <ProgressBar
              completed={90}
              className="wrapper"
              bgColor="#2FA5FF"
              height="12px"
              labelSize="12px"
              transitionDuration="7s"
              animateOnRender={true}
            />
            <div className="mt-8 lg:mt-10 w-full  flex justify-between relative">
              <SubHeading
                title="CSS"
                className="text-primary text-base lg:text-lg font-bold"
              />
            </div>
            <ProgressBar
              className="wrapper"
              completed={95}
              bgColor="#17BD8D"
              height="12px"
              labelSize="12px"
              transitionDuration="7s"
              animateOnRender={true}
            />
            <div className="mt-8 lg:mt-10  w-full  flex justify-between relative">
              <SubHeading
                title="JavaScript"
                className="text-primary text-base lg:text-lg font-bold"
              />
            </div>
            <ProgressBar
              className="wrapper"
              completed={93}
              bgColor="#FBAE3D"
              height="12px"
              labelSize="12px"
              transitionDuration="7s"
              animateOnRender={true}
            />
            <div className="mt-8 lg:mt-10  w-full  flex justify-between relative">
              <SubHeading
                title="React"
                className="text-primary text-base lg:text-lg font-bold"
              />
            </div>
            <ProgressBar
              className="wrapper"
              completed={92}
              bgColor="#F54D77"
              height="12px"
              labelSize="12px"
              transitionDuration="7s"
              animateOnRender={true}
            />
          </div>
          <div className="w-full  sm:w-2/4 sm:pl-6">
            <div className="mt-8 xl:mt-10  w-full  flex justify-between relative">
              <SubHeading
                title="Node Js"
                className="text-primary text-base lg:text-lg font-bold"
              />
            </div>
            <ProgressBar
              completed={96}
              className="wrapper"
              bgColor="#2FA5FF"
              height="12px"
              labelSize="12px"
              transitionDuration="7s"
              animateOnRender={true}
            />
            <div className="mt-8 lg:mt-10  w-full  flex justify-between relative">
              <SubHeading
                title="Mongo DB"
                className="text-primary text-base lg:text-lg font-bold"
              />
            </div>
            <ProgressBar
              className="wrapper"
              completed={95}
              bgColor="#17BD8D"
              height="12px"
              labelSize="12px"
              transitionDuration="7s"
              animateOnRender={true}
            />
            <div className="mt-8 lg:mt-10  w-full flex justify-between relative">
              <SubHeading
                title="Firebase"
                className="text-primary text-base lg:text-lg font-bold"
              />
            </div>
            <ProgressBar
              className="wrapper"
              completed={93}
              bgColor="#FBAE3D"
              height="12px"
              labelSize="12px"
              transitionDuration="7s"
              animateOnRender={true}
            />
            <div className="mt-8 lg:mt-10  w-full   flex justify-between relative">
              <SubHeading
                title="WordPress"
                className="text-primary text-base lg:text-lg font-bold"
              />
            </div>
            <ProgressBar
              className="wrapper"
              completed={92}
              bgColor="#F54D77"
              height="12px"
              labelSize="12px"
              transitionDuration="7s"
              animateOnRender={true}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSkillSec;
