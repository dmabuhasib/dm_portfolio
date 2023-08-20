import Image from "next/image";
import Container from "../layout/Container";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
import { useRef } from "react";
import ButtonP from "../layout/ButtonP";
const AboutMsgSec = () => {
  const { register, handleSubmit, reset } = useForm();
  const formRef = useRef(null);
 
  const onSubmit = () => {
    // e.preventDefault();
    // const formData = new FormData();
    const form = formRef.current;
    try {
      emailjs 
        .sendForm(
          "service_jw02be9",
          "template_vr74l8w",
          form,
          "wvfNu9HNgu_kYZd-L"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
            reset();
          },
          (error) => {
            console.log(error.text);
            alert("An error occurred. Please try again later.");
          }
        );
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="py-8 sm:py-10 md:py-16 lg:py-24">
      <Container>
        <div className="sm:flex px-3 sm:px-5 xl:px-0">
          <div className="w-full sm:w-[55%] xl:w-[50%] sm:mt-4 md:mt-5 lg:mt-9">
            <div className="mx-auto sm:mx-0  h-[360px] w-[360px] sm:h-[360px] sm:w-[330px] md:h-[370px] md:w-[370px] lg:w-[480px] lg:h-[480px] xl:w-[550px] xl:h-[550px] relative block">
              <Image
                fill
                src="/assets/aboutuscontact.png"
                alt="msg_banner_image"
              />
            </div>
          </div>
          <div className=" w-full sm:w-[45%] xl:w-[50%] mt-12 sm:mt-0">
          
             <div className=" leading-[36px]  w-[100%] lg:pt-8 lg:pb-4 sm:leading-[44px] md:leading-[58px]">
              <h2 className=" text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] inline font-pop font-semibold text-primary">
              LET’S
              </h2>
              &nbsp;
              <h2 className=" text-[28px] sm:text-[36px] md:text-[40px]  inline lg:text-[46px] font-pop font-semibold yellow-gr2">
              TALK
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
              <div className="md:flex gap-x-4 lg:gap-x-8">
                <div className=" w-full md:w-2/4">
                  <label
                    for="name"
                    className="text-primary font-bold text-base md:text-lg"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="border text-base md:text-lg border-para w-full p-2 lg:p-4 rounded-lg mt-1 lg:mt-2 mb-4 focus:outline-yellowp"
                    placeholder="Write your name"
                    {...register("name")}
                  />
                </div>
                <div className="w-full md:w-2/4">
                  <label
                    for="email"
                    className="text-primary font-bold text-base md:text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="border text-base md:text-lg border-para w-full p-2 lg:p-4 rounded-lg mt-1 lg:mt-2 mb-4 focus:outline-yellowp"
                    placeholder="Write your email"
                    {...register("email")}
                  />
                </div>
              </div>
              <div>
                <label
                  for="message"
                  className="text-primary font-bold text-base md:text-lg"
                >
                  Message
                </label>
                <textarea
                  type="email"
                  required
                  className="border border-para text-base md:text-lg w-full h-[80px] md:h-[120px] lg:h-[200px] px-4 py-2 mt-2 mb-4 rounded-lg focus:outline-yellowp"
                  placeholder="Write us what you want to know"
                  {...register("message")}
                />
              </div>
              <ButtonP
              title="Submit"
              />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMsgSec;
