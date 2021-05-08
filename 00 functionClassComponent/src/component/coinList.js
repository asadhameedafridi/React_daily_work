import React from "react";


const CoinListRender = ({coins}) => {

  return coins.map((c) => {
    return <li key={c.id}>{c.name}</li>;
  });
};

const CoinList = (props) => {
  return <div className="ui segment">{CoinListRender(props)}</div>;
};
export default CoinList;
