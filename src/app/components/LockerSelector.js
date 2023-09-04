"use client";

import React, { useState } from "react";

export default function LockerSelector() {
  const [selectedProvincia, setSelectedProvincia] = useState("");
  const [selectedLocalidad, setSelectedLocalidad] = useState("");
  const [selectedSucursal, setSelectedSucursal] = useState("");

  return (
    <div
      className="flex flex-col items-center justify-center bg-secondary pb-20"
      id="selector"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center mt-20 text-primary font-viga uppercase border-b-2 pb-4 border-primary px-6">
        "First Step: Choose the city"
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 w-3/4">
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-md">
          <form className="w-full flex flex-col gap-7">
            <div>
              <label className="font-poppins font-bold text-xl text-terciary">
                Provincia
              </label>
              <select className="w-full text-primary p-1" required>
                <option value="" disabled>
                  Select a province
                </option>
                <option></option>
              </select>
            </div>

            <div>
              <label className="font-poppins font-bold text-xl text-terciary">
                Ciudad
              </label>
              <select className="w-full text-primary p-1" required>
                <option value="" disabled>
                  Select a city
                </option>
                <option></option>
              </select>
            </div>

            <div>
              <label className="font-poppins font-bold text-xl text-terciary">
                Sucursal
              </label>
              <select className="w-full text-primary p-1" required>
                <option value="" disabled>
                  Select a branch
                </option>
                <option></option>
              </select>
            </div>

            <button className="bg-primary hover:bg-orange-800 transition-all ease-in delay-100 hover:scale-105 text-terciary font-semibold py-2 px-8 rounded inline-block self-center hover:cursor-pointer">
              Check for availability
            </button>
          </form>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18398.9216010231!2d-68.32961155!3d-54.799912400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c2322274cbfdd%3A0x1eeab4c916bfc273!2sCmte.%20Luis%20Piedrabuena%20318%2C%20V9410CXH%20Ushuaia%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses-419!2sar!4v1691210594158!5m2!1ses-419!2sar"
            loading="lazy"
            className="w-full h-[500px] rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
