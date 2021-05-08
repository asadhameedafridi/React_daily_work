import React , { useState, useEffect } from "react";
import CoinList from "./coinList";
import SearchCoin from './searchCoin';
import Axios from "../api/coin";
const App = () => {
  const [coins, setCoins] = useState([])
useEffect(() => {
    Axios.get(
      "markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    )
      .then((res) => {
        console.log(res);
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSearchCoin= async (coinId)=>{
      const respons = await Axios.get(`/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      console.log(respons)
      setCoins(respons.data)
    }
  return (
    <div className="ui container">
      <SearchCoin onSearchCoin={onSearchCoin}></SearchCoin>
      <CoinList coins={coins} />
    </div>
  );
};

export default App;
