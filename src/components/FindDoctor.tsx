import * as React from "react";

interface IFindDoctorsProps {
  src: string;
  name: string;
  spec: string;
}

const FindDoctors: React.FunctionComponent<IFindDoctorsProps> = (props) => {
  return (
    <div className="w-[254px] h-[440px] border border-gray-200 group">
      <div className="relative w-full h-[300px]  ">
        <div className=" w-[220px] h-[300px] m-auto overflow-hidden group-hover:transform group-hover:scale-110 transition-transform duration-300">
          <img src={props.src} alt="" />
        </div>
        <div className="w-full h-full flex absolute bg-gradient-to-t from-white to-transparent top-4 justify-center items-end  pb-4">
          <img
            className=""
            src="https://www.react.co.id/assets/img/NATIONAL%20HOSPITAL%20LOGO%202019.png"
            width={180}
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[160px] px-3 py-6">
        <h2 className="text-center font-medium text-md mb-4">{props.name}</h2>
        <p className="text-blue-500 text-center">{props.spec}</p>
      </div>
    </div>
  );
};

export default FindDoctors;
