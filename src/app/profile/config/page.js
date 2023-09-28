import { PencilIcon } from "@heroicons/react/24/solid";

export default function profileConfig() {
  return (
    <>
      <div className="ml-20">
        <div className="p-4">
          <div className="w-full md:w-[50%] p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 cursor-pointer bg-secondary rounded-lg">
              <p className="text-2xl font-bold text-center text-terciary">
                Tus Datos
              </p>
            </div>
            <ul>
              <li className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 cursor-pointer flex gap-3 lg:flex-row lg:items-center justify-between items-center">
                <div>
                  <span className="text-secondary font-bold">
                    Nombre Completo:
                  </span>{" "}
                  <p className="text-secondary">Hugo Huguito</p>
                </div>
                <button className="bg-secondary p-1 rounded-lg">
                  <PencilIcon className="w-5 text-terciary" />
                </button>
              </li>
              <li className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 cursor-pointer flex gap-3 lg:flex-row lg:items-center justify-between items-center">
                <div>
                  <span className="text-secondary font-bold">DNI:</span>{" "}
                  <p className="text-secondary">28666888</p>
                </div>
                <button className="bg-secondary p-1 rounded-lg">
                  <PencilIcon className="w-5 text-terciary" />
                </button>
              </li>
              <li className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 cursor-pointer flex gap-3 lg:flex-row lg:items-center justify-between items-center">
                <div>
                  <span className="text-secondary font-bold">Domicilio:</span>{" "}
                  <p className="text-secondary">Gdor paz 44</p>
                </div>
                <button className="bg-secondary p-1 rounded-lg">
                  <PencilIcon className="w-5 text-terciary" />
                </button>
              </li>
              <li className="bg-gray-200 hover:bg-gray-100 rounded-lg my-3 p-2 cursor-pointer flex gap-3 lg:flex-row lg:items-center justify-between items-center">
                <div>
                  <span className="text-secondary font-bold">Email:</span>{" "}
                  <p className="text-secondary">xxxxx@gmail.com</p>
                </div>
                <button className="bg-secondary p-1 rounded-lg">
                  <PencilIcon className="w-5 text-terciary" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
