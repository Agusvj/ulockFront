import React from "react";
import { data } from "../../data/data.js";
import { UserPlusIcon } from "@heroicons/react/24/solid";

export const RecentReserves = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h2 className="text-terciary font-bold bg-secondary rounded-lg p-2">
        Reservas Recientes
      </h2>
      <ul>
        {data.map((reserve, id) => (
          <li
            key={id}
            className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-secondary rounded-lg p-3">
              <UserPlusIcon className="text-terciary w-5" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">
                Tamaño: {reserve.locker}
              </p>
              <p className="text-gray-400 font-sm">Nombre: {reserve.name}</p>
            </div>
            <p className="lg:flex hidden absolute right-6 text-sm text-gray-400 ">
              Fecha: {reserve.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
