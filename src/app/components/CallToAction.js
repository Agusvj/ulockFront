export default function CallToAction() {
  return (
    <div className="bg-cta-bg bg-cover bg-center">
      <div className="flex justify-center items-center flex-col gap-16 bg-primary-gradient min-w-full h-full p-16">
        <h4 className="text-3xl sm:text-4xl font-bold font-viga tracking-tight text-white sm:text-4xl0 text-center uppercase">
          VENI. GUARDA. DISFRUTA.
        </h4>
        <p className="text-1xl tracking-tight text-secondary sm:text-lg font-bold font-poppins text-center">
          - Seguridad, confianza y autonomía -
        </p>
        <a
          className="bg-secondary hover:bg-blue-900 transition-all ease-in delay-100 hover:scale-110 text-terciary font-semibold py-2 px-8 rounded inline-block self-center hover:cursor-pointer"
          href="#selector"
        >
          Rent
        </a>
      </div>
    </div>
  );
}
