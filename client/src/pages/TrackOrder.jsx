import React from 'react';
import { useState, useEffect } from 'react';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  
import { io } from 'socket.io-client';

function TrackOrder() {
    const [location, setLocation] = useState({ lat: 12.9716, lng: 77.5946 }); // Initial location

    useEffect(() => {
        const socket = io("http://localhost:5000", {
            transports: ['websocket']       
        }); // Connect to Socket.IO server
        socket.on("connect", () => {
            console.log("Connected to server with ID: ", socket.id);
        });

        socket.on("locationUpdate", (data) => {
            console.log("New location update: ", data);
            setLocation(data);
        });
        return () => {
            socket.disconnect();
        };
    },[]);


  return (
    <div className="track-container">
      <h2 className="heading">Delivery Boy Moving.....!</h2>
        <MapContainer center={location} zoom={15} style={{ height: "90vh", width: "100%" }}
        key={location.lat}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.lat, location.lng]}/>
        </MapContainer>
    </div>
  )
}

export default TrackOrder;