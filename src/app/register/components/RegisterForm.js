"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    dni: "",
    domicilio: "",
    nombreCompleto: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del formulario:", formData);
    // datos al server?
  };

  return (
    <div className="max-w-7xl px-6 lg:px-8 min-w-full h-full py-12 sm:py-16 flex flex-col gap-12 items-center justify-center">
      <h3 className="text-3xl font-bold tracking-tight text-terciary sm:text-4xl uppercase font-viga text-center border-b-2 border-secondary pb-6">
        Formulario de Usuario
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-lg items-center justify-center w-full"
      >
        <div className="w-full">
          <label className="font-poppins text-lg font-bold text-terciary">
            DNI:
          </label>
          <input
            type="number"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className="w-full mt-3 text-primary font-viga rounded p-1"
            placeholder="Enter your ID"
          />
        </div>

        <div className="w-full">
          <label className="font-poppins text-lg font-bold text-terciary">
            Domicilio:
          </label>
          <input
            type="text"
            name="domicilio"
            value={formData.domicilio}
            onChange={handleChange}
            className="w-full mt-3 text-primary font-viga rounded p-1"
            placeholder="Enter your address"
          />
        </div>

        <div className="w-full">
          <label className="font-poppins text-lg font-bold text-terciary">
            Nombre Completo:
          </label>
          <input
            type="text"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            className="w-full mt-3 text-primary font-viga rounded p-1"
            placeholder="Enter your full name"
          />
        </div>

        <div className="w-full">
          <label className="font-poppins text-lg font-bold text-terciary">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-3 text-primary font-viga rounded p-1"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="bg-secondary hover:bg-blue-900 transition-all ease-in delay-100 hover:scale-110 text-terciary font-semibold py-2 px-8 rounded inline-block self-center hover:cursor-pointer mt-4"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
