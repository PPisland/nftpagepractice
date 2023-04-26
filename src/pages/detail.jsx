import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RxGear } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { BiTagAlt } from "react-icons/bi";

function Detail() {
  const [metadata, setMetadata] = useState();
  const [trait, setTrait] = useState(false);
  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );
      // console.log(response);
      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickTrait = () => {
    setTrait(!trait);
  };

  useEffect(() => {
    getNft();
  }, []);
  return (
    <div className=" flex flex-col xl:flex-row justify-center  py-16 bg-white bg-opacity-30">
      {metadata ? (
        <>
          <div className="max-w-[512px]">
            <img
              className="rounded-xl"
              src={metadata.image}
              alt={metadata.name}
            />
            <div className="rounded-xl bg-white bg-opacity-60 text-gray-900">
              <div className="mx-2 pt-4 border-b-2 flex justify-between items-center">
                <div className="font-bold pb-2 flex items-center">
                  <div className="mr-1 text-black">
                    <BiTagAlt size={18} />
                  </div>
                  <div>Traits</div>
                </div>
                {!trait ? (
                  <button onClick={onClickTrait} className="pb-2 mr-2">
                    <GoChevronDown size={24} />
                  </button>
                ) : (
                  <button onClick={onClickTrait} className="pb-2 mr-2">
                    <GoChevronUp size={24} />
                  </button>
                )}
              </div>
              {trait && (
                <ul className=" grid grid-cols-4 gap-8 py-8 ">
                  {metadata.attributes.map((v, i) => {
                    return (
                      <li key={i} className="mx-4">
                        <div>{v.trait_type}</div>
                        <div className="mt-1 border-t-2 font-bold">
                          {v.value}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className="m-8 text-black">
            <div className="text-4xl flex items-center">
              <div>{metadata.name}</div>
              <div className="ml-2 bg-gray-100 w-6 h-6 rounded-full flex justify-center items-center">
                <RxGear size={20}></RxGear>
              </div>
            </div>
            <div className="mt-8 text-2xl">{metadata.description}</div>
          </div>
        </>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default Detail;
