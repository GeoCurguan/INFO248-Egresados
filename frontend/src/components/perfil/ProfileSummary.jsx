import Image from "next/image";

const ProfileSummary = (props) => {
  const {
    name = "Juan",
    surname = "Pérez",
    role = "Egresado",
    email = "Juan.Pérez@gmail.com",
    dni = "12345678-9",
  } = props;

  return (
    <div className="flex items justify ml-10">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3 h-96">
          <div className="p-2">
            <Image
              width={128}
              height={128}
              className="rounded-full mx-auto"
              src="/default-avatar.jpg"
              alt={name + " " + surname}
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {name + " " + surname}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>{role}</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">RUT</td>
                  <td className="px-2 py-2">{dni}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">{email}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center my-3">
              <a
                className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                Universidad Austral de Chile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSummary;
