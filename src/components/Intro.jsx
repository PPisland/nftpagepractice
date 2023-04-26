import React from "react";
import { CONTRACT_ADDRESS } from "../web3.config";
import { HiCog8Tooth } from "react-icons/hi2";

function Intro({ totalNft, mintedNft, myNft }) {
  const ranNum = Math.floor(Math.random() * 1000) + 1;
  const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;
  return (
    <div className="bg-black bg-opacity-10">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2 text-yellow-500 text-9xl truncate opacity-20 pointer-events-none">
          DA DEN BU
        </div>
        <div className="relative py-4">
          <img
            className="absolute top-6 left-2 w-40 h-40 rounded-md"
            src={imgSrc}
            alt=""
          />
          <div className="w-44 h-44  rounded-md bg-white text-black flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Da Den Bu
          <div className="bg-white bg-opacity-20 w-7 h-7 rounded-full ml-2 flex justify-center items-center text-gray-950">
            <HiCog8Tooth size={20} />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-black ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">
          다덴부란(.env란 "environment"의 약어)은 소프트웨어 개발에서 자주
          사용되는 파일 형식 중 하나입니다. 이 파일은 소프트웨어 개발자들이
          프로젝트에서 사용되는 환경 변수(environment variable)를 저장하는 데
          사용됩니다.
        </div>
        <div className="flex items-center text-center py-4">
          <div>
            <div className="font-bol">{totalNft}</div>
            <div className="text-gray-300">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bol">{mintedNft}</div>
            <div className="text-gray-300">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bol">{myNft}</div>
            <div className="text-gray-300">나의 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
