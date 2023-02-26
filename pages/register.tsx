import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1
          className="text-3xl font-bold text-center mb-4 text-blue-400"
          style={{ fontFamily: "Open sans, sans-serif" }}
        >
          Second Life
        </h1>

        <form
          className="grid grid-cols-2 gap-4 text-center"
          style={{ width: "500px", margin: "auto" }}
        >
          {/* Sign up as */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2 font-bold">
              Sign up As
            </p>
            <div className="flex items-center space-x-2 justify-center">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="buyer"
                  name="signup-as"
                  value="buyer"
                  checked
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="buyer">Buyer</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="seller"
                  name="signup-as"
                  value="seller"
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="seller">Seller</label>
              </div>
            </div>
          </div>

          {/* User Type */}
          <div>
            <p className="text-gray-700 font-medium mb-2">User Type</p>
            <div className="flex items-center space-x-2 justify-center">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="individual"
                  name="user-type"
                  value="individual"
                  checked
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="individual">Individual</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="organization"
                  name="user-type"
                  value="organization"
                  className="form-radio h-4 w-4 text-blue-500 justify-center"
                />
                <label htmlFor="organization">Organization</label>
              </div>
            </div>
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="text-gray-700 font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="text-gray-700 font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="text-gray-700 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email Address{" "}
            </label>
            <input
              type="text"
              id="email"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-gray-700 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="col-span-2">
            <label className="flex items-center text-center justify-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="text-gray-700 font-medium ml-2">
                I agree to the{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end mr-4">
            <button
              className="bg-blue-500 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-600 transition-colors duration-300"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
