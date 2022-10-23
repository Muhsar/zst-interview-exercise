import React from "react";
import { Apartments as Homes } from "../utils/Apartments";

import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
export default function Apartments({ apartments, like, unlike }) {
  return (
    <div className="px-8 mt-5 mb-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {apartments.length
          ? apartments?.map((apt, i) => (
              <div
                className="flex-col w-full transition-all duration-500 transform rounded-t-xl"
                key={i}
              >
                <img
                  src={apt.url}
                  alt=""
                  className="object-cover object-center w-full transition-all duration-500 transform shadow rounded-xl h-72 hover:scale-105"
                />
                <div className="flex justify-between w-full mt-3">
                  <div className="font-base">Lekki, Nigeria</div>
                  <div className="flex items-center text-sm">
                    <AiFillStar />
                    <p className="ml-1 font-light">4.75</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-extralight">
                  Hosted by Amin Ajao
                </p>
                <p className="text-sm text-gray-500 font-extralight">
                  Oct 18 - 24
                </p>
                <div className="flex items-center justify-between mt-1">
                <p className="text-sm">
                  <span className="font-bold"> $50 </span> night
                </p>
                {
                  apt.liked ?
                  <AiFillHeart className="text-red-500 transition-all duration-500 transform cursor-pointer hover:scale-105" onClick={()=>unlike(apt.name)} />
                  :
                  <AiOutlineHeart className="text-red-500 transition-all duration-500 transform cursor-pointer hover:scale-105" onClick={()=>like(apt.name)} />
                }
                </div>
              </div>
            ))
          : Homes?.map((home, i) => (
              <div
                className="flex-col w-full transition-all duration-500 transform rounded-t-xl hover:scale-105 "
                key={i}
              >
                <div className="w-full transition-all duration-200 bg-gray-400 shadow rounded-xl h-72 animate-pulse" />
                <div className="w-1/2 h-2 my-2 transition-all duration-200 bg-gray-400 animate-pulse"></div>
                <div className="w-3/5 h-2 my-2 transition-all duration-200 bg-gray-400 animate-pulse"></div>
                <div className="w-1/3 h-2 my-2 transition-all duration-200 bg-gray-400 animate-pulse"></div>
                <div className="w-1/4 h-2 my-2 transition-all duration-200 bg-gray-400 animate-pulse"></div>
              </div>
            ))}
      </div>
    </div>
  );
}
