import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

export default function OrderForm() {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    axios.post("/api/orders", data).then((response) => {
      console.log(response);
      router.push("/dashboard");
    });
  };

  const onCancelClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Categories
                </label>
                <select
                  id="category"
                  name="category"
                  ref={register({ required: true })}
                  className="appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">--Select--</option>
                  <option value="Paper">Paper</option>
                  <option value="Iron">Iron</option>
                  <option value="Other">Other</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs italic">
                    Category is required
                  </p>
                )}
              </div>


              <div className="mb-4">
                <label
                  htmlFor="item"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Items
                </label>
                <select
                  id="item"
                  name="item"
                  ref={register({ required: true })}
                  className="appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">--Select--</option>
                  <optgroup label="Paper">
                    <option value="Normal A4 Papers">Normal A4 Papers</option>
                    <option value="Books &amp; Notes">Books &amp; Notes</option>
                    <option value="Thick Cartoon Paper">
                      Thick Cartoon Paper
                    </option>
                    <option value="Paper pieces of factory waste">
                      Paper pieces of factory waste
                    </option>
                  </optgroup>
                  <optgroup label="Iron">
                    <option value="Iron scrap">Iron scrap</option>
                    <option value="Iron furniture">Iron furniture</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option value="Plastic waste">Plastic waste</option>
                    <option value="Electronic waste">
                      Electronic waste
                    </option>
                    <option value="Glass waste">Glass waste</option>
                    <option value="Other factory waste">
                      Other factory waste
                    </option>
                  </optgroup>
                </select>
                {errors.item && (
                  <p className="text-red-500 text-xs italic">
                    Item is required
                  </p>
                )}
              </div>

 <div className="mb-4">
  <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
    Quantity
  </label>
  <input
    type="number"
    id="quantity"
    name="quantity"
    ref={register({ required: true, min: 1 })}
    className="appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
  />
  {errors.quantity && (
    <p className="text-red-500 text-xs italic">Quantity is required</p>
  )}
</div>

<div className="mb-4">
  <label htmlFor="contactName" className="block text-gray-700 font-bold mb-2">
    Contact Name
  </label>
  <input
    type="text"
    id="contactName"
    name="contactName"
    ref={register({ required: true })}
    className="appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
  />
  {errors.contactName && (
    <p className="text-red-500 text-xs italic">Contact name is required</p>
  )}
</div>

<div className="mb-4">
  <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">
    Contact Number
  </label>
  <input
    type="text"
    id="contactNumber"
    name="contactNumber"
    ref={register({ required: true })}
    className="appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
  />
  {errors.contactNumber && (
    <p className="text-red-500 text-xs italic">Contact number is required</p>
  )}
</div>

<div className="mb-4">
  <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
    Address
  </label>
  <textarea
    id="address"
    name="address"
    ref={register({ required: true })}
    className="appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
  ></textarea>
  {errors.address && (
    <p className="text-red-500 text-xs italic">Address is required</p>
  )}
</div>

<div className="mt-6">
  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
  >
    Submit
  </button>
</div>

</form>
</div>
</div>
</div> 
);
}
