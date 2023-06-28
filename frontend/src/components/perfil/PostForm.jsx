import { useState } from "react";
const PostForm = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${day}/${month}/${year}`;

  const [formPost, setFormPost] = useState({
    author: props.name,
    title: "",
    date: formattedDate,
    body: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormPost({
      ...formPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BACKEND + "/api/posts/" + props.userId,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPost),
        credentials: "include",
      }
    );
  };
  return (
    <>
      <form className="w-1/3" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Titulo
          </label>
          <input
            type="text"
            name="title"
            value={formPost.title}
            onChange={handleChange}
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Titulo para mi Publicación"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Cuerpo de la Publicación
          </label>
          <textarea
            type="textarea"
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
            <option value="Noticia">Noticia</option>
            <option value="Beneficio">Beneficio</option>
            <option value="Oferta Laboral">Oferta Laboral</option>
          </select>
        </div>
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
