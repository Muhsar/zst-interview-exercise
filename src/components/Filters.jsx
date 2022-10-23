import React from "react";
import Icons from "../utils/Icons";
export default function Filters({ handleFilter }) {
  return (
    <div className="w-full px-8 mt-5 border-b shadow">
      <div className="grid grid-cols-2 gap-4">
        {Icons().map((icon, i) => (
          <div
            className="flex flex-col items-center pb-4"
            key={i}
            onClick={() => handleFilter(icon.category)}
          >
            <icon.icon className="w-6 h-6 text-gray-500 cursor-pointer font-extralight" />
            <p className="w-full text-xs text-center">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
