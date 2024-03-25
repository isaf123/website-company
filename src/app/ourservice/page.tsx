import * as React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className=" px-4 md:px-60 py-20">
      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-lg font-medium">Main Hospital Facility</p>
      </div>
      <p className="text-sm text-gray-600 leading-[30px]">
        National Hospital was founded in 2012 as a digital- based hospital in
        Indonesia. We do always provide the best comfort in terms of a luxurious
        and comfortable hospital interior for visitors and patients. Also,
        equipped with a hos pital- wide Wi-Fi network coverage to support you in
        order carrying out your daily activities. Last but not least, a spacious
        cozy lobby with tenants which provide food and beverages support patient
        comfort while visiting the National Hospital.
      </p>
      <div className="block md:hidden">
        <div className="flex items-center justify-end mr-6">
          <p className="text-sm text-gray-600">swipe</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className="h-fit w-[360px] md:w-full overflow-x-auto">
        <div className="flex w-[fit] md:w-full md:justify-center gap-4 mt-3 ">
          <Image
            src="/hostloby.jpg"
            alt=""
            width={430}
            height={420}
            className="rounded-xl flex-1"
          />

          <Image
            src="/sofaloby.jpg"
            alt=""
            width={520}
            height={320}
            className="flex-1 rounded-xl"
          />
        </div>
      </div>

      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-lg font-medium">
          Out Patient Clinics, Centers & Programs
        </p>
      </div>
      <p className="text-sm text-gray-600 leading-[30px]">
        As a form of our concern in serving patients, we provide several
        outpatient services such as:
      </p>
      <ul className="text-sm text-gray-600 leading-[20px] list-disc ml-4">
        <li>EEG</li>
        <li>Cath Lab</li>
        <li>MRI</li>
        <li>BMD</li>
        <li>Treadmill/ECG</li>
        <li>CT-Scan</li>
        <li>USG</li>
        <li>Floroscopy</li>
      </ul>
      <div className="block md:hidden">
        <div className="flex items-center justify-end mr-6">
          <p className="text-sm text-gray-600">swipe</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex w-full gap-4 mt-3  h-[440px] ">
          <div className=" w-[65%] h-full bg-red-100 rounded-xl overflow-hidden">
            <Image src="/mri.jpg" alt="" width={778} height={520} />
          </div>
          <div className=" flex flex-col justify-between gap-4  w-[35%]">
            <div className="flex-1 w-full bg-red-300 h-full rounded-xl overflow-hidden">
              <Image alt="" src="/ct-scan.jpg" width={364} height={212} />
            </div>
            <div className="flex-1 w-full bg-red-300 h-full rounded-xl overflow-hidden">
              <Image alt="" src="/lab.jpg" width={364} height={212} />
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full h-fit overflow-x-auto pt-3">
        <div className=" flex md:flex-col justify-between gap-4 h-[240px] w-[670px] ">
          <div className="flex-1 w-full bg-red-300 h-full rounded-xl overflow-hidden">
            <img
              className="obect-cover h-full w-full"
              src="https://images.unsplash.com/photo-1581595220921-eec2071e5159?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex-1 w-full bg-red-300 h-full rounded-xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-lg font-medium">Special Facilities & Services</p>
      </div>
      <p className="text-sm text-gray-600 leading-[30px]">
        We provide various facilities and services to support your comfort in
        treatment, some of the services we offer include:
      </p>
      <ul className="text-sm text-gray-600 leading-[20px] list-disc ml-4">
        <li>Sunday Clinic</li>
        <li>Wound Clinic</li>
        <li>Stroke Cneter</li>
        <li>One Day Care</li>
        <li>One Day Surgery</li>
      </ul>
      <div className="mt-3 h-[240px] md:h-[440px]">
        <div className="w-full md:w-[65%] bg-gray-300 h-full rounded-xl overflow-hidden">
          <Image alt="" src="/viproom.jpg" width={686} height={486} />

          {/* <img src="/viproom.jpg" alt="" className="object-cover h-full" /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
