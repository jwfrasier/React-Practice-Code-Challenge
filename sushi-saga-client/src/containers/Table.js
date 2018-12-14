import React, { Fragment } from "react";

const Table = props => {
  const renderPlates = array => {
    console.log(array);
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };
  console.log("this is props for Table, ", props.allFourSushi);
  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.wallet} remaining!</h1>
      <div className="table">
        <div className="stack">{renderPlates([props.allFourSushi])}</div>
      </div>
    </Fragment>
  );
};

export default Table;
