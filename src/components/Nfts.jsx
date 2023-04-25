import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SiAxios } from "react-icons/si";

function Nfts({ page }) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      for (let i = 0; i < page; i++) {
        const tokenId = i + 1 + (p - 1) * 10;
        let response = await SiAxios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );
        nftArray.push({ tokenId, metadata: response.data });
        setNfts(nftArray);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);
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
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-4">{pageComp()}</div>
    </div>
  );
}

export default Nfts;
