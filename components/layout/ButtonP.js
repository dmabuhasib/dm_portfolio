import React from 'react';

const ButtonP = ({ title }) => {
  return (
    <button className=" yellow-gr text-base lg:text-lg font-medium font-pop rounded-3xl shadow-cshadow3 border-primary duration-300 ease-in-out text-white  py-2 px-6 lg:px-8 hover:font-medium hover:pr-20 ">
      {title}
    </button>
  );
};

export default ButtonP;
