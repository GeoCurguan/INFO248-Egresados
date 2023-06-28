export const empleos = [
  {
    id: 1,
    nombreEmpresa: "Empresa 1",
    resumenTrabajo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus saepe ratione est officiis ut modi sunt, cumque recusandae quidem accusamus accusantium tempore expedita nisi perspiciatis velit at nam dolor eos.",
    tags: ["React", "Next", "Tailwind"],
  },
  {
    id: 2,
    nombreEmpresa: "Empresa 2",
    resumenTrabajo: "lorem",
    tags: ["React", "Next", "Bootstrap"],
  },
  {
    id: 3,
    nombreEmpresa: "Empresa 3",
    resumenTrabajo: "lorem ipsum",
    tags: ["Java", "Spring", "Hibernate"],
  },
  {
    id: 4,
    nombreEmpresa: "Completos 4",
    resumenTrabajo: "Tienes que hacer completos",
    tags: ["Completos", "Completos", "Completos"],
  },
];

export default async function handler(req, res) {
  res.status(200).json(empleos);
}
