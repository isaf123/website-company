"use client";
import * as React from "react";
import LogoText from "./LogoText";
import { useRouter } from "next/navigation";
interface INavbarDesktopProps {}

const NavbarDesktop: React.FunctionComponent<INavbarDesktopProps> = (props) => {
  const router = useRouter();
  return (
    <div className="hidden md:block">
      <div className="w-full px-32 py-2 bg-gray-50 flex justify-between ">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <LogoText />
        </div>

        <div className="flex gap-5 items-center">
          <p className="font-medium cursor-pointer text-[15px]">About Us</p>
          <button
            className="font-medium text-[15px]"
            onClick={() => router.push("/ourservice")}
          >
            Our Services
          </button>
          <p className="font-medium cursor-pointer text-[15px]">Teams</p>
          <p className="font-medium cursor-pointer text-[15px]">Find Doctor</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
