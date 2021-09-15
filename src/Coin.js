import React from "react";
import "./coin.css";

const Coin = (props) => {
  const { name, price, volume, image, symbol, priceChange, marketcap } = props;

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin logo" />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>
          <p className="coin-volume">{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap : ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
