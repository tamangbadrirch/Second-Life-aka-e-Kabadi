import { employeeUrl, ordersUrl } from "@/Apis/list.api";
import { asyncPost, asyncPut } from "@/Apis/rest.api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormProps {
  editData?: Orders;
}
export interface Orders {
  id: number;
  category: string;
  items: string;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  paymentMethod: string;
}
const Form = ({ editData }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Orders>();
  const router = useRouter();
  //function that is call after submit
  const saveOrders = async (value: Orders) => {
    //api call
    const payload = {
      ...value,
    };

    if (editData && editData?.id) {
      //update
      const { data, error } = await asyncPut(
        ordersUrl.put + editData.id,
        payload
      );
      if (data && !error) {
        alert("Successfully updated");
        router.push("/orders");
      }
    } else {
      //create
      const { data, error } = await asyncPost(ordersUrl.save, payload);
      if (data && !error) {
        alert("Saved Successfully");
        router.push("/orders");
      }
    }
  };

  useEffect(() => {
    if (editData) {
      setValue("id", editData?.id);
      setValue("category", editData?.category);
      setValue("items", editData?.items);
      setValue("pickupDate", editData?.pickupDate);
      setValue("pickupTime", editData?.pickupTime);
      setValue("pickupLocation", editData?.pickupLocation);
      setValue("paymentMethod", editData?.paymentMethod);
    }
  }, [editData]);
  return (
    <div className="flex  bg-white mx-auto p-16 justify-center  w-[100%]">
      <form
        onSubmit={handleSubmit(saveOrders)}
        action=""
        className="flex-col flex gap-6"
      >
        <div className=" relative items-center">
          <div className="flex gap-2">
            <label htmlFor="" className="text-xl w-[40%]">
              Category:
            </label>
            <input
              placeholder=" Enter Category"
              {...register("category", { required: true })}
              className="outline-none px-2  border-gray-400 border py-1.5"
              type="text"
            />
          </div>
          {errors?.category && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              category required
            </small>
          )}
        </div>
        <div className="">
          <div className="flex gap-2 ">
            <label htmlFor="" className="text-xl w-[30%]">
              Items:
            </label>
            <input
              placeholder=" Enter Items"
              {...register("items", {
                required: { value: true, message: "item is required" },
                max: {
                  value: 20,
                  message: "items must be less than 20 character",
                },
              })}
              className="outline-none px-2  border-gray-400 border py-1.5"
              type="text"
            />
          </div>
          {errors?.items && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              {errors?.items?.message}
            </small>
          )}
        </div>
        <div className="">
          <div className="flex gap-2 ">
            <label htmlFor="" className="text-xl w-[30%]">
              Pickup Date:
            </label>
            <input
              placeholder=" Choose Suitable Pickup Date"
              {...register("pickupDate", {
                required: { value: true, message: "date is required" },
                // max: { value: 20, message: "addrsss must be less than 20" },
              })}
              className="outline-none px-2  border-gray-400 border py-1.5"
              type="text"
            />
          </div>
          {errors?.pickupDate && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              {errors?.pickupDate?.message}
            </small>
          )}
        </div>
        <div className="">
          <div className="flex gap-2 ">
            <label htmlFor="" className="text-xl w-[30%]">
              Pickup Time:
            </label>
            <input
              placeholder=" Choose Suitable Pickup Time"
              {...register("pickupTime", {
                required: { value: true, message: "pickup time is required" },
                // pattern: {
                //   value: /^[0-9]{10}$/,
                //   message: "phone must be 10 digit",
                // },
              })}
              className="outline-none px-2  border-gray-400 border py-1.5"
              type="text"
            />
          </div>
          {errors?.pickupTime && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              {errors?.pickupTime?.message}
            </small>
          )}
        </div>
        <div className="">
          <div className="flex gap-2 items-center">
            <label htmlFor="" className="text-xl w-[30%]">
              Pickup Location:
            </label>
            <input
              {...register("pickupLocation", {
                required: { value: true, message: "Location is required" },
              })}
              placeholder="Enter location or choose from map"
              className="outline-none px-2  border-gray-400 border py-1.5"
              type="text"
            />
          </div>
          {errors?.pickupLocation && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              {errors?.pickupLocation?.message}
            </small>
          )}
        </div>
        <div className="">
          <div className="">
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="text-xl w-[30%]">
                Payment Method:
              </label>
              <select
                {...register("paymentMethod", {
                  validate: (value) => value != "null",
                })}
                className="px-2 bg-inherit outline-none w-full border-gray-400 border py-1.5"
              >
                <option selected value={"null"}>
                  choose
                </option>
                <option value="QR">QR</option>
                <option value="bankTransfer">Bank Transfer</option>
                <option value="Cash">Cash</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {errors?.paymentMethod && (
              <small className="w-full text-red-600 flex justify-center right-0 top-0">
                Choose Payment Method
              </small>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-700  text-white px-8 py-2 rounded-md"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
