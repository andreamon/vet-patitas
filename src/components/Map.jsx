import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    height: "58vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: -27.4860818,
    lng: -58.8624274,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBJ42klE91f-6jk_qOrV8emSaAvQ7r4TjU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={9}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
