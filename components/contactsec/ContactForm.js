import React, { useRef, useState } from "react";
import SubHeading from "../layout/SubHeading";
import Container from "../layout/Container";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import "react-country-dropdown/dist/index.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Para from "../layout/Para";

const ContactForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [value, setValue] = useState();
  const formRef = useRef(null);
  const onSubmit = async (data) => {
    const formData = new FormData();
    const form = formRef.current;
    const formDat = {
      name: data.name,
      email: data.email,
      services: data.services,
      budget: data.budget,
      hireOption: data.hireOption,
      message: data.message,
    };
    formData.append("name", formDat.name);
    formData.append("email", formDat.email);
    formData.append("services", formDat.services);
    formData.append("budget", formDat.budget);
    formData.append("hireOption", formDat.hireOption);
    formData.append("message", formDat.message);


    try {
      emailjs
        .sendForm(
          "service_swmyboi", 
          "template_7z3umgv",
          form,
          "ZsPMGCKDpZIhgFLk0"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
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
    <Container>
      <div className="sm:flex justify-between  px-5 xl:px-0 pt-10 sm:pt-16 md:pt-20 lg:pt-24">
      <div className=" w-[100%] sm:w-[40%]">
          <div className=" leading-[36px] sm:leading-[44px] lg:leading-[76px]">
              <h2 className=" text-[28px] sm:text-[36px] md:text-[40px] lg:text-[60px]  font-pop font-semibold text-primary">
              LET’S WORK
              </h2>
              <h2 className=" text-[28px] sm:text-[36px] md:text-[40px]  inline lg:text-[60px] font-pop font-semibold yellow-gr2">
              TOGETHER
              </h2>
          </div>
        <Para
        className="text-xl pb-10"
        title="Setup a free consultation with me. Bring your knowledge to the table and I’ll bring you." />

        <div className=" hidden sm:block mx-auto sm:mx-0 w-[90%] h-[300px] sm:h-[260px] md:h-[360px] xl:h-[410px] relative">
          <Image fill src="/assets/1111.jpg" alt="contact-left"/>

          </div>
        </div>
        <div className="w-[100%] sm:w-[56%] mt-2 sm:mt-3">
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef} id="my-form">
          <div className="w-full">
            <div>
              <SubHeading
                className="text-sm md:text-base pb-6 lg:text-lg xl:text-xl yellow-gr2 font-pop font-bold"
                title="Tell us about your project"
              />
           
            </div>
            <div className="flex flex-wrap gap-y-7 md:gap-y-10 lg:gap-y-12 justify-between">

          
            <div className="w-[48%]">
          
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Full Name*"
                className="input border-b-2 placeholder:text-[#013C95] placeholder:font-bold rounded-sm focus:border-b-2 focus:border-green-600 focus:outline-none  text-base md:text-lg  lg:text-xl bg-[#fdb80b3f] py-3 px-2  md:py-4 lg:py-5 md:px-4 text-left  border-yellowp w-full max-w-xs"
              />
            {errors.name && (
              <span className="text-red-500 inline">Name is required</span>
            )}
            </div>
            <div className=" w-[48%]">
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder=" Your Email*"
                className="input border-b-2 placeholder:text-[#013C95] placeholder:font-bold rounded-sm focus:border-b-2 focus:border-green-600 focus:outline-none text-base md:text-lg  lg:text-xl bg-[#fdb80b3f] py-3 px-2  md:py-4 lg:py-5 md:px-4 text-left  border-yellowp w-full max-w-xs"
              />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            </div>
         
              <div className=" w-[48%]">
                <PhoneInput
                  placeholder="Phone Number"
                  value={value}
                  onChange={setValue}
                  className="input border-b-2 rounded-sm focus:border-b-2 focus:border-green-600 bg-[#fdb80b3f] text-base md:text-lg  lg:text-xl  py-3 px-2  md:py-4 lg:py-5 md:px-4 text-left  border-yellowp w-full max-w-xs"
                />
                </div>
              <div className="w-[48%]">
                <div className="form-contro ">
                  <div className="input-group border-b-2 rounded-sm focus:border-b-2 focus:border-green-600   bg-[#fdb80b3f]  text-base md:text-lg  lg:text-xl  py-3 px-2  md:py-4 lg:py-5 md:px-4 border-yellowp w-full max-w-xs">
                    <select
                      className="select font-semibold outline-none bg-[#fdb80b00]  w-full "
                      {...register("services")}
                    >
                      <option selected>Required Services</option>
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>Full Stack Services</option>
                      <option>UI/UX Design</option>
                      <option>WordPress Application</option>
                    </select>
                  </div>
                </div>
              </div>
            <div className="w-full flex justify-between">
              <div className="w-[48%]">
              
                  <div className="form-control">
                  <div className="input-group border-b-2 rounded-sm focus:border-b-2 focus:border-green-600  text-base md:text-lg  lg:text-xl  py-3 px-2  md:py-4 lg:py-5 md:px-4 bg-[#fdb80b3f]  text-left  border-yellowp w-full max-w-xs">
                      <select
                      className="select font-semibold outline-none bg-[#fdb80b00]  w-full "
                        {...register("budget")}
                      >
                        <option selected>Project Budget</option>
                        <option>$100-$200</option>
                        <option>$200-$400</option>
                        <option>$400-$600</option>
                        <option>$700-$900</option>
                        <option>$1000+</option>
                      </select>
                    </div>
                </div>
              </div>
              <div className="w-[48%] ">
            
                <div className="form-control">
                <div className="input-group  border-b-2 rounded-sm focus:border-b-2 focus:border-green-600   bg-[#fdb80b3f]  text-base md:text-lg  lg:text-xl  py-3 px-2  md:py-4 lg:py-5 md:px-4 text-left  border-yellowp w-full max-w-xs">
                    <select
               className="select font-semibold outline-none bg-[#fdb80b00]  w-full "
                      {...register("hireOption")}
                    >
                      <option selected>Hire Us</option>
                      <option >Hourly</option>
                      <option> Project</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="w-[100%]   ">
              <textarea
                 className="input-group w-[100%] placeholder:text-black placeholder:font-semibold px-4 border-b-2 rounded-sm focus:border-b-2 focus:border-green-600 focus:outline-none text-base md:text-lg lg:text-xl bg-[#fdb80b3f] py-5 text-left  border-yellowp h-40 md:h-48 lg:h-56"
                placeholder="Project Description"
                {...register("message")}
              ></textarea>
            </div>
            <div className="mb-14">
              <button
                type="submit"
                className=" bg-gradient-to-r from-yellowp to-yellows text-base lg:text-lg font-medium font-pop rounded-3xl shadow-cshadow3 border-primary duration-300 ease-in-out text-white  py-2 px-6 lg:px-8 hover:font-medium hover:pr-20 ">
                Submit
              </button>
            </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </Container>
  );
};

export default ContactForm;
