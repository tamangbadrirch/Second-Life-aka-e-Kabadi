import {
  FaDashcube,
  FaTruckLoading,
  FaCriticalRole,
} from "react-icons/fa";

import { IoIosNotifications } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import { GiTemplarEye } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { MdSpellcheck } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";

interface SidebarInterface {
  title: string;
  icon: React.ReactNode;
  link: string;
}

//link should be start with /

const sidebarData: SidebarInterface[] = [
  {
    title: "Dashboard",
    icon: <FaDashcube />,
    link: "/dashboard",
  },
  {
    title: "Place Order",
    icon: <BsCartPlus />,
    link: "/user/order",
  },

  {
    title: "Requested Order",
    icon: <BsCartPlus />,
    link: "#",
  },

  {
    title: "Order in Progress",
    icon: <FaTruckLoading />,
    link: "#",
  },
  {
    title: "Completed order",
    icon: <MdSpellcheck />,
    link: "#",
  },

  {
    title: "User_Management",
    icon: <AiOutlineUserAdd />, //we will show notifications from navbar at right
    link: "#",
  },

  {
    title: "RolesAccess",
    icon: <FaCriticalRole />, //we will show notifications from navbar at right
    link: "#",
  },

  {
    title: "Modules",
    icon: <IoIosNotifications />, //we will show notifications from navbar at right
    link: "#",
  },

  {
    title: "Category",
    icon: <BiCategory />,
    link: "/admin/category",
  },
  {
    title: "Items",
    icon: <GiTemplarEye />,
    link: "/admin/items",
  },
  {
    title: "Payments",
    icon: <GiTemplarEye />,
    link: "/payment",
  },
];
export default sidebarData;
