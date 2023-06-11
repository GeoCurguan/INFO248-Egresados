
const ProfileSummary = (props) => {
    const {
        name = "Juan",
        surname = "Pérez",
        role = "Egresado",
        email = "Juan.Pérez@gmail.com",
        dni = "12345678-9"
    } = props;


    return(
        <div class="flex items justify ml-10">
            <div class="max-w-xs ">
                <div class="bg-white shadow-xl rounded-lg py-3 h-96">
                    <div class="photo-wrapper p-2">
                        <img class="w-32 h-32 rounded-full mx-auto" src="default-avatar.jpg" alt="John Doe">
                        </img>
                    </div>
                    <div class="p-2">
                        <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{name + ' ' + surname}</h3>
                        <div class="text-center text-gray-400 text-xs font-semibold">
                            <p>{role}</p>
                        </div>
                        <table class="text-xs my-3">
                            <tbody>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">RUT</td>
                                <td class="px-2 py-2">{dni}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                <td class="px-2 py-2">{email}</td>
                            </tr>
                        </tbody></table>

                        <div class="text-center my-3">
                            <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">Universidad Austral de Chile</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileSummary;