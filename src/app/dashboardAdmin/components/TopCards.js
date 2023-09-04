import React from "react";

export const TopCards = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-5 gap-4 p-4 ml-20">
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">$123131</p>
            <p className="text-gray-600">Total Diario</p>
          </div>
          <p className="bg-secondary  flex justify-center items-center p-2 rounded-lg">
            <span className="text-primary text-lg font-bold">+18%</span>
          </p>
        </div>
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">12</p>
            <p className="text-gray-600">Reservas Activas</p>
          </div>
          <p className="bg-secondary  flex justify-center items-center p-2 rounded-lg">
            <span className="text-primary text-lg font-bold">12</span>
          </p>
        </div>
        <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">3</p>
            <p className="text-gray-600">Lockers disponibles</p>
          </div>
          <p className="bg-secondary  flex justify-center items-center p-2 rounded-lg">
            <span className="text-primary text-lg font-bold">3</span>
          </p>
        </div>
      </div>
    </div>
  );
};
