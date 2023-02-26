//Importing Part
import Head from "next/head"; //For manipulating head part of html page
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

//Defining Interface props for data types
interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Mainlayout = ({ title, children }: Props) => {
  return (
    <>
      {/* Head Part */}
      <Head>
        <title>{title || "demo"}</title>
        <link rel="stylesheet" href="" />
      </Head>

      {/* Main Part */}
      <main>
        {/* Caling Sidebar  */}
        <Sidebar />

        <div className="w-[100%] ml-[12rem] ">
          {/* Calling NavBar */}
          <Navbar />
          <div className="pt-16">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Mainlayout;
