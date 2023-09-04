"use client";
import React from "react";
import { useState } from "react";

const Config = () => {
  const [prices, setPrices] = useState({
    big: "",
    medium: "",
    small: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrices({ ...prices, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New prices:", prices);
  };

  return (
    <div className="ml-20">
      <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto h-[70vh]">
          <p className="text-terciary font-bold p-2 bg-secondary rounded-lg mb-4">
            Modificación de Precios
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
            <div className="grid sm:grid-cols-2 grid-cols-1 w-full bg-gray-200 p-2 rounded-lg">
              <label htmlFor="big" className="font-bold text-secondary">
                Precio Lockers Grandes:
                <span className="ml-1 text-primary">Actual:$0.00</span>
              </label>
              <div>
                <input
                  type="number"
                  id="big"
                  name="big"
                  step="0.01"
                  value={prices.big}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-200 border-black border-2 rounded-lg"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 w-full bg-gray-200 p-2 rounded-lg">
              <label htmlFor="mediano" className="font-bold text-secondary">
                Precio para Lockers Medianos:{" "}
                <span className="ml-1 text-primary">Actual:$0.00</span>
              </label>
              <div>
                <input
                  type="number"
                  id="medium"
                  name="medium"
                  step="0.01"
                  value={prices.medium}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-200 border-black border-2 rounded-lg"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 w-full bg-gray-200 p-2 rounded-lg">
              <label htmlFor="pequeno" className="font-bold text-secondary">
                Precios para Lockers pequeños:{" "}
                <span className="ml-1 text-primary">Actual:$0.00</span>
              </label>
              <div>
                <input
                  type="number"
                  id="small"
                  name="small"
                  step="0.01"
                  value={prices.small}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-200 border-black border-2 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-secondary text-terciary font-bold p-4 hover:bg-blue-900 transition-all rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto h-[70vh]">
          <p className="text-terciary font-bold p-2 bg-secondary rounded-lg mb-4">
            Lockers Bloqueados:
          </p>
          <ul className="grid grid-cols-2 bg-gray-200 p-2 rounded-lg">
            <li className="font-bold text-secondary flex items-center">
              "Locker 5"
            </li>
            <div className="sm:text-left text-right">
              <button className="bg-green-500 p-1 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                Desbloquear
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Config;
