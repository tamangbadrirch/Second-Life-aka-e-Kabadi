import { BiUserCircle } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

{
  /* Navbar Section  */
}

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ toggle, setToggle }: Props) {
  return (
    <div
      className={`fixed p-5 bg-white  top-0  ${
        !toggle ? "" : "pl-[4rem]"
      }  text-black shadow-md flex justify-between left-0 right-0`}
    >
      {/* <div className={`${!toggle ? "ml-32" : "ml-1"}`}> */}
      <div
        className={`${!toggle ? "pl-[13rem]" : "ml-1"} `}
        style={{ marginLeft: `${!toggle ? "3.5rem" : "1rem"}` }}
      >
        <span onClick={() => setToggle((t) => !t)}>
          <BsList size={25} />
        </span>
      </div>
      <div className="flex gap-3 items-center">
        <span>
          <IoIosNotifications size={25} />
        </span>
        <span>Badri</span>
        <span>
          <BiUserCircle size={25} />
        </span>
      </div>
    </div>
  );
}
