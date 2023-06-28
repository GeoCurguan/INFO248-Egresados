export const beneficios = [
  {
    _id: 1,
    nombre: "Beneficio 1",
    descripcion:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    _id: 2,
    nombre: "Beneficio 2",
    descripcion:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

export default async function handler(req, res) {
  res.status(200).json(beneficios);
}
