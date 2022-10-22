import React from "react";
import { BiChevronUp, BiCopyright, BiDollar, BiGlobe } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="fixed bottom-0 z-10 flex items-center justify-between w-full px-8 py-4 bg-white border-t">
      <div className="flex items-center">
        <div className="flex items-center text-sm font-light">
          <BiCopyright />
          <p>2022 Airbnb, Inc.</p>
        </div>
        <div className="mx-2 -mt-2 text-sm font-light">.</div>
        <div className="text-sm font-light">Privacy</div>
        <div className="mx-2 -mt-2 text-sm font-light">.</div>
        <div className="text-sm font-light">Terms</div>
        <div className="mx-2 -mt-2 text-sm font-light">.</div>
        <div className="text-sm font-light">Sitemap</div>
        <div className="mx-2 -mt-2 text-sm font-light">.</div>
        <div className="text-sm font-light">Destinations</div>
      </div>
      <div className="flex items-center text-sm">
        <div className="flex items-center">
          <BiGlobe className="w-5 h-5 mr-2" />
          <p className="">English (US)</p>
        </div>
        <div className="flex items-center mx-5">
            <BiDollar className="w-4 h-4 mr-2" />
            <p className="">USD</p>
        </div>
        <div className="flex items-center">
            <p className="">Support & resources</p>
            <BiChevronUp className="w-5 h-5 ml-2" />
        </div>
      </div>
    </div>
  );
}
