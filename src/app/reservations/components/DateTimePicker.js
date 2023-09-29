"use client";
import React, { useState } from "react";

export default function DateTimePicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  sizes,
  selectedSize,
  onSelectSize,
}) {
  return (
    <div>
      <form className="bg-secondary p-6 rounded-lg my-6">
        <p className="text-primary text-xl md:text-2xl font-poppins text-center font-bold border-b-2 border-primary pb-3 mb-3">
          Completa los datos para poder brindarte un locker
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[100%]">
          <div className="flex flex-col gap-2">
            <label className="font-poppins text-lg font-bold text-terciary">
              Selecciona un tamaño:
            </label>
            <select
              value={selectedSize}
              onChange={onSelectSize}
              className="p-1 rounded text-secondary"
            >
              <option value="">Selecciona un tamaño</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-poppins text-lg font-bold text-terciary">
              Fecha de ingreso:
            </label>
            <input
              type="datetime-local"
              className="text-secondary p-1 rounded"
            ></input>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-poppins text-lg font-bold text-terciary">
              Fecha de egreso:
            </label>
            <input
              type="datetime-local"
              className="text-secondary p-1 rounded"
            ></input>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-primary hover:bg-orange-800 transition-all ease-in delay-100 hover:scale-105 text-terciary font-semibold py-2 px-8 rounded inline-block self-center hover:cursor-pointer">
            Elegir fecha
          </button>
        </div>
      </form>
    </div>
  );
}
