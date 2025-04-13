"use client";

import {MapContainer, TileLayer, Marker, Pane} from "react-leaflet";

import {fakeDataProjects} from "@/constants";

import {divIcon} from "leaflet";

import {useState} from "react";

import ProjectItem from "@/components/ProjectItem";

import Container from "@/components/Container";

import "leaflet/dist/leaflet.css";

const ExploreMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className='relative mb-5.25rem mt-4.5rem h-[44rem] w-full'>
      <MapContainer
        center={[25.2048, 55.2708]} // Dubai coordinates
        zoom={13}
        className='h-full w-full'
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Overlay Pane */}
        <Pane name='overlay-pane' style={{zIndex: 500}}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black overlay
              pointerEvents: "none", // Ensure the overlay doesn't block interactions
            }}
          />
        </Pane>

        {/* Markers Pane */}
        <Pane name='markers-pane' style={{zIndex: 600}}>
          {fakeDataProjects.slice(0, 5).map((location, index) => (
            <Marker
              key={index}
              position={location.position}
              icon={divIcon({
                className: "",
                html: `<div class='font-bold min-w-min rounded-full px-1.25rem py-0.62rem whitespace-nowrap ${
                  location.id === selectedLocation?.id
                    ? "bg-colors-primary-colors-400 text-white"
                    : "bg-white text-colors-primary-colors-400"
                }'>${location.title}</div>`,
              })}
              eventHandlers={{
                click: () => setSelectedLocation(location),
              }}
            />
          ))}
        </Pane>
      </MapContainer>

      {selectedLocation && (
        <div className='absolute start-1rem top-1rem z-[1000]'>
          <Container>{/* <ProjectItem direction='vertical' /> */}</Container>
        </div>
      )}
    </div>
  );
};

export default ExploreMap;
