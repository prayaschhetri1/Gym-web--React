import React from "react";

const Details = ({ data }) => {
  // console.log(add);
  return (
    <div>
      <p>Address:-{data.address1}</p>
      <p>{data.address2}</p>
    </div>
  );
};

export default Details;
