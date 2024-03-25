import * as React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

interface ITestimonyProps {
  src?: string;
  testi: string;
  name: string;
  position: string;
  fullst: number;
  blankst: number;
}

const Testimony: React.FunctionComponent<ITestimonyProps> = (props) => {
  const fullStar = () => {
    const arr1 = [];
    for (let i = 0; i < props.fullst; i++) {
      arr1.push("w-5 h-5 text-[#FDD663]");
    }
    return arr1;
  };

  const mapping1 = () => {
    return fullStar().map((val) => {
      return <MdOutlineStarPurple500 className={val} />;
    });
  };

  const blankst = () => {
    const arr2 = [];
    for (let i = 0; i < props.blankst; i++) {
      arr2.push("w-5 h-5 text-[#FDD663]");
    }
    return arr2;
  };

  const mapping2 = () => {
    return blankst().map((val) => {
      return <MdOutlineStarBorderPurple500 className={val} />;
    });
  };

  return (
    <div className=" w-[350px] h-[230px] rounded-2xl hover:shadow-md border-2 border-gray-200 relative px-5 ">
      <div className="w-[70px] h-[70px]  rounded-full absolute -top-8 left-6 border-b-2 border-gray-400 overflow-hidden">
        <img className="h-full w-full object-cover" src={props.src} alt="" />
      </div>
      <p className="text-xs mt-16">{props.testi}</p>
      <div className="flex justify-between text-xs items-center mt-10">
        <div>
          <p className="font-medium text-sm">{props.name}</p>
          <p>Patient</p>
        </div>
        <div className="flex gap-2">
          {mapping1()}
          {mapping2()}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
