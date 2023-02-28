// import { BsList } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import sidebarData from "@/datas/Sidebar.data";

interface Props {
  toggle: boolean;
}

const Sidebar = ({ toggle }: Props) => {
  const router = useRouter();
  return (
    <div
      className={`min-h-screen  text-white z-10 ${
        toggle ? "w-[5%]" : "w-[20%]"
      } bg-[#165374] fixed inset-0`}
    >
      <div className="flex justify-center">
        {!toggle && (
          <h1 className="text-3x1 pb-2 pt-4 font-bold text-center">
            Admin Panel
          </h1>
        )}
      </div>

      <div className="mt-2">
        <ul className="">
          {sidebarData.map((data, index) => {
            return (
              <Link key={index} href={data?.link}>
                <li className="p-2 px-5 hover:bg-purple-900 flex gap-2 items-center ">
                  <span>{data?.icon}</span>
                  {!toggle && <span>{data?.title}</span>}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
