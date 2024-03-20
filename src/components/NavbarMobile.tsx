"use client";
import * as React from "react";
import { useMediaQuery } from "@react-hook/media-query";

interface INavbarMobileProps {}

const NavbarMobile: React.FunctionComponent<INavbarMobileProps> = (props) => {
  const getResponsive = () => {
    return useMediaQuery("(max-width:391px)");
  };

  const responsive = getResponsive();

  return (
    <div className="block md:hidden">
      <div className="relative group">
        <div className="flex items-center justify-center">
          <div className="w-16">
            <img src="logo-pic.png" alt="" />
          </div>
          <p className="">
            {" "}
            <span className="font-bold">Med</span> Hospital
          </p>
        </div>
        <div className="hidden group-hover:block">
          <div className="absolute top-[100%] z-50 flex flex-col">
            <p className="font-medium cursor-pointer text-[15px] bg-gray-50 w-[390px] py-2 px-5 border-b-2 border-b-gray-200">
              About Us
            </p>
            <p className="font-medium cursor-pointer text-[15px] bg-gray-50 w-[390px] py-2 px-5 border-b-2 border-b-gray-200">
              Our Services
            </p>
            <p className="font-medium cursor-pointer text-[15px] bg-gray-50 w-[390px] py-2 px-5 border-b-2 border-b-gray-200">
              Teams
            </p>
            <p className="font-medium cursor-pointer text-[15px] bg-gray-50 w-[390px] py-2 px-5 border-b-2 border-b-gray-200">
              Find Doctor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;

{
  /* <div>
{responsive}
<div className="w-full  px-32 bg-gray-50 flex justify-between">
  <div className="flex items-center">
    <div className="w-16">
      <img src="logo-pic.png" alt="" />
    </div>
    <p className="">
      {" "}
      <span className="font-bold">Med</span> Hospital
    </p>
  </div>

  <div className="relative group">
    <div className="flex items-center">
      <div className="w-16">
        <img src="logo-pic.png" alt="" />
      </div>
      <p className="">
        {" "}
        <span className="font-bold">Med</span> Hospital
      </p>
    </div>
    <div className="hidden group-hover:block">
      <div className="absolute top-[100%] z-50 flex flex-col">
        <p className="font-medium cursor-pointer text-[15px] bg-gray-50 w-[390px] py-2 px-5 border-b-2 border-b-gray-200">
          About Us
        </p>
        <p className="font-medium cursor-pointer text-[15px] bg-gray-50 w-[390px] py-2 px-5 border-b-2 border-b-gray-200">
          Our Services
        </p>
        <p className="font-medium cursor-pointer text-[15px] bg-gray-50 w-[390px] py-2 px-5 border-b-2 border-b-gray-200">
          Teams
        </p>
        <p className="font-medium cursor-pointer text-[15px] bg-gray-50 w-[390px] py-2 px-5 border-b-2 border-b-gray-200">
          Find Doctor
        </p>
      </div>
    </div>
  </div>

  <div className="flex gap-5 items-center">
    <p className="font-medium cursor-pointer text-[15px]">About Us</p>
    <p className="font-medium cursor-pointer text-[15px]">Our Services</p>
    <p className="font-medium cursor-pointer text-[15px]">Teams</p>
    <p className="font-medium cursor-pointer text-[15px]">Find Doctor</p>
  </div>
</div>
</div> */
}
