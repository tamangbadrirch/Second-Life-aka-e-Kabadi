import {
  FaDashcube,
  FaFileAlt,
  FaUserAlt,
  FaUserAstronaut,
  FaUserFriends,
  FaTruckLoading,
} from "react-icons/fa";

import { BiMoney } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import { GiTemplarEye } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { MdSpellcheck } from "react-icons/md";

interface SidebarInterface {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const sidebarData: SidebarInterface[] = [
  {
    title: "Dashboard",
    icon: <FaDashcube />,
    link: "/admin",
  },
  {
    title: "Notification",
    icon: <IoIosNotifications />,
    link: "/notification",
  },
  {
    title: "Requested Order",
    icon: <BsCartPlus />,
    link: "/requested",
  },
  {
    title: "Order in Progress",
    icon: <FaTruckLoading />,
    link: "/inprogress",
  },
  {
    title: "Completed order",
    icon: <MdSpellcheck />,
    link: "/completed",
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
];
export default sidebarData;
