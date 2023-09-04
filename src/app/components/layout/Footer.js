export default function Footer() {
  return (
    <footer className="bg-secondary py-5 grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-8 sm:gap-0">
      <div className="sm:text-left text-center flex justify-center items-center flex-col text-terciary">
        <p>Direccion: asdasd 315</p>
        <p>Contacto: asdasd 315</p>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-48" src="/logoSec.png" alt="logo"></img>
      </div>
      <div className="flex justify-center items-center gap-7 text-terciary">
        <a></a>
        <a></a>
        <a></a>
      </div>
    </footer>
  );
}
