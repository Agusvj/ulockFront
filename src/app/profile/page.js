import React from "react";
import { data } from "../data/data.js";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";

export default function DashboardAdmin() {
  return (
    <>
      <div className="ml-20">
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 cursor-pointer bg-secondary rounded-lg">
              <p className="text-2xl font-bold text-center text-terciary">
                Tus reservas
              </p>
            </div>

            <ul>
              {data.map((reserve, id) => (
                <li
                  key={id}
                  className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 justify-between items-start cursor-pointer flex gap-3 lg:flex-row lg:items-center flex-col"
                >
                  <div className="flex items-center">
                    <div className="bg-secondary p-3 rounded-lg">
                      <ArchiveBoxIcon className="w-5 text-terciary" />
                    </div>
                    <p className="pl-4 font-bold">
                      Locker Number: <span className="font-normal">12</span>
                    </p>
                  </div>
                  <p className="font-bold">
                    Locker Size:{" "}
                    <span className="font-normal">{reserve.locker}</span>
                  </p>
                  <p
                    className={
                      reserve.status == "Confirmada"
                        ? "text-green-600  font-bold"
                        : reserve.status == "Pendiente"
                        ? "text-blue-600  font-bold"
                        : "text-red-600  font-bold"
                    }
                  >
                    <span className="text-secondary">Estado:</span>{" "}
                    {reserve.status}
                  </p>
                  <p className="  text-gray-600">
                    <span className="text-secondary font-bold">Check-in:</span>{" "}
                    {reserve.date}
                  </p>
                  <p className=" text-gray-600">
                    <span className="text-secondary font-bold">Check-out:</span>{" "}
                    {reserve.date}
                  </p>
                  <div className=" text-gray-600">
                    <button className="p-2 bg-primary text-white rounded-lg">
                      Prolongar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
