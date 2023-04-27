import React from "react";
import { IoStar } from "react-icons/io5";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import Web3 from "web3";
import { CONTRACT_ABI2, CONTRACT_ADDRESS2 } from "../web3.config";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI2, CONTRACT_ADDRESS2);

function Mint({ account }) {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);

  const [ranNum, setRanNum] = useState(1);
  const [page, setPage] = useState(1);

  const getTotalNft = async () => {
    try {
      if (!contract) return;
      const response = await contract.methods.totalNft().call();
      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;
      const response = await contract.methods.totalSupply().call();
      setMintedNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMintedNft();
    getTotalNft();
  }, []);

  function getNum() {
    const ran = Math.floor(Math.random() * 1000) + 1;
    setRanNum(ran);
  }

  const onClickPage = (p) => () => {
    return setPage(p);
  };

  useEffect(() => {
    if (ranNum) {
      let interverId = setInterval(() => {
        getNum();
      }, 100000);

      return () => {
        clearInterval(interverId);
      };
    }
  }, [ranNum]);

  const imgSrc = `${process.env.REACT_APP_IMAGE_URL2}/${ranNum}.png`;
  return (
    <>
      <div className="relative border-b-2 border-black text-gray-950">
        <img
          className=" w-full  h-[500px] object-cover  "
          src={`${process.env.PUBLIC_URL}/images/8.png`}
          alt="1"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-8">
          <div className="relative py-4">
            <img
              className="absolute top-6 left-2 w-28 h-28 rounded-md"
              src={imgSrc}
              alt=""
            />
            <div className="w-32 h-32  rounded-md bg-white text-black flex justify-center items-center">
              Loading...
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-5xl font-extrabold">STAR PROJECT</div>
            <div className="w-8 h-8 rounded-full bg-white bg-opacity-50 flex justify-center items-center ml-2">
              <IoStar size={28} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-3xl font-">By </div>
            <div className="text-3xl font-bold ml-2">PPISLAND</div>
            <div className="ml-2 text-gray-900">
              <BsCheckCircleFill size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="m-8  text-gray-600 border-b-2 border-gray-600 relative">
        <div className=" flex text-xl font-bold ">
          <button
            onClick={onClickPage(1)}
            className="hover:text-black  hover:border-b-[3px] hover:border-black "
          >
            Mint
          </button>
          <button
            onClick={onClickPage(2)}
            className="ml-4 hover:text-black hover:border-b-[3px] hover:border-black"
          >
            Roadmap
          </button>
          <button
            onClick={onClickPage(3)}
            className="ml-4 hover:text-black hover:border-b-[3px] hover:border-black"
          >
            FAQ
          </button>
          <button
            onClick={onClickPage(4)}
            className="ml-4 hover:text-black hover:border-b-[3px] hover:border-black"
          >
            Team
          </button>
        </div>
      </div>
      <div className="m-8">
        {page == 1 && (
          <div className="text-gray-950 max-w-screen-sm">
            <div className="text-3xl font-bold">About this collection</div>
            <div className="mt-2 ">
              <button className="px-4 flex items-center hover:bg-white hover:bg-opacity-25">
                <div className="relative py-4">
                  <img
                    className="absolute top-6 left-2 w-20 h-20 rounded-md"
                    src={`${process.env.PUBLIC_URL}/images/8.png`}
                    alt="1"
                  />
                  <div className="w-24 h-24  rounded-md bg-white text-black flex justify-center items-center">
                    Loading...
                  </div>
                </div>
                <div className="ml-4 flex flex-col justify-center items-center">
                  <div className="text-xl font-semibold">Star Project</div>
                  <div className="text-base text-gray-800">Ethereum</div>
                </div>
              </button>
            </div>
            <div className="text-base mt-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quis nesciunt facere veritatis facilis atque ipsa laudantium
              itaque vero error deserunt incidunt illum repellat unde totam, et
              quia fuga saepe!
            </div>
            <div className="w-[500px] flex justify-between mt-4">
              <div className="text-lg font-bold">
                {Math.floor((mintedNft / totalNft) * 100)}% Minted
              </div>
              <div className="text-lg">
                {mintedNft}/{totalNft}
              </div>
            </div>
            <div className="w-[500px] bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className={`w-[${
                  (mintedNft / totalNft) * 100
                }] bg-blue-600 h-2.5 rounded-full`}
              ></div>
            </div>
          </div>
        )}
        {page == 2 && <div>2</div>}
        {page == 3 && <div>3</div>}
        {page == 4 && <div>4</div>}
      </div>
    </>
  );
}

export default Mint;
