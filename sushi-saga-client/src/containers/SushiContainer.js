import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  const mapOverSushi = () => {
    return props.nextFourSushi.map(sushi => {
      return <Sushi sushi={sushi} key={sushi.id} />;
    });
  };
  return (
    <Fragment>
      <div className="belt">
        {mapOverSushi()}
        <MoreButton
          moreSushi={props.allFourSushi}
          nextFourSushi={props.nextFourSushi}
        />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
