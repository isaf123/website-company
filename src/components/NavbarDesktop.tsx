"use client";
import * as React from "react";
import LogoText from "./LogoText";
import { useRouter } from "next/navigation";
interface INavbarDesktopProps {}

const NavbarDesktop: React.FunctionComponent<INavbarDesktopProps> = (props) => {
  const router = useRouter();
  const [data, setdata] = React.useState();
  return (
    <div className="hidden md:block">
      <div className="w-full px-32 py-2 bg-gray-50 flex justify-between ">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <img
            src="https://www.react.co.id/assets/img/NATIONAL%20HOSPITAL%20LOGO%202019.png"
            alt=""
            width={200}
          />
        </div>

        <div className="flex gap-5 items-center">
          <p
            onClick={() => router.push("/")}
            className="font-medium cursor-pointer text-[15px]"
          >
            Home
          </p>
          <p
            onClick={() => router.push("/aboutus")}
            className="font-medium cursor-pointer text-[15px]"
          >
            About Us
          </p>
          <button
            className="font-medium cursor-pointer text-[15px]"
            onClick={() => router.push("/ourservice")}
          >
            Our Services
          </button>

          <p
            className="font-medium cursor-pointer text-[15px]"
            onClick={() => router.push("/finddoctor")}
          >
            Find Doctor
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
