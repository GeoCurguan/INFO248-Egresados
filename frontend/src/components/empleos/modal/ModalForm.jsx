// Import React
import { useEffect, useState } from "react";

// Import user
import { useAuthContext } from "@/context/MyAuthContext";

// Import utils
import { checkUrlImg, isNumeric } from "@/utils";
import { mostrarError, mostrarExito } from "@/utils/alerts";

// Import toast
// import { toast } from "react-toastify";

// Import components
export const reloadData = async ({ setEmpleos }) => {
  fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/posts/getPostByType/oferta_laboral`
  )
    .then((res) => res.json())
    .then((data) => setEmpleos(data.posts));
};

const ModalForm = ({ setShowModal, setEmpleos }) => {
  // month/day/year
  const currentDate = new Date().toLocaleDateString("en-US");
  const { user } = useAuthContext();
  const fullName = user.nombres + " " + user.apellidos;

  const [formPost, setFormPost] = useState({
    author: fullName,
    title: "",
    image: "",
    date: currentDate,
    body: "",
    type: "oferta_laboral",
    salary: "0",
    company: "",
  });

  const handleChange = (e) => {
    setFormPost({
      ...formPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de URL de imagen
    if (!checkUrlImg(formPost.image)) {
      mostrarError(
        "El link debe comenzar con https:// y tener extensión jpg, jpeg o png"
      );
      return;
    }

    // Validación salario, verifica si es un número
    if (!isNumeric(formPost.salary)) {
      mostrarError("El salario debe ser un número.");
      return;
    }

    console.log(JSON.stringify(formPost));

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_URL_BACKEND +
          "/api/posts/createPost/" +
          user._id,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(formPost),
          credentials: "include",
        }
      );
    } catch (error) {
      console.log(error);
    }

    mostrarExito("¡Oferta Laboral publicada!");

    // Refrescamos
    reloadData({ setEmpleos });

    // Cerramos el modal
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-between sm:gap-4 gap-0 [&>div>input]:border [&>div>input]:mt-2 [&>div>input]:px-2">
        <div className="w-full">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre de la empresa
          </label>
          <input
            placeholder="Titulo para mi Publicación"
            title="Título del trabajo a ofrecer"
            value={formPost.title}
            onChange={handleChange}
            required
            type="text"
            name="title"
            id="title"
            autoComplete="title"
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            URL de la imágen
          </label>
          <input
            placeholder="https://www.example.com/image.jpg"
            title="Url de la imágen del trabajo a ofrecer"
            type="text"
            name="image"
            id="image"
            value={formPost.image}
            onChange={handleChange}
            autoComplete="image"
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700"
          >
            Cuerpo de la publicación
          </label>
          <input
            placeholder="Cuerpo de la Publicación"
            title="Descripción del trabajo a ofrecer"
            type="text"
            name="body"
            id="body"
            required
            value={formPost.body}
            onChange={handleChange}
            autoComplete="body"
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700"
          >
            Salario
          </label>
          <input
            placeholder="0"
            title="Salario del trabajo a ofrecer"
            type="text"
            name="salary"
            id="salary"
            value={formPost.salary}
            onChange={handleChange}
            autoComplete="salary"
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Compañía
          </label>
          <input
            placeholder="Empresa"
            title="Compañía del trabajo a ofrecer"
            type="text"
            name="company"
            id="company"
            value={formPost.company}
            onChange={handleChange}
            autoComplete="company"
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded  cursor-pointer mt-4"
      >
        Publicar Oferta
      </button>
    </form>
  );
};

export default ModalForm;
