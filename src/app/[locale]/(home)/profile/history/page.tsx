"use client";

import {useTranslations} from "next-intl";

import Spinner from "@/components/ui/spinner";

import useQuery from "@/hooks/useQuery";

import {apiGetBrowsingHistory} from "../../_api";

import ProjectItem from "@/components/ProjectItem";

export default function HistoryPage() {
  const t = useTranslations();

  const {data, isFetching} = useQuery({
    queryKey: ["history"],
    queryFn: apiGetBrowsingHistory,
  });

  const history = data?.data || [];

  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>
        {isFetching && <Spinner className='!loading-sm' />} {t("profile.browsing_history")}
      </h1>

      {history.length === 0 && (
        <div className='flex items-center justify-center'>
          <p className='text-center text-xl text-gray-500'>No history found</p>
        </div>
      )}

      <div className='grid gap-6 lg:grid-cols-2'>
        {history.map((project) => (
          <ProjectItem key={project.id} project={project} direction='vertical' />
        ))}
      </div>
    </div>
  );
}
