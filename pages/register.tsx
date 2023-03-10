import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { asyncPost } from "@/Apis/rest.api";
import { userUrl } from "@/Apis/list.api";
import { useRouter } from "next/router";

interface SignUpFormProps {
  onSubmit: (data: SignUpFormData) => void;
}

interface SignUpFormData {
  userType: string;
  firstName: string;
  lastName: string;
  userName: string;
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
                {...register("userType", {
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

            {errors.userType && (
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
                {...register("firstName", { required: true })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                style={{ margin: "10px" }}
              />
            </div>
            {errors.firstName && (
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
                {...register("lastName", { required: true })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                style={{ margin: "10px" }}
              />
            </div>
            {errors.lastName && (
              <small className="w-full text-red-600 flex justify-center right-0 top-0">
                This field is required
              </small>
            )}
          </div>

          {/* for username */}
          <div className="mb-4">
            <div className="">
              <label htmlFor="username" className="text-gray-700 font-bold">
                username:
              </label>
              <input
                placeholder="enter username"
                {...register("userName", { required: true })}
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                style={{ margin: "10px" }}
              />
            </div>
            {errors.userName && (
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
