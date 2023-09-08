"use client";
import React, { useState } from "react";

export default function HeroSectionProfile() {
  return (
    <div>
      <div className="bg-hero-register bg-cover bg-center h-[60vh]">
        <div className="flex flex-col items-center justify-center pt-36 bg-primary-gradient px-6 h-[60vh]">
          <h3 className="text-3xl font-bold tracking-tight text-terciary sm:text-4xl uppercase font-viga text-center border-b-2 border-secondary pb-6">
            Datos de tu perfil y reservas
          </h3>
          <p className="text-secondary text-1xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-poppins text-center mt-3 font-bold">
            Aqui puedes verificar tus datos y controlar tus reservas activas
          </p>
        </div>
      </div>
      <div className="bg-secondary flex justify-center border-b-2 border-primary">
        <div className="bg-secondary grid sm:grid-cols-2 grid-cols-1 p-4 w-full sm:max-w-4xl gap-6 my-10">
          <div className="border-terciary border-2 rounded-md p-4 flex flex-col gap-4">
            <h4 className="text-primary font-bold font-viga text-xl border-b-2 border-primary">
              Tus datos:
            </h4>
            <div className="flex flex-col text-terciary font-bold font-poppins bg-primary-gradient rounded-lg p-2">
              <p className="text-terciary font-bold font-poppins">DNI:</p>
              <p className="text-terciary font-bold font-poppins">xxxxxxxx</p>
            </div>
            <div className="flex flex-col text-terciary font-bold font-poppins bg-primary-gradient rounded-lg p-2">
              <p className="text-terciary font-bold font-poppins">
                Nombre Completo:
              </p>
              <p className="text-terciary font-bold font-poppins">
                Agustin Villanueva
              </p>
            </div>
            <div className="flex flex-col text-terciary font-bold font-poppins bg-primary-gradient rounded-lg p-2">
              <p className="text-terciary font-bold font-poppins">Dirección:</p>
              <p className="text-terciary font-bold font-poppins">
                Siempre viva 3333
              </p>
            </div>
            <div className="flex flex-col text-terciary font-bold font-poppins bg-primary-gradient rounded-lg p-2">
              <p className="text-terciary font-bold font-poppins">Email:</p>
              <p className="text-terciary font-bold font-poppins">
                xxx@gmail.com
              </p>
            </div>
          </div>
          <div className="border-terciary border-2 rounded-md p-4">
            <h4 className="text-primary font-bold font-viga text-xl border-b-2 border-primary">
              Reservas activas
            </h4>
            <ul className="grid grid-cols-1 gap-4 py-2 mt-4 text-terciary font-bold font-poppins border-primary">
              <li className="text-terciary font-bold font-poppins bg-primary-gradient rounded-lg p-2">
                <p>Reserva 1</p>
                <p className="text-terciary font-bold font-poppins">
                  Check-Out: xx/xx/xx xx:xx
                </p>
              </li>
              <li className="text-terciary font-bold font-poppins bg-primary-gradient rounded-lg p-2">
                <p>Reserva 1</p>
                <p className="text-terciary font-bold font-poppins">
                  Check-Out: xx/xx/xx xx:xx
                </p>
              </li>
              <li className="text-terciary font-bold font-poppins bg-primary-gradient rounded-lg p-2">
                <p>Reserva 1</p>
                <p className="text-terciary font-bold font-poppins">
                  Check-Out: xx/xx/xx xx:xx
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
