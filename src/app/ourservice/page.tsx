import * as React from "react";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className=" px-4 md:px-60 py-20">
      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-lg font-medium">Main Hospital Facility</p>
      </div>
      <p className="text-sm text-gray-500 leading-[30px]">
        National Hospital was founded in 2012 as a digital- based hospital in
        Indonesia. We do always provide the best comfort in terms of a luxurious
        and comfortable hospital interior for visitors and patients. Also,
        equipped with a hos pital- wide Wi-Fi network coverage to support you in
        order carrying out your daily activities. Last but not least, a spacious
        cozy lobby with tenants which provide food and beverages support patient
        comfort while visiting the National Hospital.
      </p>
      <div className="flex gap-8 mt-3">
        <div className="flex-1 bg-gray-300 h-[300px] rounded-xl overflow-hidden">
          <img src="hostloby.jpg" alt="" className="object-cover h-full" />
        </div>
        <div className="flex-1 bg-gray-300 h-[300px] rounded-xl overflow-hidden">
          <img
            src="sofaloby.jpg"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-lg font-medium">
          Out Patient Clinics, Centers & Programs
        </p>
      </div>
      <p className="text-sm text-gray-500 leading-[30px]">
        As a form of our concern in serving patients, we provide several
        outpatient services such as:
      </p>
      <ul className="text-sm text-gray-500 leading-[20px] list-disc ml-4">
        <li>EEG</li>
        <li>Cath Lab</li>
        <li>MRI</li>
        <li>BMD</li>
        <li>Treadmill/ECG</li>
        <li>CT-Scan</li>
        <li>USG</li>
        <li>Floroscopy</li>
      </ul>

      <div className="flex gap-4 mt-3 h-[480px]">
        <div className="w-[65%] bg-gray-300 h-full rounded-xl overflow-hidden">
          <img src="scan-2.jpg" alt="" className="object-cover h-full" />
        </div>
        <div className="h-[480px] flex flex-col gap-4">
          <div className="flex-1 bg-gray-300 h-[300px] rounded-xl overflow-hidden">
            <img
              src="ct-scan.jpg"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex-1 bg-gray-300 h-[300px] rounded-xl overflow-hidden">
            <img src="lab.jpg" alt="" className="object-cover h-full w-full" />
          </div>
        </div>
      </div>

      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-lg font-medium">Special Facilities & Services</p>
      </div>
      <p className="text-sm text-gray-500 leading-[30px]">
        We provide various facilities and services to support your comfort in
        treatment, some of the services we offer include:
      </p>
      <ul className="text-sm text-gray-500 leading-[20px] list-disc ml-4">
        <li>Sunday Clinic</li>
        <li>Wound Clinic</li>
        <li>Stroke Cneter</li>
        <li>One Day Care</li>
        <li>One Day Surgery</li>
      </ul>
      <div className="flex gap-4 mt-3 h-[480px]">
        <div className="w-[65%] bg-gray-300 h-full rounded-xl overflow-hidden">
          <img
            src="https://national-hospital.com/storage/ugc/product/6205fdbf760b4-nh-in-patient-capacities-md.webp"
            alt=""
            className="object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
