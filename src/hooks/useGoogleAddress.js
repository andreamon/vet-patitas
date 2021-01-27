import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (number, address, city, country) => {
  const [map, setMap] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://api.positionstack.com/v1/forward?access_key=d1a8e6b2d0e5721b1f349a96852653af&query= ${address} ${number}, ${city}, ${country}`
      )
      .then((response) => {
        setMap(response.data.data[0]);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    // const response = axios(API);
    // console.log(response.data.data[0]);
    // setMap(response.data.data[0] );
  }, [address, number, city, country]);
  return map;
};
export default useGoogleAddress;
