import * as React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ILastUpdateProps {
  tittle?: string;
  date: string;
  img: any;
  children: string;
}

const LastUpdate: React.FunctionComponent<ILastUpdateProps> = (props) => {
  const router = useRouter();

  return (
    <div className=" h-fit w-[320px] shadow-md hover:shadow-lg pb-5">
      <div className="bg-gray-300 w-full h-[200px]">
        <img src={props.img} alt="" className="w-full h-full object-cover " />
      </div>
      <div className="w-full h-fit px-5">
        <h1 className="font-bold text-lg mt-2">{props.children}</h1>
        <div className="flex gap-20 mb-4 text-sm text-gray-500">
          <p>{props.date}</p>
          <div className="flex gap-2 items-center">
            <GoPerson />
            <p>admin</p>
          </div>
        </div>

        <div className="flex gap-1 items-center ">
          <p
            className=" cursor-pointer text-xs"
            onClick={() => router.push("/article")}
          >
            Read More
          </p>
          <IoIosArrowRoundForward className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default LastUpdate;
