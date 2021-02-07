import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"


function SushiContainer(props) {
  const sushiList = props.sushis.map((sushi) => {
    return <Sushi 
    key={sushi.id}
    sushi={sushi}
    handleEatSushi={props.handleEatSushi}
    />
  })
  return (
    <div className="belt">
      {sushiList}
      <MoreButton handleMoreSushi={props.handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
