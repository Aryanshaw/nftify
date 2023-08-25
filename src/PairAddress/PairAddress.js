// PairAddress.js
import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import axios from "axios";
import "./PairAddress.css";
import Card from "../Card/Card";

const PairAddress = () => {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePairSearch = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/search/?q=:${query}`
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
      <h1>Pair Address Page</h1>
      <SearchComponent onSearch={handlePairSearch} isSuccess={isSuccess} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : isSuccess ? (
        data.length > 0 ? (
          <div>
            <h1>Pair Address search result</h1>
            {data.map((pair, index) => (
              <Card key={index} pair={pair} />
            ))}
          </div>
        ) : (
          <h1>Nothing found</h1>
        )
      ) : <></>}
    </div>
  );
};

export default PairAddress;
