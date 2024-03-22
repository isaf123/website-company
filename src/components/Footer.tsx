import * as React from "react";
import LogoText from "./LogoText";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="h-fit md:h-[340px] w-full bg-[#666666] text-white flex  md:justify-center md:items-center py-10 px-4">
      <div className="w-fit h-fit">
        <div className="flex flex-col md:flex-row gap-10 ">
          <div>
            <LogoText />
            <p className="my-4 font-medium">
              Boulevard Famili Sel. No.Kav. 1. Surabaya. East Java. Indonesia
            </p>
            <p className="md:w-[600px] text-sm">
              National Hospital is commited to providing the best healthcare
              services. Equipped with innovative and eco-friendly technology,
              National Hospital always prioritize its patients needs and
              comfort.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-40">
            <div>
              <p className="font-medium text-xl mb-5">COMPANY</p>
              <p className="mb-3">About us</p>
              <p className="mb-3">Our Services</p>
              <p className="mb-3">Latest Update</p>
              <p className="mb-3">Careers</p>
            </div>
            <div>
              <p className="font-medium text-xl mb-5">SUPPORT</p>
              <p className="mb-3">Doctors Team</p>
              <p className="mb-3">Find a Doctor</p>
              <p className="mb-3">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
