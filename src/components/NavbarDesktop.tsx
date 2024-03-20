import * as React from "react";

interface INavbarDesktopProps {}

const NavbarDesktop: React.FunctionComponent<INavbarDesktopProps> = (props) => {
  return (
    <div className="hidden md:block">
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

        <div className="flex gap-5 items-center">
          <p className="font-medium cursor-pointer text-[15px]">About Us</p>
          <p className="font-medium cursor-pointer text-[15px]">Our Services</p>
          <p className="font-medium cursor-pointer text-[15px]">Teams</p>
          <p className="font-medium cursor-pointer text-[15px]">Find Doctor</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
