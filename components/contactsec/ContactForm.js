import React, { useRef, useState } from "react";
import SubHeading from "../layout/SubHeading";
import Container from "../layout/Container";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import "react-country-dropdown/dist/index.css";
import PhoneInput from "react-phone-number-input";
import { ReactCountryDropdown } from "react-country-dropdown";
import emailjs from "@emailjs/browser";
import * as filestack from "filestack-js";

const ContactForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [fileUrl, setFileUrl] = useState("");
  const [country, setCountry] = useState("");
  const [value, setValue] = useState();
  const handleSelect = (country) => {
    console.log(country);
    setCountry(country.name);
  };
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    try {
      const client = filestack.init("A3dESBmkSQKnJQlGxqR2Hz");
      const response = await client.upload(file);
      const uploadedFileUrl = response.url;

      setFileUrl(uploadedFileUrl);
    } catch (error) {
      console.log("File upload error:", error);
    }
  };
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
      stateRegion: undefined,
      zipcode: data.zipcode,
      message: data.message,
      file: fileUrl,
      websiteURL: data.websiteURL,
    };
    formData.append("name", formDat.name);
    formData.append("email", formDat.email);
    formData.append("services", formDat.services);
    formData.append("country", country);
    formData.append("budget", formDat.budget);
    formData.append("hireOption", formDat.hireOption);
    formData.append("stateRegion", formDat.stateRegion);
    formData.append("zipcode", formDat.zipcode);
    formData.append("message", formDat.message);
    formData.append("file", formDat.file);
    formData.append("websiteURL", formDat.websiteURL);

    console.log(formData);
    console.log(form);

    try {
      emailjs
        .sendForm(
          "service_rm0t6ot",
          "template_2k353yw",
          form,
          "wvfNu9HNgu_kYZd-L"
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
      <div className="sm:flex justify-between  sm:px-5 xl:px-0 pt-10 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="w-[40%]">
          <div>
          <div className=" leading-[36px] sm:leading-[44px] md:leading-[76px]">
              <h2 className=" text-[28px] sm:text-[36px] md:text-[40px] lg:text-[60px]  font-pop font-semibold text-primary">
              LET’S WORK
              </h2>
              <h2 className=" text-[28px] sm:text-[36px] md:text-[40px]  inline lg:text-[60px] font-pop font-semibold yellow-gr2">
              TOGETHER
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[56%]">
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef} id="my-form">
          <div className="w-full">
            <div>
              <SubHeading
                className="text-sm md:text-base pb-6 lg:text-lg xl:text-xl yellow-gr2 font-pop font-bold"
                title="Tell us about your project"
              />
           
            </div>
            <div className="flex flex-wrap gap-y-7 justify-between">

          
            <div className="w-[48%]">
              <SubHeading
                className="text-sm md:text-base lg:text-lg xl:text-xl text-[#013C95] font-pop font-bold mb-2"
                title="Name"
              />
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Write your name"
                className="input border-b-2 rounded-sm focus:border-b-2 focus:border-green-600 focus:outline-none  text-xl bg-[#fdb80b3f]  py-5 px-4 text-left  border-yellowp w-full max-w-xs"
              />
            {errors.name && (
              <span className="text-red-500 inline">Name is required</span>
            )}
            </div>
            <div className=" w-[48%]">
              <SubHeading
                className="text-sm md:text-base lg:text-lg xl:text-xl text-[#013C95] font-pop font-bold mb-2 "
                title="Email"
              />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Write your email"
                className="input border-b-2 rounded-sm focus:border-b-2 focus:border-green-600 focus:outline-none  text-xl bg-[#fdb80b3f]  py-5 px-4 text-left  border-yellowp w-full max-w-xs"
              />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            </div>
         
              <div className=" w-[48%]">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-[#013C95] font-pop font-bold mb-2 "
                  title="Phone Number"
                />
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  className="input phoneNumere border-b-2 rounded-sm focus:border-b-2 focus:border-green-600  text-xl bg-[#fdb80b3f]  py-5 px-4 text-left  border-yellowp w-full max-w-xs"
                />
                </div>
              <div className="w-[48%]">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-[#013C95] font-pop font-bold mb-2 "
                  title="Services"
                />
                <div className="form-contro ">
                  <div className="input-group px-4 border-b-2 rounded-sm focus:border-b-2 focus:border-green-600  text-xl bg-[#fdb80b3f]  py-5 text-left  border-yellowp w-full max-w-xs">
                    <select
                      className="select outline-none bg-[#fdb80b00]  w-full "
                      {...register("services")}
                    >
                      <option selected>Any</option>
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>Full Stack Services</option>
                      <option>UI/UX Design</option>
                      <option>WordPress Application</option>
                    </select>
                  </div>
                </div>
              </div>
            <div className="mt-5 w-full sm:flex justify-between   ">
              <div className="w-[48%]">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-[#013C95] font-pop font-bold mb-2 "
                  title="Approximate Budget"
                />
                  <div className="form-control">
                  <div className="input-group px-4 border-b-2 rounded-sm focus:border-b-2 focus:border-green-600  text-xl bg-[#fdb80b3f]  py-5 text-left  border-yellowp w-full max-w-xs">
                      <select
                      className="select outline-none bg-[#fdb80b00]  w-full "
                        {...register("budget")}
                      >
                        <option selected>$100-$200</option>
                        <option>$200-$400</option>
                        <option>$400-$600</option>
                        <option>$700-$900</option>
                        <option>$1000+</option>
                      </select>
                    </div>
                </div>
              </div>
              <div className="w-[48%] ">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-[#013C95] font-pop font-bold mb-2 ml-3 "
                  title="Hire Us"
                />
                <div className="form-control">
                <div className="input-group px-4 border-b-2 rounded-sm focus:border-b-2 focus:border-green-600  text-xl bg-[#fdb80b3f]  py-5 text-left  border-yellowp w-full max-w-xs">
                    <select
               className="select outline-none bg-[#fdb80b00]  w-full "
                      {...register("hireOption")}
                    >
                      <option selected>Hourly</option>
                      <option> Project</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="w-[100%]   ">
              <SubHeading
                className="text-sm md:text-base lg:text-lg xl:text-xl text-[#013C95] font-pop font-bold mb-2 "
                title="Messages"
              />
              <textarea
                 className="input-group w-[100%] px-4 border-b-2 rounded-sm focus:border-b-2 focus:border-green-600 focus:outline-none text-xl bg-[#fdb80b3f] py-5 text-left  border-yellowp h-56"
                placeholder="Write us what you want to know"
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
