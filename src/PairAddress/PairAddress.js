// PairAddress.js
import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import axios from "axios";
import "./PairAddress.css";
import Card from "../Card/Card";

const PairAddress = () => {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePairSearch = async (query) => {
    // Call the API specific to Pair Address page
    try {
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/search/?q=:${query}`
      );
      setData(response.data.pairs);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setIsSuccess(false);
    }
  };

  return (
    <div className="content">
      <h1>Pair Address Page</h1>
      <SearchComponent onSearch={handlePairSearch} />
      {/* Other content */}
      {isSuccess ? (
        data.length > 0 ? (
          <div>
             <>
            <h1>Pair Address search result</h1>
            {data.map((pair, index) => (
              <Card key={index} pair={pair} />
            ))}
          </>
          </div>
        ) : (
          <h1>Nothing found</h1>
        )
      ) : null}
    </div>
  );
};

export default PairAddress;
