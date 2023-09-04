import BenefitCard from "./BenefitCard.js";

export default function Benefits() {
  return (
    <div className="bg-benefit-bg bg-cover bg-center" id="benefits">
      <div className="bg-primary-gradient mx-auto max-w-7xl px-6 lg:px-8 min-w-full h-full py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-viga leading-7 text-secondary">
            U LOCK IT
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-terciary sm:text-4xl uppercase font-viga">
            Es un servicio autónomo, online, simple y confiable.
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary font-bold">
            Es el primer servicio de almacenamiento de equipaje de la ciudad.
            Antes del check-in, después del check-out o cuando necesites viajar
            ligero, vas a poder aprovechar el tiempo al máximo!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <BenefitCard
              title="Vigilancia 24/7"
              paragraph="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
        semper morbi. Odio urna massa nunc massa."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              }
            />
            <BenefitCard
              title="Reserva por anticipado"
              paragraph="Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget. Sem sodales gravida quam turpis enim lacus amet."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              }
            />

            <BenefitCard
              title="3 simples pasos"
              paragraph="Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
              Lobortis auctor congue commodo diam neque."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              }
            />

            <BenefitCard
              title="Pago inmediato y seguro"
              paragraph="Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
              aliquet hac quis. Id hac maecenas ac donec pharetra eget."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              }
            />
          </dl>
        </div>
      </div>
    </div>
  );
}
