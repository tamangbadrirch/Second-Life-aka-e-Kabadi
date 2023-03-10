import Navbar from "@/layouts/Navbar";
import Sidebar from "@/layouts/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <div className="">
      <Head>
        <title>ScrapProject</title>
      </Head>
      <div className="flex justify-end font-te">
        <h1
          className="ml-8 flex grow text-3xl font-bold"
          style={{ color: "#2596be" }}
        >
          <a href="/dashboard">Second Life</a>
          {/* <div onClick={() => router.push("/index")}>Second Life</div> */}
        </h1>
        <button
          className="mr-1 mt-2 text-white border border-white rounded-md px-3 py-1 bg-blue-500 hover:bg-red-500 active:bg-blue-700 transition-colors duration-300 ml:auto"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className="text-white bg-blue-500 rounded-md px-3 py-1 mt-2 hover:bg-red-500 active:bg-blue-700 transition-colors duration-300"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>

      <Image
        src="/justForAttraction.png"
        height={500}
        width={500}
        alt="Homepage Image"
        layout="responsive"
      />
    </div>
  );
}
