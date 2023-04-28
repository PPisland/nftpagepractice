import React from "react";
import { BsDiscord } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <div className="mt-16 p-4 bg-sky-600 max-w-screen font-display">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="">
          <div
            className="text-2xl font-semibold
          "
          >
            Join the Community
          </div>
          <div className="flex">
            <button className="m-2 p-4 w-12 h-12 bg-sky-500 rounded-xl flex justify-center items-center hover:bg-sky-400">
              <div>
                <BsDiscord size={24} />
              </div>
            </button>
            <button className="m-2 p-4 w-12 h-12 bg-sky-500 rounded-xl flex justify-center items-center hover:bg-sky-400">
              <div>
                <SiVelog size={24} />
              </div>
            </button>
            <button className="m-2 p-4 w-12 h-12 bg-sky-500 rounded-xl flex justify-center items-center hover:bg-sky-400">
              <div>
                <FiMail size={24} />
              </div>
            </button>
          </div>
        </div>
        <div className="text-base">
          © 2023 Block Chain School Networks, Designed by PPisland
        </div>
      </div>
    </div>
  );
}

export default Footer;
