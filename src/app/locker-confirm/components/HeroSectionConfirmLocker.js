"use client";
import React, { useState } from "react";
import DateConfirm from "./DateConfirm.js";

export default function heroSectionDate() {
  const availableSizes = ["Pequeño", "Mediano", "Grande"];
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelection = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="bg-hero-register bg-cover bg-center md:h-80vh">
      <div className="flex flex-col items-center justify-center pt-48 bg-primary-gradient px-6 md:h-80vh">
        <h3 className="text-3xl font-bold tracking-tight text-terciary sm:text-4xl uppercase font-viga text-center border-b-2 border-secondary pb-6">
          Seleccione la opción de alquiler de locker
        </h3>

        <DateConfirm />
      </div>
    </div>
  );
}
