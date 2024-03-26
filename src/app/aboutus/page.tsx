import * as React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className=" px-4 md:px-60 py-20">
      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-2xl font-bold">Collaboration of Expertise</p>
      </div>
      <p className="text-lg text-gray-600 leading-[30px]">
        In order to achieve the best solution for patients, we have built a team
        consisting of various professional backgrounds, both in the field of
        medicine and other competent support fields. Continuous learning is our
        motto to be able to keep up with the times, all with the aim of
        providing the best health services for our patients.
      </p>

      <div className="mt-3 h-[240px] md:h-[480px]">
        <div className="w-full md:w-[65%] bg-gray-300 h-full rounded-xl overflow-hidden">
          <img
            src="https://national-hospital.com/storage/ugc/product/6205fe72788de-nh-collab-md.webp"
            alt=""
            className="object-cover h-full"
          />
        </div>
      </div>

      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-2xl font-bold">Innovation and Technology</p>
      </div>
      <p className="text-lg text-gray-600 leading-[30px]">
        National Hospital is a hospital that provides excellent services with
        state-of-the-art facilities and technology In order to provide
        comprehensive health services with a focus on patients therefore we can
        become a national pride health service. We always try to come up with
        innovation in order to serve patients better.
      </p>
      <div className="block md:hidden">
        <div className="flex items-center justify-end mr-6">
          <p className="text-sm text-gray-600">swipe</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className="h-fit w-[360px] md:w-full overflow-x-auto">
        <div className="flex w-[670px] md:w-full md:justify between gap-4 mt-3 ">
          <div className=" flex-1 bg-gray-300 h-[240px] md:h-[360px] rounded-xl overflow-hidden">
            <img
              src="https://national-hospital.com/storage/ugc/product/6205fe915e093-nh-innovtion-md.webp"
              alt=""
              className="object-cover h-full"
            />
          </div>
          <div className=" flex-1 bg-gray-300 h-[240px] md:h-[360px] rounded-xl overflow-hidden">
            <img
              src="https://national-hospital.com/storage/ugc/product/6226cb657b254-07-md.webp"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-2xl font-bold">Compassionate Caring</p>
      </div>
      <p className="text-lg text-gray-600 leading-[30px]">
        IWe provide the best service focused on our patients. It is our
        commitment to always be proactive and try our best for the satisfaction
        of our patients. We are always there for you, as part of the big
        National Hospital family.
      </p>

      <div className="mt-3 h-[240px] md:h-[480px]">
        <div className="w-full md:w-[65%] bg-gray-300 h-full rounded-xl overflow-hidden">
          <img
            src="https://national-hospital.com/storage/ugc/product/6205fea236854-nh-compassionate-md.webp"
            alt=""
            className="object-cover h-full"
          />
        </div>
      </div>

      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-2xl font-bold">Innovation and Technology</p>
      </div>
      <p className="text-lg text-gray-600 leading-[30px]">
        National Hospital is a hospital that provides excellent services with
        state-of-the-art facilities and technology In order to provide
        comprehensive health services with a focus on patients therefore we can
        become a national pride health service. We always try to come up with
        innovation in order to serve patients better.
      </p>
      <div className="block md:hidden">
        <div className="flex items-center justify-end mr-6">
          <p className="text-sm text-gray-600">swipe</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className="h-fit w-[360px] md:w-full overflow-x-auto">
        <div className="flex w-[670px] md:w-full md:justify between gap-4 mt-3 ">
          <div className=" flex-1 bg-gray-300 h-[240px] md:h-[360px] rounded-xl overflow-hidden">
            <img
              src="https://national-hospital.com/storage/ugc/product/6205fe915e093-nh-innovtion-md.webp"
              alt=""
              className="object-cover h-full"
            />
          </div>
          <div className=" flex-1 bg-gray-300 h-[240px] md:h-[360px] rounded-xl overflow-hidden">
            <img
              src="https://national-hospital.com/storage/ugc/product/6226cb657b254-07-md.webp"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-3 border-t-2 border-b-2 my-3">
        <p className="text-2xl font-bold">National Hospital's Values</p>
      </div>
      <h3 className="text-xl font-bold">P.R.O.U.D</h3>
      <p className="text-lg text-gray-600 leading-[30px]">
        <span className=" font-bold">Pursue Excellence</span> : Providing the
        best healthcare services and focusing on patients
      </p>
      <p className="text-lg text-gray-600 leading-[30px]">
        <span className="font-bold">Respect and Honor</span> : Appreciate and
        respect each individual
      </p>
      <p className="text-lg text-gray-600 leading-[30px]">
        <span className="font-bold">One</span> : Cross-disciplinary
        collaboration as a team
      </p>
      <p className="text-lg text-gray-600 leading-[30px]">
        <span className="font-bold">Unique</span> : Creative and Innovative
      </p>
      <p className="text-lg text-gray-600 leading-[30px]">
        <span className="font-bold">Delegates</span>: Develop the skills of each
        individual
      </p>
    </div>
  );
};

export default App;
