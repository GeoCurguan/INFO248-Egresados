export const egresados = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Perez",
    caracteristicas: "lorem",
    dominios: "ipsum",
  },
  {
    id: 2,
    nombres: "Juan",
    apellidos: "Perez",
    caracteristicas: "lorem",
    dominios: "ipsum",
  },
  {
    id: 3,
    nombres: "Ricardo",
    apellidos: "Fuentes",
    caracteristicas: "lorem",
    dominios: "ipsum",
  },
  {
    id: 4,
    nombres: "Juan",
    apellidos: "Perez",
    caracteristicas: "lorem",
    dominios: "ipsum",
  },
];

export default async function handler(req, res) {
  res.status(200).json(egresados);
}
