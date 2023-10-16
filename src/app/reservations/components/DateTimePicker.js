"use client";
import React, { useState } from "react";

const horasIngreso = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

const horasEgreso = [
  "00:50",
  "01:50",
  "02:50",
  "03:50",
  "04:50",
  "05:50",
  "06:50",
  "07:50",
  "08:50",
  "09:50",
  "10:50",
  "11:50",
  "12:50",
  "13:50",
  "14:50",
  "15:50",
  "16:50",
  "17:50",
  "18:50",
  "19:50",
  "20:50",
  "21:50",
  "22:50",
  "23:50",
];

export default function DateTimePicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  sizes,
  selectedSize,
  onSelectSize,
}) {
  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  const handleSelectChange = (e) => {
    setHoraSeleccionada(e.target.value);
  };

  return (
    <div>
      <form className="bg-secondary p-6 rounded-lg my-6">
        <p className="text-primary text-xl md:text-2xl font-poppins text-center font-bold border-b-2 border-primary pb-3 mb-3">
          Completa los datos para poder brindarte un locker
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[100%]">
          <div className="flex flex-col gap-2 ">
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
              type="date"
              name="checkIn"
              className="text-secondary p-1 rounded"
            ></input>

            <label className="font-poppins text-lg font-bold text-terciary">
              Hora de ingreso:
            </label>
            <select
              value={horaSeleccionada}
              onChange={handleSelectChange}
              className="text-secondary p-1 rounded"
            >
              <option value="">Selecciona una hora</option>
              {horasIngreso.map((horasIngreso) => (
                <option key={horasIngreso} value={horasIngreso}>
                  {horasIngreso}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-poppins text-lg font-bold text-terciary">
              Fecha de egreso:
            </label>
            <input
              type="date"
              name="checkOut"
              className="text-secondary p-1 rounded"
            ></input>
            <label className="font-poppins text-lg font-bold text-terciary">
              Hora de Egreso:
            </label>
            <select
              value={horaSeleccionada}
              onChange={handleSelectChange}
              className="text-secondary p-1 rounded"
            >
              <option value="">Selecciona una hora</option>
              {horasEgreso.map((horasEgreso) => (
                <option key={horasEgreso} value={horasEgreso}>
                  {horasEgreso}
                </option>
              ))}
            </select>
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
