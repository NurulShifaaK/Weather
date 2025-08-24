import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapdetails = () => {
  const apiKey = "a5e0a66950c6c4887b9779c628700760"; 

  return (
    <div className="border border-white/20 shadow-2xl w-full h-[300px] rounded-xl overflow-hidden mt-5 ">
      <MapContainer
        center={[20, 80]} 
        zoom={4}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Base map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />

        {/* Clouds overlay */}
        <TileLayer
          url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${apiKey}`}
          attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        />

        {/* Precipitation overlay (Rain/Snow) */}
        <TileLayer
          url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`}
          attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        />
      </MapContainer>
    </div>
  );
};

export default Mapdetails;
