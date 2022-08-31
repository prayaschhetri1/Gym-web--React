import React from "react";

import Details from "../Details";

const GymData = ({ item }) => {

  return (
    <div>
      <h2>City Name : {item.city}</h2>
      {item.addressComponent?.map((data, index) => {
        return <Details data={data} key={index} />;
      })}
    </div>
  );
};

export default GymData;
