//Importing Part
import sidebarData from "@/datas/Sidebar.data";
import Head from "next/head"; //For manipulating head part of html page
import Link from "next/link";
// import { BsList } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

//Defining Interface props for data types
interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Mainlayout = ({ title, children }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      {/* Head Part */}
      <Head>
        <title>{title || "demo"}</title>
        <link rel="stylesheet" href="" />
      </Head>

      {/* Main Part */}
      <main className="w-full">
        {/* Caling Sidebar  */}
        <Sidebar toggle={toggle} />

        <div
          className={`${
            !toggle
              ? "md:ml-[11rem] lg:ml-[16rem] xl:ml-[16.8rem] 2x1:ml-[21rem]"
              : "ml-[5rem]"
          }`}
        >
          {/* Calling NavBar */}
          <Navbar setToggle={setToggle} toggle={toggle} />
          <div className="pt-16">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Mainlayout;
