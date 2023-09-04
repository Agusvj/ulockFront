export default function HeroSection() {
  return (
    <main className="bg-hero-locker bg-cover bg-center h-screen flex flex-col items-center justify-center p-0">
      <div className="flex flex-col items-center justify-center bg-primary-gradient min-w-full h-full">
        <h1 className="text-terciary text-7xl md:text-9xl lg:text-9xl xl:text-9xl 2xl:text-9xl font-bold font-serif text-center mb-9 font-viga drop-shadow-md">
          U LOCKER
        </h1>
        <p className="text-secondary text-1xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-serif text-center mt-3 max-w-[50%] font-poppins font-bold">
          Enjoy Ushuaia luggage free in 3 simple steps
        </p>
        <a
          className="bg-secondary hover:bg-blue-800 transition-all ease-in delay-100 hover:scale-110 text-terciary font-semibold py-2 px-8 rounded inline-block self-center mt-9 drop-shadow hover:cursor-pointer"
          href="#selector"
        >
          Alquilar
        </a>
      </div>
    </main>
  );
}
