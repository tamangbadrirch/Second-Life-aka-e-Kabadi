import {
  FaDashcube,
  FaFileAlt,
  FaUserAlt,
  FaUserAstronaut,
  FaUserFriends,
} from "react-icons/fa";

import { BiMoney } from "react-icons/bi";
interface SidebarInterface {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const sidebarData: SidebarInterface[] = [
  {
    title: "Dashboard",
    icon: <FaDashcube />,
    link: "/dashboard",
  },
  {
    title: "Register",
    icon: <FaUserAlt />,
    link: "/register",
  },
  {
    title: "Login",
    icon: <FaUserAlt />,
    link: "/login",
  },
];
export default sidebarData;
