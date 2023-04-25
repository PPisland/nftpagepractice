import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Main from "./pages/main";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-gray-700 to-transparent min-h-screen text-white">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
