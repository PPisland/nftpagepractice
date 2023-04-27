import React from "react";
import { CONTRACT_ADDRESS1, CONTRACT_ADDRESS2 } from "../web3.config";
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

function Intro2({ totalNft, mintedNft, myNft }) {
  // const [ranNum, setRanNum] = useState(1);

  // function getNum() {
  //   const ran = Math.floor(Math.random() * 1000) + 1;
  //   setRanNum(ran);
  // }

  // useEffect(() => {
  //   if (ranNum) {
  //     let interverId = setInterval(() => {
  //       getNum();
  //     }, 1000);

  //     return () => {
  //       clearInterval(interverId);
  //     };
  //   }
  // }, [ranNum]);
  // const imgSrc = `${process.env.PUBLIC_URL}/.png`;
  return (
    <div className="bg-white bg-opacity-10">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2 text-yellow-500 text-9xl truncate opacity-20 pointer-events-none">
          STAR PROJECT
        </div>
        <div className="relative py-4">
          <img
            className="absolute top-6 left-2 w-40 h-40 rounded-md"
            src={`${process.env.PUBLIC_URL}/images/8.png`}
            alt=""
          />
          <div className="w-44 h-44  rounded-md bg-white text-black flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          STAR Project
          <div className="bg-white bg-opacity-20 w-7 h-7 rounded-full ml-2 flex justify-center items-center text-gray-950">
            <IoStar size={20} />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-black ml-2">{CONTRACT_ADDRESS2}</div>
        </div>
        <div className="mt-2 text-gray-300">
          Star Project는 BlockChainSchool 3기생 PPisland가 만든 NFT
          Project입니다.
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

export default Intro2;
