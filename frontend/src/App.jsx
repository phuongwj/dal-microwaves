// The following imports are necessary in order for the map to load
import 'leaflet/dist/leaflet.css'; 
import './App.css';

// Importing Components from React Leaflet 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function App() {

  return (

    // A root container (i.e. map-container) is required to act as a wrapper for the components.
    <div id="map-container">
      <MapContainer 
          center={[44.637440, -63.589544]} // [Lattitude, Longitude]
          zoom={17} 
          style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44.637379, -63.587219]}>
            <Popup>
            goldberg computer science building go brrrrr
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}