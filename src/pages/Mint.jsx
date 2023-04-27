import React from "react";
import { IoStar } from "react-icons/io5";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import Web3 from "web3";
import { CONTRACT_ABI2, CONTRACT_ADDRESS2 } from "../web3.config";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI2, CONTRACT_ADDRESS2);

function Mint({ account }) {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [metaData, setMetadata] = useState("");

  const [ranNum, setRanNum] = useState(1);
  const [page, setPage] = useState(1);

  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  const onClickFaq1 = () => {
    setFaq1(!faq1);
  };
  const onClickFaq2 = () => {
    setFaq2(!faq2);
  };
  const onClickFaq3 = () => {
    setFaq3(!faq3);
  };
  const onClickFaq4 = () => {
    setFaq4(!faq4);
  };

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

  const onClickMint = async () => {
    try {
      if (!account) return;

      // const uri =
      //   "https://gateway.pinata.cloud/ipfs/QmS52L4KQFfcJFupGuCeG2J6ubC7gavWDM845oEQUk5azc";
      const mintNft = await contract.methods.mintNft().send({ from: account });
      // console.log(mintNft);
      if (!mintNft.status) return;
      const balanceOf = await contract.methods.balanceOf(account).call();
      const tokenOfOwnerByIndex = await contract.methods
        .tokenOfOwnerByIndex(account, parseInt(balanceOf) - 1)
        .call();

      const tokenURI = await contract.methods
        .tokenURI(tokenOfOwnerByIndex)
        .call();
      const response = await axios.get(tokenURI);
      // console.log(response);
      setMetadata(response.data);
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
      {/* top */}
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
      {/* menu */}
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
            Team
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
            Roadmap
          </button>
        </div>
      </div>
      {/* info1 */}

      {page == 1 && (
        <>
          <div className="m-8 flex">
            <div className="text-gray-950 max-w-screen-sm">
              <div className="text-3xl font-bold">About this collection</div>
              <div className="mt-2 ">
                <Link to="/main2">
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
                </Link>
              </div>
              <div className="text-base mt-4 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                quis nesciunt facere veritatis facilis atque ipsa laudantium
                itaque vero error deserunt incidunt illum repellat unde totam,
                et quia fuga saepe!
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
              <div className="max-w-[500px] rounded-2xl bg-white bg-opacity-80 mt-4 px-4 py-4">
                <div className="flex items-center">
                  MINT LIVE
                  <div className="w-2 h-2 bg-gradient-to-b rounded-full from-green-400 to-green-600 ml-2 animate-ping delay-1000 "></div>
                </div>
                <button
                  onClick={onClickMint}
                  className="mt-2 px-4 py-4  rounded-md  bg-sky-500  text-white  hover:bg-sky-400"
                >
                  MINT
                </button>
              </div>
            </div>
            {/* info2 */}
            <div className="m-4  bg-white text-gray-950 rounded-2xl">
              {metaData && (
                <div className="m-4 flex-col items-center ">
                  <div className="font-bold text-lg pb-[4px] text-center">
                    Name : {metaData.name}
                  </div>
                  <img
                    className="w-[256px] h-[256px]"
                    src={metaData.image}
                    alt="1"
                  />
                  <div>
                    {metaData.attributes.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className="mt-2 border-b-[1px] border-black flex-col"
                        >
                          <span>{v.trait_type} : </span>
                          <span>{v.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div></div>
            </div>
          </div>
        </>
      )}
      {page == 2 && (
        <div className="border-gray-600 rounded-2xl bg-white max-w-md p-4 m-8 flex items-center text-black">
          <img
            className="w-28 h-28 rounded-full"
            src={`${process.env.PUBLIC_URL}/images/2.png`}
            alt="1"
          />
          <div className="ml-4 ">
            <div className=" text-2xl font-bold pb-2">PPisland - Havy#9934</div>
            <div className="font-base text-base">
              안녕하세요 블체스 3기 조하빈입니다. H662 강사님의 무한한
              가르침으로 여기까지 올 수 있었습니다. 감사합니다 스승님 블체스 3기
              화이팅!
            </div>
          </div>
        </div>
      )}
      {page == 3 && (
        <div className="flex-col">
          {/* 1번질문 */}
          <div className=" border-gray-600 rounded-2xl bg-white max-w-2xl p-4 m-4  text-black">
            <div className="flex justify-between items-center">
              <div className=" text-2xl font-semibold ">
                나이가 어떻게 되나요?
              </div>
              {!faq1 ? (
                <button onClick={onClickFaq1}>
                  <GoChevronDown size={28} />
                </button>
              ) : (
                <button onClick={onClickFaq1}>
                  <GoChevronUp size={28} />
                </button>
              )}
            </div>
            {faq1 && (
              <div className="text-base font-base mt-2">
                제 나이는 28살입니다.
              </div>
            )}
          </div>
          {/* 2번질문 */}
          <div className=" border-gray-600 rounded-2xl bg-white max-w-2xl p-4 m-4  text-black">
            <div className="flex justify-between items-center">
              <div className=" text-2xl font-semibold ">
                사는 곳은 어디인가요?
              </div>
              {!faq2 ? (
                <button onClick={onClickFaq2}>
                  <GoChevronDown size={28} />
                </button>
              ) : (
                <button onClick={onClickFaq2}>
                  <GoChevronUp size={28} />
                </button>
              )}
            </div>
            {faq2 && (
              <div className="text-base font-base mt-2">
                부산에 살고있습니다.
              </div>
            )}
          </div>
          {/* 3번질문 */}
          <div className=" border-gray-600 rounded-2xl bg-white max-w-2xl p-4 m-4  text-black">
            <div className="flex justify-between items-center">
              <div className=" text-2xl font-semibold ">
                가장 좋아하는 취미가 무엇인가요?
              </div>
              {!faq3 ? (
                <button onClick={onClickFaq3}>
                  <GoChevronDown size={28} />
                </button>
              ) : (
                <button onClick={onClickFaq3}>
                  <GoChevronUp size={28} />
                </button>
              )}
            </div>
            {faq3 && (
              <div className="text-base font-base mt-2">
                게임을 가장 좋아합니다 - 롤토체스, 배틀그라운드.
              </div>
            )}
          </div>
          {/* 4번질문 */}
          <div className=" border-gray-600 rounded-2xl bg-white max-w-2xl p-4 m-4 mb-16  text-black">
            <div className="flex justify-between items-center">
              <div className=" text-2xl font-semibold ">
                블체스 좋아하시나요?
              </div>
              {!faq4 ? (
                <button onClick={onClickFaq4}>
                  <GoChevronDown size={28} />
                </button>
              ) : (
                <button onClick={onClickFaq4}>
                  <GoChevronUp size={28} />
                </button>
              )}
            </div>
            {faq4 && <div className="text-base font-base mt-2">💕😜.</div>}
          </div>
        </div>
      )}
      {page == 4 && <div>4</div>}
    </>
  );
}

export default Mint;
