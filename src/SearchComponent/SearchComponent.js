// SearchComponent.js
import React, { useState } from "react";
import "./SearchComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const SearchComponent = ({ onSearch, isSuccess }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (!isSuccess) onSearch(searchQuery);
  };

  return (
    <div className="search-content">
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
      </div>
      <ConnectButton
        label="Connect"
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
      />
    </div>
  );
};

export default SearchComponent;
