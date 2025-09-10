import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

export default function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken= ''
  })

  return (
    <>
      <div id='map-container' ref={mapContainerRef}>
        
      </div>
    </>
  )
}

