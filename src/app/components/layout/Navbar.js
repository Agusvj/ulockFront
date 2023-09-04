"use client";
import Link from "next/link";
import { useState } from "react";
import LiNavbar from "../LiNavbar.js";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-secondary fixed top-0 left-0 right-0 z-10 border-b-2 border-primary bg-opacity-95">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <img className="w-48" src="/logoPpal.png" alt="logo"></img>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <LiNavbar
                onClick={() => setNavbar(!navbar)}
                title="How it works?"
              />

              <LiNavbar onClick={() => setNavbar(!navbar)} title="Questions" />

              <LiNavbar onClick={() => setNavbar(!navbar)} title="Login" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
