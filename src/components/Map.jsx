import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ data }) => {
  const containerStyle = {
    height: "58vh",
    width: "100%",
  };
  // const defaultCenter = {
  //   lat:,
  //   lng:,
  // }
  const defaultCenter = {
    lat: data.latitude,
    lng: data.longitude,
  };
  return (
    <>
      {defaultCenter.lat ? (
        <LoadScript googleMapsApiKey="AIzaSyBJ42klE91f-6jk_qOrV8emSaAvQ7r4TjU">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={9}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      ) : (
        <p>cargando</p>
      )}
    </>
  );
};

export default Map;
