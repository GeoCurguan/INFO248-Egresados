// Import React
import { useState } from "react";

// Import utils
import { checkUrlImg, isNumeric } from "@/utils";
import { mostrarError, mostrarExito } from "@/utils/alerts";

const PostForm = (props) => {
  // month/day/year
  const currentDate = new Date().toLocaleDateString("en-US");

  const [formPost, setFormPost] = useState({
    author: props.name,
    title: "",
    image: "",
    date: currentDate,
    body: "",
    type: "",
    salary: "0",
    company: "",
  });
  const postTypes = {
    noticia: ["source"],
    oferta_laboral: ["salary", "company"],
  };
  const [postType, setPostType] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "type") {
      setPostType(e.target.value);
    }

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
        "La URL de la imagen no es válida, procure utilizar https://, .png, .jpg o .jpeg"
      );
      return;
    }

    // Validación salario, verifica si es un número
    if (!isNumeric(formPost.salary)) {
      mostrarError("El salario debe ser un número.");
      return;
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BACKEND +
        "/api/posts/createPost/" +
        props.userId,
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
    mostrarExito(`Publicación de tipo ${formPost.type} creada con éxito.`);

    // Reset form
    setFormPost({
      author: props.name,
      title: "",
      image: "",
      date: currentDate,
      body: "",
      type: "",
      salary: "0",
      company: "",
    });
  };
  return (
    <>
      <form className="w-1/3" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Titulo
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formPost.title}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Titulo para mi Publicación"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            URL Imágen
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formPost.image}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://www.example.com/image.jpg"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="body"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Cuerpo de la Publicación
          </label>
          <textarea
            type="textarea"
            id="body"
            name="body"
            value={formPost.body}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cuerpo de la Publicación"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Tipo de Publicación
          </label>
          <select
            id="underline_select"
            name="type"
            value={formPost.type}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="">Noticia, beneficio, Oferta Laboral...</option>
            <option value="noticia">Noticia</option>
            <option value="beneficio">Beneficio</option>
            <option value="oferta_laboral">Oferta Laboral</option>
          </select>
        </div>

        {postTypes[postType] &&
          postTypes[postType].map((campo) => (
            <div key={campo} className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                {campo}
              </label>
              <textarea
                type="textarea"
                name={campo}
                value={formPost.campo}
                onChange={handleChange}
                className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          ))}

        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Publicar
        </button>
      </form>
    </>
  );
};
export default PostForm;
