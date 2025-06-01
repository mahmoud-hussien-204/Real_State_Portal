"use client";

import {useTranslations} from "next-intl";
import ProjectItem from "@/components/ProjectItem";

// TODO: Replace with actual data fetching
const mockFavorites = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Dubai Marina",
    price: "1,500,000",
    image: "/mock/project1.jpg",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Downtown",
    price: "800,000",
    image: "/mock/project2.jpg",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
  },
];

export default function FavoritesPage() {
  const t = useTranslations();

  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>My Favorites</h1>
      <div className='grid gap-6 sm:grid-cols-2'>
        {mockFavorites.map((project) => (
          <ProjectItem
            key={project.id}
            project={{
              id: project.id,
              name_en: project.title,
              image: project.image,
              city: {name_en: project.location}, // Convert to ICity object
              country: {name_en: "UAE"}, // Convert to ICountry object
              price: project.price,
              bedrooms: project.bedrooms,
              bathrooms: project.bathrooms,
              area: project.area,
            }}
          />
        ))}
      </div>
    </div>
  );
}
