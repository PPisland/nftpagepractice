import React from "react";
import { RxGear } from "react-icons/rx";
import { Link } from "react-router-dom";

function NftCard2({ tokenId, metadata, mintedNft }) {
  return (
    <div className="h-[390px] rounded-2xl bg-white pb-4  mb-8 realtive">
      {parseInt(mintedNft) < tokenId && (
        <div className="absolute bg-black w-[279px] h-[390px] bg-opacity-50 flex justify-center items-center text-4xl font-bold rounded-2xl ">
          Not Minted
        </div>
      )}
      <img
        className="rounded-t-2xl w-[279px] h-[279px]"
        src={metadata.image}
        alt={metadata.name}
      />
      <div className=" mt-4 text-lg font-bold flex items-center px-4 text-black">
        Da Den Bu
        <div className="ml-2 bg-gray-100 w-6 h-6 rounded-full flex justify-center items-center">
          <RxGear size={16} />
        </div>
      </div>
      <div className="mt-2 px-4 text-xl font-bold text-black flex justify-between">
        <div># {tokenId}</div>
        <div className=" text-lg ">
          <Link to={`/main2/${tokenId}`}>
            <button
              disabled={parseInt(mintedNft) < tokenId}
              className="bg-gray-50 text-gray-950 rounded-md px-4 py-2  hover:bg-gray-500"
            >
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NftCard2;
