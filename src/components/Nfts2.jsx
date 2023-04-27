import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { SiAxios } from "react-icons/si";
import axios from "axios";
import NftCard from "./NftCard";

function Nfts2({ page, mintedNft }) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];
      setNfts();
      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;
        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL2}/${tokenId}.json`
        );
        nftArray.push({ tokenId, metadata: response.data });
      }
      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);
    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          onClick={onClickPage(i + 1)}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-white text-opacity-50"
          }`}
        >
          {i + 1} <span>페이지</span>
        </button>
      );
    }
    return pageArray;
  };

  useEffect(() => {
    getNfts(1);
  }, []);
  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mt-4">{pageComp()}</div>
      <ul className="mt-8 grid gap-8 grid-cols-2 2xl:grid-cols-5 justify-items-center">
        {nfts ? (
          nfts.map((v, i) => {
            return (
              <NftCard
                key={i}
                tokenId={v.tokenId}
                metadata={v.metadata}
                mintedNft={mintedNft}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}

export default Nfts2;
