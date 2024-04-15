import React from "react";
import brandSVG from "../../icons/brand.svg";

function LandingPage() {
  return (
    <div className="font-semibold">
      <div className="px-64 pt-32 flex justify-center">
        <div className="flex flex-row gap-2">
          <img src={brandSVG} alt="" />
          <h1 className="text-xl">eLibrary</h1>
        </div>
      </div>
      <div className="px-16 pt-24 flex flex-row">
        <div>
          <h1 className="header text-4xl p-2 flex">Welcome to eLibrary</h1>
          <p className="text-xl p-2 text-gray-500">
            eLibrary is a digital library that allows you to borrow and return
            books online.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
