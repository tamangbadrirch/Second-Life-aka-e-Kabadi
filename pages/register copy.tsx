import Link from "next/link";
import React from "react";

const register = () => {
  return (
    // for heading of form
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1
          className="text-3xl font-bold text-center mb-4 text-blue-400"
          style={{ fontFamily: "Open sans, sans-serif" }}
        >
          Second Life
        </h1>

        {/* Form Part from here */}
        <form
          className="flex flex-col space-y-4"
          style={{ width: "300px", margin: "auto" }}
        >
          <label htmlFor="userName" className="text-gray-700 font-medium">
            Username *
          </label>
          <input
            type="text"
            id="username"
            className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
        {/* Form Closes here */}

        {/* for signup & forget password */}
        <div className="flex items-center justify-center mt-4 font-bold">
          <Link href="/register" passHref>
            <button
              className="text-blue-500 hover:underline border-none hover:bg-red-600 bg-transparent"
              type="button"
            >
              Sign Up
            </button>
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <Link href="/forgetpass" passHref>
            <button
              className="text-blue-500 hover:underline border-none bg-transparent"
              type="button"
            >
              Forgot Password?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default register;
