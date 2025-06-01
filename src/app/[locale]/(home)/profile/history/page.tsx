"use client";

import {useTranslations} from "next-intl";
import {format} from "date-fns";

// TODO: Replace with actual data fetching
const mockHistory = [
  {
    id: 1,
    action: "Viewed Project",
    projectName: "Luxury Villa",
    timestamp: new Date("2024-03-20T10:30:00"),
  },
  {
    id: 2,
    action: "Saved to Favorites",
    projectName: "Modern Apartment",
    timestamp: new Date("2024-03-19T15:45:00"),
  },
  {
    id: 3,
    action: "Contacted Agent",
    projectName: "Beach House",
    timestamp: new Date("2024-03-18T09:15:00"),
  },
];

export default function HistoryPage() {
  const t = useTranslations();

  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>Browsing History</h1>
      <div className='space-y-4'>
        {mockHistory.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50'
          >
            <div>
              <p className='font-medium text-gray-900'>{item.action}</p>
              <p className='text-sm text-gray-500'>{item.projectName}</p>
            </div>
            <time className='text-sm text-gray-500'>
              {format(item.timestamp, "MMM d, yyyy h:mm a")}
            </time>
          </div>
        ))}
      </div>
    </div>
  );
}
