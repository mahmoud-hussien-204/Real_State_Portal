"use client";

import ProjectItem from "@/components/ProjectItem";

import {apiGetFavorites} from "../../_api";

import useQuery from "@/hooks/useQuery";

import Spinner from "@/components/ui/spinner";

import useIsSmallScreen from "@/hooks/useIsSmallScreen";

export default function FavoritesPage() {
  const {data, isFetching} = useQuery({
    queryKey: ["favorites"],
    queryFn: apiGetFavorites,
  });

  const favorites = data?.data || [];

  const isSmallScreen = useIsSmallScreen(768);

  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>
        {isFetching && <Spinner className='!loading-sm' />} My Favorites
      </h1>

      {favorites.length === 0 && (
        <div className='flex items-center justify-center'>
          <p className='text-center text-xl text-gray-500'>No favorites found</p>
        </div>
      )}

      <div className='grid gap-6 md:grid-cols-2'>
        {favorites.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            direction={isSmallScreen ? "horizontal" : "vertical"}
          />
        ))}
      </div>
    </div>
  );
}
