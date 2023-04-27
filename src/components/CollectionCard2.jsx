import React from "react";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
function CollectionCard2() {
  const ranNum = Math.floor(Math.random() * 25) + 1;
  const imgSrc = `${process.env.REACT_APP_IMAGE_URL2}/${ranNum}.png`;
  return (
    <div className="w-[368px] h-[210px] rounded-2xl bg-slate-600 relative mt-16">
      <Link to="/main2">
        <button>
          <img
            className=" w-[368px] h-[100px] object-cover rounded-t-2xl"
            src={`${process.env.PUBLIC_URL}/images/8.png`}
            alt="1"
          />
          <div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88px] h-[88px] rounded-full bg-slate-600"></div>
            <div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full"
                src={imgSrc}
                alt="1"
              />
            </div>
          </div>
          <div className="rounded-b-2xl text-xl font-bold pt-16 text-white  flex items-center justify-center">
            STAR Project
            <div className="ml-2 bg-gray-100 w-6 h-6 rounded-full flex justify-center items-center text-black">
              <IoStar size={16} />
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default CollectionCard2;
