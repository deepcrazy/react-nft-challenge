import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import p1 from "./punks/1.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  // "https://testnets-api.opensea.io/assets?asset_contract_address=0xC36d211Da64a4cDD727F722196545Ec8799BeD9e&order_direction=asc"
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x4AC148f98839F83aA3C85C79B7963c4943B34629&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };

    getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image={p1}
      />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
