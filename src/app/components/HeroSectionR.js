import RegisterForm from ".././register/components/RegisterForm.js";

export default function heroSectionR() {
  return (
    <div className="bg-hero-register bg-cover bg-center">
      <div className="flex flex-col items-center justify-center pt-40 bg-primary-gradient">
        <h2 className="text-5xl font-bold font-viga mt-8 pb-5 uppercase text-terciary">
          Registro
        </h2>
        <p className="text-secondary text-1xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-poppins text-center mt-3 font-bold">
          Completa tus datos para poder brindarte un locker
        </p>
        <button className="bg-secondary hover:bg-blue-900 transition-all ease-in delay-100 hover:scale-110 text-terciary font-semibold py-2 px-8 rounded inline-block self-center hover:cursor-pointer mt-12">
          Entrar con Google
        </button>
        <RegisterForm />
      </div>
    </div>
  );
}
