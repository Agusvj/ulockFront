import RegisterForm from ".././register/components/RegisterForm.js";

export default function heroSectionR() {
  return (
    <div className="bg-hero-register bg-cover bg-center">
      <div className="flex flex-col items-center justify-center pt-40 bg-primary-gradient">
        <h2 className="text-5xl font-bold font-viga mt-8 pb-5 uppercase text-terciary">
          Registro
        </h2>
        <p className="text-secondary text-1xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-poppins text-center mt-3 mb-10 font-bold">
          Completa tus datos para poder brindarte un locker
        </p>
        <button class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center">
          <img className="w-6" src="/search.png" alt="logo"></img>
          <span className="pl-3">Sign in with Google</span>
        </button>
        <RegisterForm />
      </div>
    </div>
  );
}
