import { BiUserCircle } from "react-icons/bi";
import { BsList } from "react-icons/bs";

{
  /* Navbar Section  */
}

const Navbar = () => {
  return (
    <div className="w-[85%]">
      <div className="fixed p-5 bg-[#FEFFFE] pl-[10rem] top-0 text-black shadow-md flex justify-between left-0 right-0">
        <div className="ml-36">
          <span>
            <BsList size={25} />{" "}
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <span>Badri</span>
          <span>
            <BiUserCircle size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
