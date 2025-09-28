require('dotenv').config()
import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

const INITIAL_CENTER = [
  -63.59039, // langtitude, aka .lng
  44.63702 // latitude, aka .lat
]

const INITIAL_ZOOM = 16.91

const INITIAL_BEARING = -53.35

const INITIAL_PITCH = 33.01

export default function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  const [center, setCenter] = useState(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)
  const [bearing, setBearing] = useState(INITIAL_BEARING)
  const [pitch, setPitch] = useState(INITIAL_PITCH)

  useEffect(() => {
    // public access token is for client-side, read-only purposes
    mapboxgl.accessToken= process.env.MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
      bearing: bearing,
      pitch: pitch
    });

    mapRef.current.on('move', () => {
      // get the current center coordinates, zoom level, bearing (rotation), pitch (angle) from the map
      const mapCenter = mapRef.current.getCenter()
      const mapZoom = mapRef.current.getZoom()
      const mapBearing = mapRef.current.getBearing()
      const mapPitch = mapRef.current.getPitch()

      // update state
      setCenter([ mapCenter.lng, mapCenter.lat ]) // reason why there's .lng and .lat here is because we want to get the langtitude and lattitude of the center
      setZoom(mapZoom)
      setBearing(mapBearing)
      setPitch(mapPitch)
    })

    return () => {
      mapRef.current.remove()
    }
  }, [])

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
      bearing: INITIAL_BEARING,
      pitch: INITIAL_PITCH
    })
  }

  return (
    <>
      <div className="sidebar">
        Longtitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)} | Bearing: {bearing.toFixed(2)} | Pitch: {pitch.toFixed(2)}
      </div>
      <button className="reset-button" onClick={handleButtonClick}>
        Back to default view
      </button>
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}