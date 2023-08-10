import React from 'react';

const ButtonP = ({ title }) => {
  return (
    <button className=" bg-gradient-to-r from-yellowp to-yellows text-sm sm:text-base lg:text-lg font-medium font-pop rounded-3xl shadow-cshadow3 border-primary duration-300 ease-in-out text-white px-4 py-1 md:px-6 lg:px-8 md:py-2 hover:font-medium hover:pr-20 ">
      {title}
    </button>
  );
};

export default ButtonP;
