import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Main from "./pages/main";
import Header from "./components/Header";
import { useState } from "react";
import Landing from "./pages/landing";
import Main2 from "./pages/main2";
import Home from "./pages/home";
import Mint from "./pages/Mint";

function App() {
  const [account, setAccount] = useState("");
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-gray-700 to-transparent min-h-screen text-white ">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Home account={account} />} />
          <Route path="/main" element={<Main account={account} />} />
          <Route path="/main2" element={<Main2 account={account} />} />
          <Route path="/collection" element={<Landing />} />
          <Route path="/mint" element={<Mint account={account} />} />
          <Route path="/main/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
