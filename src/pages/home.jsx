import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex-col">
      <div className="max-w-screen-2xl h-96 mx-auto rounded-2xl  mt-8 relative">
        <div className="absolute top-4 left-4 w-30 px-4 py-2 bg-white bg-opacity-50 text-white rounded-2xl text-center flex items-center">
          Mint Live
          <div className="w-2 h-2 bg-gradient-to-b rounded-full from-green-400 to-green-600 ml-2 animate-ping delay-1000 "></div>
        </div>
        <img
          className="w-full  h-96 object-cover rounded-2xl"
          src={`${process.env.PUBLIC_URL}/images/8.png`}
          alt="1"
        />
        <Link to="/mint">
          <button className="absolute right-4 bottom-4 w-30 px-4 py-2 bg-white bg-opacity-50 text-white rounded-2xl text-center hover:bg-white hover:text-black ">
            Mint Now
          </button>
        </Link>
      </div>
      <div className="max-w-screen-2xl h-96 mx-auto rounded-2xl  mt-8 relative">
        <div className="absolute top-4 left-4 w-30 px-4 py-2 bg-white bg-opacity-50 text-white rounded-2xl text-center flex items-center">
          SOLD OUT
          <div className="w-4 h-4 bg-gradient-to-b rounded-full from-red-500 to-red-600 ml-2 "></div>
        </div>
        <div className="absolute bg-black w-[1536px] h-[384px] bg-opacity-40 flex justify-center items-center text-4xl font-bold rounded-2xl ">
          SOLD OUT
        </div>
        <img
          className="w-full   h-96 object-cover rounded-2xl"
          src={`${process.env.REACT_APP_IMAGE_URL1}/23.png`}
          alt="1"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
