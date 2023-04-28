import React from "react";
import { SiOpensea } from "react-icons/si";
import { MdWallet } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Header({ account, setAccount }) {
  const [coinPrice, setCoinPrice] = useState();

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );
      //   console.log(response);
      setCoinPrice([
        { symbol: "BTC", price: response.data[0].trade_price },
        { symbol: "ETH", price: response.data[1].trade_price },
        { symbol: "MATIC", price: response.data[2].trade_price },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogin = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickLogout = () => {
    setAccount("");
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  useEffect(() => {
    if (coinPrice) {
      let interverId = setInterval(() => {
        getCoinPrice();
      }, 1000 * 60 * 5);

      return () => {
        clearInterval(interverId);
      };
    }
  }, [coinPrice]);

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-display">
      <div className="flex items-center">
        <Link to="/">
          <button className="flex items-center text-sky-500 ">
            <div className="w-[31px] h-[31px] rounded-full flex justify-center items-center bg-white">
              <SiOpensea size={32} />
            </div>
            <div className="text-white text-xl ml-2 font-semibold">OpenSea</div>
          </button>
        </Link>
        <Link to="/collection">
          <button className="ml-8 px-8 border-l-2 font-semibold">
            Collection
          </button>
        </Link>
      </div>
      <div className="flex items-center">
        {coinPrice && (
          <ul className="flex text-sm mr-4 font-semibold">
            {coinPrice.map((v, i) => {
              return (
                <li className="ml-2" key={i}>
                  {v.symbol} : {(v.price / 1000).toLocaleString()}k₩
                </li>
              );
            })}
          </ul>
        )}
        {account ? (
          <button
            onClick={onClickLogout}
            className="flex items-center px-4 py-2 bg-[#ffffff] bg-opacity-20 rounded-md font-semibold text-opacity-100"
          >
            <div className="mr-2">
              <MdWallet size={24} />
            </div>
            <div>
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)} 님 환영합니다
            </div>
          </button>
        ) : (
          <button
            onClick={onClickLogin}
            className="px-4 py-2 bg-[#ffffff] bg-opacity-20 rounded-md font-semibold text-opacity-100"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
