// Import React
import { useState } from "react";

// Import user
import { useAuthContext } from "@/context/MyAuthContext";

// Import utils
import { checkUrlImg, isNumeric } from "@/utils";

const ModalForm = ({ setShowModal }) => {
  // month/day/year
  const currentDate = new Date().toLocaleDateString("en-US");
  const { user } = useAuthContext();

  const [formPost, setFormPost] = useState({
    author: user.nombres + " " + user.apellidos,
    title: "",
    image: "",
    date: currentDate,
    body: "",
    type: "",
    salary: 0,
    company: "",
  });

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
      alert(
        "La URL de la imagen no es válida, procure utilizar https://, .png, .jpg o .jpeg"
      );
      return;
    }

    // Validación salario, verifica si es un número
    if (!isNumeric(formPost.salary)) {
      alert("El salario debe ser un número");
      return;
    }

    console.log("enviando...");

    // const res = await fetch(
    //   process.env.NEXT_PUBLIC_URL_BACKEND +
    //     "/api/posts/createPost/" +
    //     props.userId,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       "auth-token": localStorage.getItem("token"),
    //     },
    //     body: JSON.stringify(formPost),
    //     credentials: "include",
    //   }
    // );

    // Cerramos el modal
    // Reset form
    setFormPost({
      author: user.nombres + " " + user.apellidos,
      title: "",
      image: "",
      date: currentDate,
      body: "",
      type: "",
      salary: 0,
      company: "",
    });

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
            title="Título del trabajo a ofrecer"
            value={formPost.title}
            onChange={handleChange}
            required
            type="text"
            name="title"
            id="title"
            autoComplete="title"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-md border-gray-300 rounded-md"
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
            title="Url de la imágen del trabajo a ofrecer"
            type="text"
            name="image"
            id="image"
            value={formPost.image}
            onChange={handleChange}
            autoComplete="image"
            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-md border-gray-300 rounded-md"
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
            title="Descripción del trabajo a ofrecer"
            type="text"
            name="body"
            id="body"
            required
            value={formPost.body}
            onChange={handleChange}
            autoComplete="body"
            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-md border-gray-300 rounded-md"
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
            title="Salario del trabajo a ofrecer"
            type="text"
            name="salary"
            id="salary"
            value={formPost.salary}
            onChange={handleChange}
            autoComplete="salary"
            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-md border-gray-300 rounded-md"
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
            title="Compañía del trabajo a ofrecer"
            type="text"
            name="company"
            id="company"
            value={formPost.company}
            onChange={handleChange}
            autoComplete="company"
            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-md border-gray-300 rounded-md"
          />
        </div>
      </div>
      <input
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded  cursor-pointer mt-4"
        value="Ofrecer empleo"
      />
    </form>
  );
};

export default ModalForm;
