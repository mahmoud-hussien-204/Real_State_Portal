"use client";

import {useTranslations} from "next-intl";
import {format} from "date-fns";
import Spinner from "@/components/ui/spinner";
import useQuery from "@/hooks/useQuery";
import {apiGetBrowsingHistory} from "../../_api";
import InterceptorHelper from "@/helpers/interceptorHelper";

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
      <div className='space-y-4'>
        {history.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50'
          ></div>
        ))}
      </div>
    </div>
  );
}
