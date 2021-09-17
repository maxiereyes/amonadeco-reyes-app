export const routes = [
  {
    name: "INICIO",
    path: "/",
  },
  {
    name: "CATEGORIAS",
    path: "/category",
    nestedItem: [
      {
        name: "TODOS LOS PRODUCTOS",
        path: "/todos",
      },
      {
        name: "almohadones",
        path: "/almohadones",
      },
      {
        name: "caminos de mesa",
        path: "/caminosdemesa",
      },
      {
        name: "espejos",
        path: "/espejos",
      },
      {
        name: "fundas de almohadones",
        path: "/fundasalmohadones",
      },
      {
        name: "manteles",
        path: "/manteles",
      },
      {
        name: "tapices",
        path: "/tapices",
      },
    ],
  },
  {
    name: "preguntas frecuentes",
    path: "/preguntasfrecuentes",
  },
  {
    name: "contacto",
    path: "/contacto",
  },
];
