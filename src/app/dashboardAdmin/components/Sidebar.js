import React from "react";
import Link from "next/link";
import {
  AdjustmentsHorizontalIcon,
  ChartBarSquareIcon,
  QueueListIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export const Sidebar = () => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/dashboardAdmin">
            <div className="bg-secondary text-primary p-3 rounded-lg inline-block">
              <AdjustmentsHorizontalIcon className="w-full" />
            </div>
          </Link>

          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <Link href="/dashboardAdmin/lockers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <QueueListIcon className="w-full" />
            </div>
          </Link>
          <Link href="/dashboardAdmin/reservas">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <CalendarDaysIcon className="w-full" />
            </div>
          </Link>
          <Link href="/dashboardAdmin/config">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <Cog6ToothIcon className="w-full" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
