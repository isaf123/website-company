"use client";
import { IoIosSearch } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import ButtonGray from "@/components/Button1";
import { TbAmbulance } from "react-icons/tb";
import { MdOutlineAddLocation } from "react-icons/md";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import Button2 from "@/components/Button2";
import LastUpdate from "@/components/LastUpdate";
import Testimony from "@/components/Testimony";
import { BASE_URL } from "@/utils/util";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { getBlogPosts } from "@/utils/contentful";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const slides = ["/promo1.png", "/promo2.png", "/promo3.png"];
  const [getName, setGetName] = useState<any[]>([]);
  const [getPhoto, setPhoto] = useState<any[]>([]);
  const router = useRouter();

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

  useEffect(() => {
    onHandlePhoto();
    getOtherArticle();
  }, []);

  const [getData, setGetData] = useState<any[]>([]);

  const getOtherArticle = async () => {
    try {
      const response = await getBlogPosts();
      setGetData(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(getData);

  const onHandlePhoto = async () => {
    try {
      const newName = [];
      const newPhoto = [];
      for (let i = 0; i < 3; i++) {
        const response = await axios.get(BASE_URL);
        const photo = response.data.results[0].picture.large;
        const firstName = response.data.results[0].name.first;
        const lastName = response.data.results[0].name.last;
        const name = `${firstName} ${lastName}`;
        newName.push(name);
        newPhoto.push(photo);
      }
      setGetName(newName);
      setPhoto(newPhoto);
    } catch (error) {}
  };

  console.log(getName);
  // console.log(getPhoto);

  const mapSection6 = () => {
    return infoPhoto.map((val, idx) => (
      <div
        className="h-fit cursor-pointer hover:transform hover:scale-110 transition-transform duration-300"
        key={idx}
      >
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
      <Image key={idx} src={val} width={800} height={600} alt="" />
      // <img key={idx} src={val} alt="" className="h-[255px] md:h-[300px]" />
    ));
  };

  const mapImgmobile = () => {
    return slides.map((val, idx) => (
      <Image key={idx} src={val} width={340} height={80} alt="" />
      // <img key={idx} src={val} alt="" className="h-[255px] md:h-[300px]" />
    ));
  };

  return (
    <main className="relative w-full h-fit">
      {}
      <div className="relative overflow-hidden h-[220px] md:h-[640px] ">
        <Image
          src={"/ambul.png"}
          alt=""
          width={1536}
          height={640}
          className="absolute -top-20 brightness-[0.3] hidden md:block"
        />
        <Image
          src={"/ambul.png"}
          alt=""
          width={400}
          height={30}
          className="absolute -top-20 brightness-[0.3] block md:hidden"
        />
      </div>

      <div className="h-[300px] md:h-[640px] w-full absolute flex top-0 justify-center items-center ">
        <div className="w-full">
          <h1 className="text-center text-gray-50  text-sm md:text-lg font-medium px-10 md:px-0 opacity-90 md:opacity-100 hidden md:block">
            Advanced healthcare, accessible at all times,
            <p>from anywhere. Book your appointment with a doctor now.</p>
          </h1>
          <div className="flex justify-center">
            <Button2 onClick={() => router.push("/finddoctor")}>
              Make an Appointment
            </Button2>
          </div>
          <div className="flex justify-center md:opacity-60">
            <div className="w-[500px] mt-6 flex rounded-md overflow-hidden justify-between mx-5 md:mx-0 border md:border-0 border-gray-400">
              <input className="w-full px-5" type="text" />
              <div className="bg-[#00A3C8] flex justify-center items-center py-2 px-6 hover:bg-blue-400 cursor-pointer">
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
            <ButtonGray>Find</ButtonGray>
          </div>
        </div>
        <div className="border w-[50%] md:w-[25%] bg-gray-200 flex items-center gap-1 md:gap-4 pl-4">
          <TbAmbulance className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />

          <div className="h-fit">
            <h1 className="mb-3 font-bold md:text-xl text-gray-700">
              Emergency Ambulance
            </h1>
            <ButtonGray>Find Ambulance</ButtonGray>
          </div>
        </div>
        <div className="border w-[50%] md:w-[25%] bg-gray-50 flex items-center gap-4 pl-4 py-6 md:py-8">
          <MdOutlineAddLocation className="w-10 h-10 md:w-16 md:h-16 text-gray-700" />

          <div className="h-fit">
            <h1 className="mb-3 font-bold md:text-xl text-gray-700">
              How to get to us
            </h1>
            <ButtonGray>Get Us</ButtonGray>
          </div>
        </div>
        <div className="border w-[50%] md:w-[25%] bg-gray-200 flex items-center gap-4 pl-4">
          <MdOutlinePhonelinkRing className="w-16 h-16 text-gray-700" />

          <div className="h-fit">
            <h1 className="mb-3 font-bold text-sm md:text-xl text-gray-700">
              Further Information or Appointment
            </h1>
            <ButtonGray>Call us</ButtonGray>
          </div>
        </div>
      </div>

      {/* section 3 */}
      {/* <Image
        src={"/hostloby.jpg"}
        alt=""
        width={400}
        height={100}
        className="block md:hidden brightness-[0.3]"
      /> */}
      <div
        className="hidden md:block h-[460px] w-full  bg-[url('https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
       bg-cover bg-no-repeat bg-center mb-10 relative brightness-50"
      >
        {" "}
      </div>
      {/* ///////////////////////////////////////////////////// */}
      <div className="w-full h-fit absolute md:top-[860px] flex justify-center">
        <div className=" flex flex-col md:flex-row items-center mt-10 md:mt-0 gap-10">
          <p className="text-2xl md:text-5xl font-bold md:text-white ">
            Best Promo For You
          </p>
          <div className=" h-fit w-[380px] md:w-[570px] overflow-x-auto">
            <div className="hidden md:block">
              <div className="flex gap-5 ">{mapImg()}</div>
            </div>
            <div className="block md:hidden">
              <div className="flex gap-5 ">{mapImgmobile()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="pt-20 pb-32">
        <div>
          <h1 className="m-auto text-3xl md:text-5xl font-bold pt-80 md:pt-0 md:px-52 mb-10 md:mb-16 w-[320px] md:w-full">
            {" "}
            Latest Update
          </h1>
          <div className="flex flex-col md:flex-row  md:justify-between gap-5 md:gap-0 items-center md:px-52">
            <LastUpdate date="21 feb" img={getData[0]?.image.fields.file.url}>
              {getData[0]?.titile}
            </LastUpdate>
            <LastUpdate date="21 feb" img={getData[1]?.image.fields.file.url}>
              {getData[1]?.titile}
            </LastUpdate>
            <LastUpdate date="21 feb" img={getData[2]?.image.fields.file.url}>
              {getData[2]?.titile}
            </LastUpdate>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-80 text-center mb-10 ">
        <div className="w-full py-3 border-t-2 border-b-2 my-3">
          <p className="text-2xl font-bold">HOSPITAL PROFILE</p>
        </div>
        <p className="text-md md:text-lg text-gray-600 leading-[30px]">
          National Hospital is located at Boulevard Famili Sel. No.Kav. 1
          Surabaya which provides excellent services with sophisticated
          technology and experienced health experts.
        </p>
      </div>

      {/* section testimony */}

      <div className="w-full pb-32 md:px-52">
        <h2 className="text-3xl font-bold text-center mb-16">
          What Our Patients Say
        </h2>
        <div className="overflow-x-auto h-fit w-full">
          <div className="flex justify-between w-[1120px] md:w-full h-[270px] items-end px-3">
            <Testimony
              name={getName[0]}
              testi="I highly recommend National Hospital to anyone in need of medical
            care. I felt welcomed and well taken care of. Thank you to the
            entire team for their dedication."
              position="Patient"
              fullst={4}
              blankst={1}
              src={getPhoto[0]}
            />

            <Testimony
              name={getName[1]}
              testi="The staff at XYZ Hospital provided exceptional care during my recent visit. Their professionalism and compassion made a stressful situation much more manageable."
              position="Patient"
              fullst={5}
              blankst={0}
              src={getPhoto[1]}
            />

            <Testimony
              name={getName[2]}
              testi="National Hospital exceeded all my expectations. The medical team was efficient and thorough, and I left feeling confident in the treatment I received. A truly remarkable healthcare facility."
              position="Patient"
              fullst={5}
              blankst={0}
              src={getPhoto[2]}
            />
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className="hidden md:block">
        <div className=" flex flex-col md:flex-row justify-center gap-5  items-center md:px-52 ">
          {mapSection6()}
        </div>
      </div>

      <div className="block md:hidden">
        <div className="h-fit w-[360px] overflow-x-auto m-auto">
          <div className="flex gap-5 md:gap-0  items-center justify-between">
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
            <Image
              src={"/editapp.png"}
              alt=""
              width={180}
              height={30}
              className="hidden md:block"
            />
            <Image
              src={"/editapp.png"}
              alt=""
              width={120}
              height={40}
              className="block md:hidden"
            />

            <Image
              src={"/editgoogle.png"}
              alt=""
              width={180}
              height={30}
              className="hidden md:block"
            />
            <Image
              src={"/editgoogle.png"}
              alt=""
              width={120}
              height={40}
              className="block md:hidden"
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
