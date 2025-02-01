import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Qui sommes-nous ?",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Nos services",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Innovation",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Actualités ",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Pricing Page",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Grid Page",
        path: "/blogs",
        newTab: false,
      },
      // {
      //   id: 66,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 67,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
