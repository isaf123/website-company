"use client";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { useMediaQuery } from "@react-hook/media-query";

export default function Home() {
  return (
    <main className="relative w-full h-fit">
      {}
      <div
        className="h-[300px] md:h-[640px] w-full 
        bg-[url('https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
        bg-cover bg-no-repeat bg-center brightness-[.3] flex flex-col justify-center"
      ></div>
      <div className="absolute top-[30%] md:top-[30%] md:left-[35%] w-[390px]">
        <h1 className="text-center text-gray-50  text-sm md:text-lg font-medium px-10 md:px-0 opacity-90 md:opacity-100 hidden md:block">
          Advanced healthcare, accessible at all times,
          <p>from anywhere. Book your appointment with a doctor now.</p>
        </h1>
        <div className="flex justify-center">
          <button className="bg-blue-500 px-4 py-2 rounded-md align-center text-white text-sm hover:bg-blue-400 md:mt-6">
            Make an Appoinment
          </button>
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
    </main>
  );
}
