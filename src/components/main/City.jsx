import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import GymData from "./GymData";

const City = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);

  const getData = () => {
    axios
      .get("https://api.wtfup.me/gym/places")
      .then((r) => setData(r.data.data));
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setCity(data);
  }, [data]);

  const handleFilter = (e) => {
    let value = e.target.value;
    if (value !== "cities") {
      const updatedgym = data.filter((item) => {
        return item.city === value;
      });
      setCity(updatedgym);
    } else {
      getData();
    }
  };

  return (
    <div className="container">
      <div className="city-container">
        <select className="city" onChange={handleFilter}>
          <option value="cities">Filter by city</option>

          <option value="Ghaziabad">Ghaziabad</option>
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>

          <option value="New Delhi">New Delhi</option>
        </select>
      </div>
      <div className="main-data">
        {city?.map((item, index) => {
          return <GymData item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default City;
