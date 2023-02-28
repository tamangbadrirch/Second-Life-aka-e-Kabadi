import {
  FaDashcube,
  FaFileAlt,
  FaUserAlt,
  FaUserAstronaut,
  FaUserFriends,
  FaTruckLoading,
} from "react-icons/fa";

import { BiMoney } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/Io";
import { BsCartPlus } from "react-icons/Bs";
import { MdSpellcheck } from "react-icons/Md";

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
];
export default sidebarData;
