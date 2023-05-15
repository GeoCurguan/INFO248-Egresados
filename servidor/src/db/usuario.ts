import { Post } from "../models/post";

export const data = {
  usuarios: [
    {
      id: "1",
      nombre: "Juan",
      password: "abc123",
      posts: [
        {
          id: "1",
          titulo: "Mi primer post",
          contenido: "Este es el contenido de mi primer post",
          publicado: true,
          publishedAt: new Date(),
          tipo: "Oferta",
        },
        {
          id: "2",
          titulo: "Mi segundo post",
          contenido: "Este es el contenido de mi segundo post",
          publicado: false,
          publishedAt: new Date(),
          tipo: "Oferta",
        },
      ] as Post[],
    },
    {
      id: "2",
      nombre: "María",
      password: "def456",
      posts: [
        {
          id: "3",
          titulo: "Mi tercer post",
          contenido: "Este es el contenido de mi tercer post",
          publicado: true,
          publishedAt: new Date(),
          tipo: "Beneficio",
        },
      ] as Post[],
    },
    {
      id: "3",
      nombre: "Pedro",
      password: "ghi789",
      posts: [] as Post[],
    },
    {
      id: "4",
      nombre: "Ana",
      password: "jkl012",
      posts: [] as Post[],
    },
    {
      id: "5",
      nombre: "Luis",
      password: "mno345",
      posts: [] as Post[],
    },
  ],
};
