import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./TokenAddress.css";
import axios from "axios";
import Card from "../Card/Card";

const TokenAddress = () => {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTokenSearch = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/tokens/${query}`
      );
      if (response?.data?.pairs) {
        const sortedPairs = response.data.pairs.sort(
          (a, b) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd)
        );

        const limitedPairs = sortedPairs.slice(0, 10);

        setData(limitedPairs);
        setIsSuccess(true);
      } else {
        alert("Pairs not available in the response.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setIsSuccess(false);
    }
    setIsLoading(false);
  };

  return (
    <div className="content">
      <h1>Token Address Page</h1>
      <SearchComponent onSearch={handleTokenSearch} isSuccess={isSuccess} />
      <div>
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : isSuccess && data.length > 0 ? (
          <>
            <h1>Token Address search result</h1>
            <div className="card-results">
              {data.map((pair, index) => (
                <Card key={index} pair={pair} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TokenAddress;
