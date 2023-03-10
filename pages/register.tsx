import React, { FC } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/Md";
import { useState } from "react";
import styles from "../styles/input.css";

interface SignUpFormProps {
  onSubmit: (data: SignUpFormData) => void;
}

interface SignUpFormData {
  usertype: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const {
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  //  for password & confirm password comparision
  // const password = watch("password");
  // const confirmpassword = watch("confirmpassword");

  const handleFormSubmit = async (data: SignUpFormData) => {
    try {
      await axios.post("/api/users", data);
      onSubmit(data);
    } catch (error) {
      console.log("Error submitting form", error);
    }
  };

  return (
    // <div className="flex bg-red-300 mx-auto p-16 justify-center w-[100%]">
    <div className="signup-container flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1
          className="text-3xl font-bold text-center mb-4 text-blue-400"
          style={{ fontFamily: "Open sans, sans-serif" }}
        >
          Second Life
        </h1>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          action=""
          className="signup-form flex flex-col space-y-4"
          style={{ width: "400px", margin: "auto" }}
        >
          {/* for usertype */}
          <div className="">
            <div className="signup-form h1">
              <label htmlFor="" className="signup-form label">
                Usertype:
              </label>
              <select
                {...register("usertype", {
                  validate: (value) => value != "null",
                })}
                className="signup-form label"
              >
                <option selected value="{null}">
                  choose
                </option>
                <option value="individual"> Individual</option>
                <option value="organization"> Organization</option>
              </select>
            </div>

            {errors.usertype && (
              <small className="w-full text-red-600 flex justify-center right-0 top-0">
                Choose user type
              </small>
            )}
          </div>

          {/* for first name */}
          <div className="grid grid-cols-3 gap-8">
            <div className="">
              <label htmlFor="firstname" className="col-span-1 ">
                First Name:
              </label>
              <input
                placeholder="enter first name"
                {...register("firstname", { required: true })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                style={{ margin: "10px" }}
              />
            </div>
            {errors.firstname && (
              <small className="w-full text-red-600 flex justify-center right-0 top-0">
                This field is required
              </small>
            )}
          </div>
          {/* for lastname */}
          <div className="mb-4">
            <div className="">
              <label htmlFor="" className="text-gray-700 font-bold">
                Last Name:
              </label>
              <input
                placeholder="enter last name"
                {...register("lastname", { required: true })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                style={{ margin: "10px" }}
              />
            </div>
            {errors.lastname && (
              <small className="w-full text-red-600 flex justify-center right-0 top-0">
                This field is required
              </small>
            )}
          </div>

          {/* for email */}
          <div className="">
            <div className="">
              <label htmlFor="email" className="">
                Email:
              </label>
              <input
                placeholder="enter email"
                {...register("email", {
                  required: { value: true, message: "email is required" },
                  pattern: {
                    message: "invalid email",
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  },
                })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                style={{ margin: "10px" }}
              />
            </div>
            {errors.email && (
              <small className="w-full text-red-600 flex justify-center right-0 top-0">
                {errors?.email?.message}
              </small>
            )}
          </div>

          <label>
            Password:
            <input
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="enter password"
              type="password"
              style={{ margin: "10px" }}
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password?.type === "required" && (
              <span>This field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>Password must be at least 8 characters</span>
            )}
            {errors.password?.type === "pattern" && (
              <span>
                Password should have at least 8 characters and include a mixture
                of uppercase and lowercase letters, numbers, and special
                characters
              </span>
            )}
          </label>
          <label>
            Confirm Password:
            <input
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="enter confirm password"
              type="password"
              style={{ margin: "10px" }}
              {...register("confirmpassword", { required: true })}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            {errors.confirmpassword?.type === "required" && (
              <span>This field is required</span>
            )}
            {password !== confirmpassword && (
              <span>Passwords do not match</span>
            )}
          </label>
          <div className="signup-form button signup-form button:hover flex justify-end ">
            <button
              className="bg-blue-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;
