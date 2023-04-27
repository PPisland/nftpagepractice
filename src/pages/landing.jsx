import React from "react";
import CollectionCard from "../components/CollectionCard";
import { useState } from "react";
import CollectionCard2 from "../components/CollectionCard2";

function Landing() {
  const [collection, setCollection] = useState("");
  return (
    <div className=" bg-white opacity-80 min-h-screen text-black">
      <div className="max-w-screen-xl mx-auto py-16 flex-col justify-center items-center">
        <div className="text-4xl font-bold ">Collection</div>
        <div className="flex ">
          <div>
            <CollectionCard />
          </div>
          <div className="ml-8">
            <CollectionCard2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
