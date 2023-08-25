import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./TokenAddress.css";
import axios from "axios";
import Card from "../Card/Card";

const TokenAddress = () => {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTokenSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/tokens/${query}`
      );
      // Sort pairs by price in descending order
      const sortedPairs = response.data.pairs.sort(
        (a, b) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd)
      );

      // Limit the pairs to at most 10
      const limitedPairs = sortedPairs.slice(0, 10);

      setData(limitedPairs);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setIsSuccess(false);
    }
  };

  return (
    <div className="content">
      <h1>Token Address Page</h1>
      <SearchComponent onSearch={handleTokenSearch} />
      <div >
        {isSuccess && data.length > 0 ? (
          <>
            <h1>Token Address search result</h1>
            <div className="card-results">
              {data.map((pair, index) => (
                <Card key={index} pair={pair} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TokenAddress;
