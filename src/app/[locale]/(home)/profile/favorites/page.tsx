"use client";

import ProjectItem from "@/components/ProjectItem";

import {apiGetFavorites} from "../../_api";

import useQuery from "@/hooks/useQuery";

import Spinner from "@/components/ui/spinner";

export default function FavoritesPage() {
  const {data, isFetching} = useQuery({
    queryKey: ["favorites"],
    queryFn: apiGetFavorites,
  });

  const favorites = data?.data || [];

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

      <div className='grid gap-6 sm:grid-cols-2'>
        {favorites.map((project) => (
          <ProjectItem
            key={project.id}
            project={{
              ...project,
              city: "" as unknown as ICity,
              country: "" as unknown as ICountry,
              area: "" as unknown as IArea,
              developer_name_en: project.card_developer.name_en,
              developer_name_ar: project.card_developer.name_ar,
              starting_price: project.starting_price as unknown as number,
              offer: project.offer as unknown as string,
              sale_status: project.sale_status as unknown as string,
              image: project.images[0] as unknown as string,
            }}
          />
        ))}
      </div>
    </div>
  );
}
