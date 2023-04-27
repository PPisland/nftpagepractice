import React from "react";

import Web3 from "web3";
import { CONTRACT_ABI2, CONTRACT_ADDRESS2 } from "../web3.config";
import { useState } from "react";
import { useEffect } from "react";

import Nfts2 from "../components/Nfts2";
import Intro2 from "../components/Intro2";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI2, CONTRACT_ADDRESS2);
function Main2({ account }) {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
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
      setPage(parseInt((parseInt(response) - 1) / 10 + 1));
    } catch (error) {
      console.error(error);
    }
  };

  const getMyNft = async () => {
    try {
      if (!contract || !account) return;
      const response = await contract.methods.balanceOf(account).call();
      // console.log(response);
      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMintedNft();
    getTotalNft();
  }, []);

  useEffect(() => {
    getMyNft();
    // console.log("test");
  }, [account]);

  return (
    <div>
      <Intro2 totalNft={totalNft} mintedNft={mintedNft} myNft={myNft} />
      <Nfts2 page={page} mintedNft={mintedNft} />
    </div>
  );
}

export default Main2;
