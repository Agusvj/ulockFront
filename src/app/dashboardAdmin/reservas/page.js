import React from "react";
import { data } from "../../data/data.js";
import {
  CalendarDaysIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";

const DashboardReserves = () => {
  return (
    <div className="ml-20">
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items center justify-between cursor-pointer bg-secondary rounded-lg">
            <span className="text-left text-terciary  font-bold">Locker</span>
            <span className="sm:text-left text-right sm:grid font-bold text-terciary">
              Estado
            </span>
            <span className="hidden sm:grid text-terciary font-bold">
              Reserva
            </span>
            <span className="hidden md:grid text-terciary font-bold">
              Check-out
            </span>
            <span className="hidden md:grid text-terciary font-bold">
              Email
            </span>
          </div>
          <ul>
            {data.map((reserve, id) => (
              <li
                key={id}
                className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-secondary p-3 rounded-lg">
                    <CalendarDaysIcon className="w-5 text-terciary" />
                  </div>
                  <p className="pl-4 font-bold">{reserve.locker}</p>
                </div>
                <p
                  className={
                    reserve.status == "Confirmada"
                      ? "text-green-600 sm:text-left text-right font-bold"
                      : reserve.status == "Pendiente"
                      ? "text-blue-600 sm:text-left text-right font-bold"
                      : "text-red-600 sm:text-left text-right font-bold"
                  }
                >
                  {reserve.status}
                </p>
                <p className="hidden sm:flex text-gray-600">{reserve.date}</p>
                <p className="hidden md:flex text-gray-600">{reserve.date}</p>
                <div className="md:flex hidden justify-between items-center">
                  <p className="text-gray-600">{reserve.email}</p>
                  <EllipsisVerticalIcon className="w-6 bg-gray-400 rounded-lg" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardReserves;
