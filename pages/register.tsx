import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { asyncPost } from "@/Apis/rest.api";
import { userUrl } from "@/Apis/list.api";
import { useRouter } from "next/router";
import Link from "next/link";

interface SignUpFormProps {
  onSubmit: (data: SignUpFormData) => void;
}

interface SignUpFormData {
  userType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  userName: string;
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

  //  for password & confirm password comparision
  const password = watch("password");
  const confirmpassword = watch("confirmpassword");
  //for redirecting to login after sucessfull registration
  const router = useRouter();

  const handleFormSubmit = async (formdata: SignUpFormData) => {
    const { data, error } = await asyncPost(userUrl.save, formdata);
    if (data && !error) {
      alert("Saved Sucessfully");
      router.push("/login");
    } else {
      alert("Failed! Try again!");
    }
  };

  return (
    // <div className="flex bg-red-300 mx-auto p-16 justify-center w-[100%]">
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-500">
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
          className="flex flex-col space-y-2"
          style={{ width: "420px", margin: "auto" }}
        >
          {/* for usertype */}
          <div className="flex flex-col mb-2">
            <label htmlFor="userType" className="font-bold mb-2">
              Usertype:
            </label>
            <select
              {...register("userType", {
                validate: (value) => value != "null",
              })}
              id="userType"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="null" disabled>
                Choose
              </option>
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </select>
            {errors.userType && (
              <small className="text-red-600">{errors.userType.message}</small>
            )}
          </div>

          {/* for name fields */}
          <div className="flex space-x-4 mt-1">
            <div className="flex flex-col mb-2">
              <label htmlFor="firstName" className="font-bold mb-1">
                First Name:
              </label>
              <input
                placeholder="Enter first name"
                {...register("firstName", {
                  required: "This field is required",
                })}
                id="firstName"
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
              />
              {errors.firstName && (
                <small className="text-red-600">
                  {errors.firstName.message}
                </small>
              )}
            </div>

            <div className="flex flex-col ml-4 mt-1">
              <label htmlFor="lastName" className="font-bold mb-1 mt">
                Last Name:
              </label>
              <input
                placeholder="Enter last name"
                {...register("lastName", {
                  required: "This field is required",
                })}
                id="lastName"
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
              />
              {errors.lastName && (
                <small className="text-red-600">
                  {errors.lastName.message}
                </small>
              )}
            </div>
          </div>
          {/* for phone  */}
          <div className="flex space-x-4 mt-1">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 font-bold mb-1">
                Phone:
              </label>
              <input
                placeholder="Enter phone no."
                {...register("phone", { required: true })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                // style={{ margin: "10px" }}
              />
              {errors.phone && (
                <small className="w-full text-red-600 flex justify-center right-0 top-0">
                  This field is required
                </small>
              )}
            </div>

            {/* for address  */}
            <div className="flex flex-col ml-4 mb-2">
              <label htmlFor="address" className="text-gray-700 font-bold mb-1">
                Address:
              </label>
              <input
                placeholder="enter current address"
                {...register("address", { required: true })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
              />
              {errors.address && (
                <small className="w-full text-red-600 flex justify-center right-0 top-0">
                  This field is required
                </small>
              )}
            </div>
          </div>

          {/* for username */}
          <div className="flex space-x-4 mt-1">
            <div className="flex flex-col mb-2">
              <label htmlFor="username" className="text-gray-700 font-bold">
                Username:
              </label>
              <input
                placeholder="Enter username"
                {...register("userName", { required: true })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
              />
              {errors.userName && (
                <small className="w-full text-red-600 flex justify-center right-0 top-0">
                  This field is required
                </small>
              )}
            </div>

            {/* for email */}
            <div className="flex flex-col ml-4 mb-2">
              <label htmlFor="email" className="font-bold mb-1">
                Email:
              </label>
              <input
                placeholder="Enter email"
                {...register("email", {
                  required: { value: true, message: "email is required" },
                  pattern: {
                    message: "invalid email",
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  },
                })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
              />
              {errors.email && (
                <small className="w-full text-red-600 flex justify-center right-0 top-0">
                  {errors?.email?.message}
                </small>
              )}
            </div>
          </div>

          {/* for password */}
          <div className="flex space-x-4 mt-1">
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold mb-1">
                Password:
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
              />
              {errors.password?.type === "required" && (
                <span>This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span>Password must be at least 8 characters</span>
              )}
              {errors.password?.type === "pattern" && (
                <span>
                  Password should have at least 8 characters and include a
                  mixture of uppercase and lowercase letters, numbers, and
                  special characters
                </span>
              )}
            </div>
            <div className="flex flex-col ml-4">
              <label htmlFor="confirmpassword" className="font-bold mb-1">
                Confirm Password:
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter confirm password"
                type="password"
                {...register("confirmpassword", { required: true })}
              />
              {errors.confirmpassword?.type === "required" && (
                <span>This field is required</span>
              )}
              {password !== confirmpassword && (
                <span>Passwords do not match</span>
              )}
            </div>
          </div>

          {/* for agreement while registering */}
          <div className="flex items-center mt-2">
            <input
              id="terms-checkbox"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label
              htmlFor="terms-checkbox"
              className="ml-2 block text-sm leading-5 text-gray-900"
            >
              I agree to the{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Terms &amp; Conditions
              </a>{" "}
              and the{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Standard Disclosure Terms
              </a>
              .
            </label>
          </div>

          {/* for button */}

          <div
            className="flex mt-1"
            style={{ justifyContent: "flex-end", paddingRight: "10px" }}
          >
            <button
              type="submit"
              className="bg-blue-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* for back to login */}
          <div className="text-center mt-1 flex justify-end font-bold">
            <Link href="/login" passHref>
              <button className="text-blue-500 hover:text-red-600 hover:underline border-none bg-transparent py-2 px-4 rounded-md transition-colors duration-300">
                Go back to login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;
