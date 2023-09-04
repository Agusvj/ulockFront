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
    <div className="max-w-7xl px-6 lg:px-8 min-w-full h-full py-12 sm:py-16 flex flex-col gap-12 items-center justify-center">
      <form className="flex flex-col gap-6 max-w-lg items-center justify-center w-full">
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

        <label className="font-poppins text-lg font-bold text-terciary">
          Fecha de ingreso:
        </label>
        <input
          type="datetime-local"
          className="text-secondary p-1 rounded"
        ></input>

        <label className="font-poppins text-lg font-bold text-terciary">
          Fecha de egreso:
        </label>
        <input
          type="datetime-local"
          className="text-secondary p-1 rounded"
        ></input>

        <button className="bg-secondary hover:bg-blue-900 transition-all ease-in delay-100 hover:scale-105 text-terciary font-semibold py-2 px-8 rounded inline-block self-center hover:cursor-pointer">
          Elegir fecha
        </button>
      </form>
    </div>
  );
}
