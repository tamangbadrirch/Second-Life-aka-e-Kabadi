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
        <title>Second Life</title>
      </Head>
      <div className="flex justify-end">
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

      <div className="bg-orange-500 text-4xl font-bold text-white mt-4">
        Who we are?
        <div className="bg-red-200 text-2xl mt-4 text-red-800 text-center ml-2">
          We are team SecondLife.<br></br> Team of young & energetic positive
          mind people. <br></br> We try to cater the problem of traditional
          waste recyle with our digital platform in a new way.
        </div>
      </div>

      <div className="bg-orange-500 text-4xl font-bold text-white mt-4">
        What we buy?
        <div className="bg-red-200 text-2xl mt-4 text-red-800 text-center ml-2 flex items-center flex-wrap">
          <div className="mx-4">
            <Image
              src="/newsPaper.jpg"
              height={300}
              width={300}
              className="border border-black w-300 h-300"
              alt="NewsPaper Image"
              // layout="fixed"
            />
            newspaper
          </div>
          <div className="mx-4">
            <Image
              src="/books.jpg"
              height={300}
              width={300}
              className="border border-white w-250 h-250"
              alt="Books Image"
              // layout="fixed"
            />
            books
          </div>

          <div className="mx-4">
            <Image
              src="/iron.jpg"
              height={300}
              width={300}
              className="border border-white w-250 h-250"
              alt="Books Image"
              // layout="fixed"
            />
            irons
          </div>
          {/* <div className="ml-2">
            Team of young & energetic positive mind people. <br></br> We try to
            cater the problem of traditional waste recycle with our digital
            platform in a new way.
          </div> */}
        </div>
        <div className="bg-orange-500 text-4xl font-bold text-white mt-4">
          How we work?
          <div className="bg-red-200 text-2xl mt-4 text-red-800 ml-2">
            1. Place order <br />
            2. Confirm your order with our Team <br />
            3. Our team will reach at your location at the time you provided
            <br />
            4. We pick up goods <br /> 5. We pay you <br />
            6. Deal Complete
          </div>
        </div>
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
