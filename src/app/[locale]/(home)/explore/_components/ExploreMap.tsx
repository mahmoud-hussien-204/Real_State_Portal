"use client";

import {MapContainer, TileLayer, Marker, Pane, useMap} from "react-leaflet";
import {divIcon} from "leaflet";
import {useState, useEffect} from "react";
// import ProjectItem from "@/components/ProjectItem";
import Container from "@/components/Container";
import "leaflet/dist/leaflet.css";
import {IExploreResponse} from "../_interfaces";
import ProjectItem from "@/components/ProjectItem";

// Map center adjuster component
const MapCenterAdjuster = ({exploreData}: {exploreData: IExploreResponse[]}) => {
  const map = useMap();

  useEffect(() => {
    if (exploreData && exploreData.length > 0) {
      // Calculate bounds or center on first item
      const firstItem = exploreData[0];
      if (firstItem.latitude && firstItem.longitude) {
        map.setView([firstItem.latitude, firstItem.longitude], 13);
      }
    }
  }, [exploreData, map]);

  return null;
};

const ExploreMap = ({exploreData}: {exploreData: IExploreResponse[]}) => {
  const [selectedProject, setSelectedProject] = useState<IExploreResponse | null>(null);
  // Default coordinates (Dubai)
  const defaultCenter: [number, number] = [25.2048, 55.2708];

  return (
    <div className='relative mb-5.25rem mt-4.5rem h-[44rem] w-full'>
      <MapContainer center={defaultCenter} zoom={13} className='h-full w-full'>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Center map based on data */}
        <MapCenterAdjuster exploreData={exploreData} />

        <Pane name='overlay-pane' style={{zIndex: 500}}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              pointerEvents: "none",
            }}
          />
        </Pane>

        {/* Markers Pane */}
        <Pane name='markers-pane' style={{zIndex: 600}}>
          {exploreData &&
            exploreData.length > 0 &&
            exploreData.map((project) => {
              // Verify valid coordinates
              if (!project?.latitude || !project?.longitude) {
                console.warn("Missing coordinates for project:", project.id);
                return null;
              }

              return (
                <Marker
                  key={project.id}
                  position={[project.latitude, project.longitude]}
                  icon={divIcon({
                    className: "",
                    html: `<div class='font-bold min-w-min rounded-full px-1.25rem py-0.62rem whitespace-nowrap ${
                      project.id === selectedProject?.id
                        ? "bg-colors-primary-colors-400 text-white"
                        : "bg-white text-colors-primary-colors-400"
                    }'>${project.name_en || "Project"}</div>`,
                  })}
                  eventHandlers={{
                    click: () => setSelectedProject(project),
                  }}
                />
              );
            })}
        </Pane>
      </MapContainer>

      {selectedProject && (
        <div className='absolute start-1rem top-1rem z-[1000]'>
          <Container>
            <ProjectItem
              project={{
                id: selectedProject.id,
                name_en: selectedProject.name_en,
                name_ar: selectedProject.name_ar,
                city: selectedProject.city,
                country: selectedProject.country,
                area: selectedProject.area,
                offer: selectedProject.offer,
                image: selectedProject.images,
              }}
            />
          </Container>
        </div>
      )}
    </div>
  );
};

export default ExploreMap;
