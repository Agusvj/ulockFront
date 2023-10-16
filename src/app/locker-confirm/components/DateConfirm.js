"use client";
import React, { useState } from "react";

export default function DateConfirm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <form className="bg-secondary p-6 rounded-lg my-6">
        <p className="text-primary text-xl md:text-2xl font-poppins text-center font-bold border-b-2 border-primary pb-3 mb-3">
          Confirmación del Locker a utilizar
        </p>

        <p className="text-primary font-bold text-lg font-viga text-center mb-2">
          OPCION 1
        </p>
        <label
          className={`grid grid-cols-1 md:grid-cols-3 gap-x-4 w-[100%] cursor-pointer border-terciary p-2 ${
            isChecked ? "border-2 border-white rounded-lg bg-blue-900" : ""
          }`}
          htmlFor="confirm-date"
        >
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-1 flex flex-col">
              <span className="col-span-1 font-poppins text-lg font-bold text-terciary text-center">
                Tamaño locker:
              </span>
              <span className="col-span-1 font-bold font-poppins text-secondary bg-terciary rounded-lg py-1 px-6 text-center">
                Grande
              </span>
            </div>

            <div className="col-span-1 flex flex-col">
              <span className="col-span-1 font-poppins text-lg font-bold text-terciary text-center">
                Fecha check In:
              </span>
              <span className="col-span-1 font-bold font-poppins text-secondary bg-terciary rounded-lg py-1 px-6 text-center">
                15/10/2023 - 15:00hs
              </span>
            </div>

            <div className="col-span-1 flex flex-col">
              <span className="col-span-1 font-poppins text-lg font-bold text-terciary text-center">
                Fecha check Out:
              </span>
              <span className="col-span-1 font-bold font-poppins text-secondary bg-terciary rounded-lg py-1 px-6 text-center">
                17/10/2023 - 15:50hs
              </span>
            </div>
          </div>
        </label>
        <input
          type="radio"
          className="hidden"
          name="date"
          id="confirm-date"
          checked={isChecked}
          onChange={handleInputChange}
        ></input>
        <div className="flex justify-center mt-6">
          <button className="bg-primary hover:bg-orange-800 transition-all ease-in delay-100 hover:scale-105 text-terciary font-semibold py-2 px-8 rounded inline-block self-center hover:cursor-pointer">
            Confirmar fecha
          </button>
        </div>
      </form>
    </div>
  );
}
