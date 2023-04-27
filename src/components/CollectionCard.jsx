import React from "react";
import { RxGear } from "react-icons/rx";
import { Link } from "react-router-dom";
function CollectionCard() {
  const ranNum = Math.floor(Math.random() * 1000) + 1;
  const imgSrc = `${process.env.REACT_APP_IMAGE_URL1}/${ranNum}.png`;
  return (
    <div className="w-[368px] h-[210px] rounded-2xl bg-slate-600 relative mt-16">
      <Link to="/main">
        <button>
          <img
            className=" w-[368px] h-[100px] object-cover rounded-t-2xl"
            src={`${process.env.REACT_APP_IMAGE_URL1}/23.png`}
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
            Da Den Bu
            <div className="ml-2 bg-gray-100 w-6 h-6 rounded-full flex justify-center items-center text-black">
              <RxGear size={16} />
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default CollectionCard;
