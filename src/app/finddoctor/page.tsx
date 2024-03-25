import * as React from "react";

interface IFindDoctorProps {}

const FindDoctor: React.FunctionComponent<IFindDoctorProps> = (props) => {
  const doctor = [
    {
      name: "Dr. Emily Anderson, Sp. JP",
      img: "doctor1.png",
      spec: "Cardiology",
    },
    {
      name: "Dr. Benjamin Carter, Sp. JPK",
      img: "doctor2.png",
      spec: "Cardiology",
    },
    {
      name: "Dr. Sarah Wilson, Dermatology Specialist",
      img: "doctor3.png",
      spec: "Dermatology",
    },
    {
      name: "Dr. Ethan Johnson, Dermatology Specialist",
      img: "doctor5.png",
      spec: "Dermatology",
    },
    {
      name: "Dr. Matthew Evans, Neurology Specialist",
      img: "doctor4.png",
      spec: "Neurology",
    },
    {
      name: "Dr. Alexander Rodriguez, Radiology Specialist",
      img: "doctor6.png",
      spec: "Radiology",
    },
  ];

  const mapping = () => {
    return doctor.map((val, idx) => {
      return (
        <div
          key={idx}
          className="w-[254px] h-[440px] border border-gray-200 group"
        >
          <div className="relative w-full h-[300px]  ">
            <div className=" w-[220px] h-[300px] m-auto overflow-hidden group-hover:transform group-hover:scale-110 transition-transform duration-300">
              <img src={val.img} alt="" />
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
            <h2 className="text-center font-medium text-md mb-4">{val.name}</h2>
            <p className="text-blue-500 text-center">{val.spec}</p>
          </div>
        </div>
      );
    });
  };

  return (
    // bg-gradient-to-t from-slate-400 to-transparent
    <div className="px-4 md:px-60 py-20">
      <div className="flex justify-center gap-10 flex-wrap">{mapping()}</div>
    </div>
  );
};

export default FindDoctor;
