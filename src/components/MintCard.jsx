import React from "react";

function MintCard({ tokenId, metadata }) {
  // const [nfts]
  return (
    <div className="m-4 ml-4 bg-white text-gray-950 rounded-2xl">
      {metadata && (
        <div className="m-4 flex-col items-center ">
          <div className="font-bold text-lg pb-[4px] text-center">
            Name : {metadata.name}
          </div>
          <img className="w-[256px] h-[256px]" src={metadata.image} alt="1" />
          <div>
            {metadata.attributes.map((v, i) => {
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
    </div>
  );
}

export default MintCard;
