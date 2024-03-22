import { IoIosSearch } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import ButtonGray from "@/components/Button1";
import { TbAmbulance } from "react-icons/tb";
import { MdOutlineAddLocation } from "react-icons/md";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import Button2 from "@/components/Button2";
import LastUpdate from "@/components/LastUpdate";
import Footer from "@/components/Footer";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  const slides = ["promo1.png", "promo2.png", "promo3.png"];

  const str =
    "bg-gray-300 h-[360px] w-[320px] rounded-lg bg-cover bg-no-repeat bg-center py-5";
  const infoPhoto = [
    {
      url: `${str} bg-[url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]`,
      title: "Latest News From National Hospital",
    },
    {
      url: `${str} bg-[url('https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]`,
      title: "Check Doctors Schedule Here",
    },
    {
      url: `${str} bg-[url('https://national-hospital.com/storage/ugc/pages/61f2575308126-gedung-national-hospital-1-md.webp')]`,
      title: "Check and Get Other Services ",
    },
  ];

  const mapSection6 = () => {
    return infoPhoto.map((val, idx) => (
      <div className="h-fit cursor-pointer" key={idx}>
        <div className={val.url}>
          <div className="h-fit relative flex justify-center">
            <div className=" h-[80px] w-[290px] bg-gray-900 opacity-30 rounded-lg"></div>
            <div className="absolute top-0 left-7 h-fit w-fit text-3xl flex justify-center">
              <h1 className="text-white font-medium">{val.title}</h1>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const mapImg = () => {
    return slides.map((val, idx) => (
      <img key={idx} src={val} alt="" className="h-[255px] md:h-[300px]" />
    ));
  };

  return (
    <main className="relative w-full h-fit">
      {}
      <div
        className="h-[300px] md:h-[640px] w-full 
        bg-[url('https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
        bg-cover bg-no-repeat bg-center brightness-[.3] flex flex-col justify-center"
      ></div>
      <div className="h-[300px] md:h-[640px] w-full absolute flex top-0 justify-center items-center">
        <div className="w-full">
          <h1 className="text-center text-gray-50  text-sm md:text-lg font-medium px-10 md:px-0 opacity-90 md:opacity-100 hidden md:block">
            Advanced healthcare, accessible at all times,
            <p>from anywhere. Book your appointment with a doctor now.</p>
          </h1>
          <div className="flex justify-center">
            <Button2 children="Make an Appoinment" />
          </div>
          <div className="flex justify-center md:opacity-60">
            <div className="w-[500px] mt-6 flex rounded-md overflow-hidden justify-between mx-5 md:mx-0 border md:border-0 border-gray-400">
              <input className="w-full px-5" type="text" />
              <div className="bg-blue-500 flex justify-center items-center py-2 px-6 hover:bg-blue-400 cursor-pointer">
                <IoIosSearch className="w-6 h-6 text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className=" h-fit w-full bg-gray-300 flex flex-wrap ">
        <div className="border w-[50%] md:w-[25%] bg-gray-50 flex items-center gap-4 pl-4 py-6 md:py-8">
          <FaUserDoctor className="w-8 h-8 md:w-14 md:h-14 text-gray-700" />
          <div className="h-fit">
            <h1 className="mb-3 font-bold md:text-xl text-gray-700">
              Find a Doctor
            </h1>
            <ButtonGray children="Find" />
          </div>
        </div>
        <div className="border w-[50%] md:w-[25%] bg-gray-200 flex items-center gap-1 md:gap-4 pl-4">
          <TbAmbulance className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />

          <div className="h-fit">
            <h1 className="mb-3 font-bold md:text-xl text-gray-700">
              Emergency Ambulance
            </h1>
            <ButtonGray children="Find Ambulance" />
          </div>
        </div>
        <div className="border w-[50%] md:w-[25%] bg-gray-50 flex items-center gap-4 pl-4 py-6 md:py-8">
          <MdOutlineAddLocation className="w-10 h-10 md:w-16 md:h-16 text-gray-700" />

          <div className="h-fit">
            <h1 className="mb-3 font-bold md:text-xl text-gray-700">
              How to get to us
            </h1>
            <ButtonGray children="Get Us" />
          </div>
        </div>
        <div className="border w-[50%] md:w-[25%] bg-gray-200 flex items-center gap-4 pl-4">
          <MdOutlinePhonelinkRing className="w-16 h-16 text-gray-700" />

          <div className="h-fit">
            <h1 className="mb-3 font-bold text-sm md:text-xl text-gray-700">
              Further Information or Appointment
            </h1>
            <ButtonGray children="Call Us" />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div
        className="h-[460px] w-full  bg-[url('https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
       bg-cover bg-no-repeat bg-center  flex flex-col justify-center mb-10 relative"
      >
        <div className="w-full h-full bg-[#00A3C8] opacity-60 "></div>
        <div className="w-full h-full absolute top-0 flex justify-center">
          <div className="m-auto flex flex-col md:flex-row items-center gap-10">
            <p className="text-2xl md:text-5xl font-bold text-white">
              Best Promo For You
            </p>
            <div className=" h-fit w-[380px] md:w-[570px] overflow-x-auto">
              <div className="flex gap-5 ">{mapImg()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="pt-20 pb-32">
        <div>
          <h1 className="m-auto text-3xl md:text-5xl font-bold md:px-52 mb-10 md:mb-16 w-[320px] md:w-full">
            {" "}
            Latest Update
          </h1>
          <div className="flex flex-col md:flex-row  md:justify-between gap-5 md:gap-0 items-center md:px-52">
            <LastUpdate
              date="21 feb"
              tittle="Sub Pin Polio at National Hospital"
              body="On February 20 2024, National Hospital in collaboration with the Surabaya City Government held Sub Pin Polio ..."
              img={
                "https://images.unsplash.com/photo-1578496781985-452d4a934d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <LastUpdate
              date="21 feb"
              tittle="Sub Pin Polio at National Hospital"
              body="On February 20 2024, National Hospital in collaboration with the Surabaya City Government held Sub Pin Polio ..."
              img={
                "https://images.unsplash.com/photo-1578496781985-452d4a934d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <LastUpdate
              date="21 feb"
              tittle="Sub Pin Polio at National Hospital"
              body="On February 20 2024, National Hospital in collaboration with the Surabaya City Government held Sub Pin Polio ..."
              img={
                "https://images.unsplash.com/photo-1578496781985-452d4a934d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className="hidden md:block">
        <div className=" flex flex-col md:flex-row justify-center gap-5  items-center md:px-52">
          {mapSection6()}
        </div>
      </div>

      <div className="block md:hidden">
        <div className="h-fit w-[360px] overflow-x-auto m-auto">
          <div className="flex gap-5 md:gap-0  items-center justify-between ">
            {mapSection6()}
          </div>
        </div>
      </div>

      {/* section 7 */}

      <div className="w-full h-[300px] relative bg-[#00A3C8] flex items-center text-white md:px-60 mt-[100px]">
        <div className="w-full">
          <p className="font-bold text-3xl mb-8 px-4 md:px-0">
            Download Our New App
          </p>

          <p className="md:text-xl w-full md:w-[680px] px-4 md:px-0">
            Find the convenience of National Hospital services by downloading
            our application on google playstore or app store
          </p>

          <div className="flex gap-10 mt-6 px-4 md:px-0">
            <img
              src="editapp.png"
              alt=""
              className="h-[38px] md:h-[50px] w-fit"
            />
            <img
              src="editgoogle.png"
              alt=""
              className="h-[40px] md:h-[50px] w-fit"
            />
          </div>
        </div>
        <img
          src="app-host2.png"
          alt=""
          className="absolute -top-[60px] h-[340px] right-80 hidden md:block"
        />
      </div>
    </main>
  );
}
