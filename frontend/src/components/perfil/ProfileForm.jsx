import { useState } from "react";
const ProfileForm = (props) => {
  const [formData, setFormData] = useState({
    password: "",
    telefono: "",
    descripcion: "",
    foto: "",
    pais: "",
    region: "",
    comuna: "",
    direccion: "",
    instagram: "",
    twitter: "",
    facebook: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );

    if (Object.keys(filteredData).length === 0) {
      // Si no hay campos completados, muestra un mensaje de error o realiza alguna acción
      console.log("Debes completar al menos un campo");
      return;
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BACKEND +
        "/api/auth/editprofile/" +
        props.userId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      }
    );
  };

  return (
    <>
      <form className="w-1/3" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nueva Contraseña"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="telefono"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Telefono
          </label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Teléfono"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="descripcion"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Descripción
          </label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Descripción del Perfil"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="foto"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Foto
          </label>
          <input
            type="text"
            id="foto"
            name="foto"
            value={formData.foto}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Url de Imagen"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="pais"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            País
          </label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="País de Nacimiento"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="region"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Región
          </label>
          <input
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Región"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="comuna"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Comuna
          </label>
          <input
            type="text"
            id="comuna"
            name="comuna"
            value={formData.comuna}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Comuna"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="direccion"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dirección"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="instagram"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Url de Instagram"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="twitter"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Twitter
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Url de perfil de Twitter"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="facebook"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Url de perfil de Facebook"

          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="linkedin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Linkedin
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Url de perfil de Linkedin"

          />
        </div>

        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
    </>
  );
};
export default ProfileForm;
