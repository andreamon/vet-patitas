import React from "react";
import Loading from '../Spinner/Load';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IconLocation } from "./IconLocation";

function MapView() {
  const styleMap = { width: "100%", height: "70vh" };
  
  // const position = [data.latitude, data.longitude];
  const position = [-27.481519, -58.790743];

  return (
    <>
      {position ? (
        <div>
          <MapContainer
            center={position}
            zoom={18}
            scrollWheelZoom={true}
            style={styleMap}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={IconLocation}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MapView;
