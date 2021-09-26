import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "../../../components/Table";

const tableCells = [
  {
    id: "name",
    disablePadding: true,
    label: "Asset/Contract name",
  },
  { id: "bid", disablePadding: false, label: "Bid" },
  { id: "ask", disablePadding: false, label: "Ask" },
  { id: "price", disablePadding: false, label: "Price" },
  { id: "underlying", disablePadding: false, label: "Underlying Asset" },
  {
    id: "volumeUsd24h",
    disablePadding: false,
    label: "Volume(USD) for last 24 hours",
  },
];

const marketsFilter = {
  underlying: ["BTC", "ETH"],
};

function Home() {
  const [markets, setMarkets] = useState([]);
  useEffect(async () => {
    async function fetchData() {
      let res = await axios.get("/api/markets");
      // Filter the data according to the type. (“spot”)
      let markets = res.data.result.filter((data) => data.type !== "spot");
      // Display the asset/contract if the underlying asset is one of the following:(BTC, ETH)
      let filteredMarkets = markets.filter((market) =>
        marketsFilter.underlying.includes(market.underlying)
      );
      setMarkets(filteredMarkets);
    }
    fetchData();

    const interval = setInterval(() => {
      console.log("Page A Data should be refreshed every 10 seconds.");
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Table
        data={markets}
        tableCells={tableCells}
        toolbarTitle="FTX Market"
      />
    </div>
  );
}

export default Home;
