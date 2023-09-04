import React from "react";
import { listLockers } from "@/app/data/datalockers.js";

const Lockers = () => {
  return (
    <div className="ml-20">
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-3 sm-grid-cols-3 grid-cols-2 items center justify-between bg-secondary rounded-lg">
            <span className="text-terciary font-bold">Lockers grandes</span>
            <span className="text-terciary md:grid hidden font-bold">
              Estado
            </span>
            <span className="text-terciary font-bold">
              Precio: <span className="text-primary p-1 rounded-lg">$1300</span>
            </span>
          </div>
          <ul>
            {listLockers["lockers-big"].map((locker) => (
              <li
                key={locker.id}
                className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 items-center justify-between"
              >
                <span className="text-secondary font-bold">
                  Locker {locker.id}
                </span>
                <span className="text-secondary font-bold">
                  {locker.status}{" "}
                  <button className="bg-red-500 p-1 rounded-lg text-white">
                    Block
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-3 sm-grid-cols-3 grid-cols-2 items center justify-between bg-secondary rounded-lg">
            <span className="text-terciary font-bold">Lockers Medianos</span>
            <span className="text-terciary md:grid hidden font-bold">
              Estado
            </span>
            <span className="text-terciary font-bold">
              Precio: <span className="text-primary p-1 rounded-lg">$1300</span>
            </span>
          </div>
          <ul>
            {listLockers["lockers-medium"].map((locker) => (
              <li
                key={locker.id}
                className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <span className="text-secondary font-bold">
                  Locker {locker.id}
                </span>
                <span className="text-secondary font-bold">
                  {locker.status}{" "}
                  <button className="bg-red-500 p-1 rounded-lg text-white">
                    Block
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-3 sm-grid-cols-3 grid-cols-2 items center justify-between bg-secondary rounded-lg">
            <span className="text-terciary font-bold">Lockers pequeños</span>
            <span className="text-terciary md:grid hidden font-bold">
              Estado
            </span>
            <span className="text-terciary font-bold">
              Precio: <span className="text-primary p-1 rounded-lg">$1300</span>
            </span>
          </div>
          <ul>
            {listLockers["lockers-small"].map((locker) => (
              <li
                key={locker.id}
                className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <span className="text-secondary font-bold">
                  Locker {locker.id}
                </span>
                <span className="text-secondary font-bold">
                  {locker.status}{" "}
                  <button className="bg-red-500 p-1 rounded-lg text-white">
                    Block
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lockers;
