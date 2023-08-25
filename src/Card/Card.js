import React from "react";
import "./Card.css";

const Card = ({ pair }) => {
  const shortenedPairAddress = pair.pairAddress?.substring(0, 5) || "";

  return (
    <div className="token-card">
      <div className="token-card-header">
        <h2 className="token-card-text">{pair.dexId}</h2>
      </div>
      <div className="token-card-content">
        <p className="token-card-text">Created At: {pair.pairCreatedAt}</p>
        <p className="token-card-text">Symbol: {pair.baseToken?.symbol}</p>
        <p className="token-card-text">Pair Address: {shortenedPairAddress}</p>
      </div>
    </div>
  );
};

export default Card;
