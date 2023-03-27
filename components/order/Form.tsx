import { employeeUrl, ordersUrl } from "@/Apis/list.api";
import { asyncGet, asyncPost, asyncPut } from "@/Apis/rest.api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

interface FormProps {
  editData?: any;
}
export interface Orders {
  id: string;
  category: string;
  items: string;
  quantity: number;
  unit: string;
  pickupDate: Date;
  pickupTime: Date;
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
  const [orderList, setOrderList] = useState([]);
  //function that is call after submit
  const saveOrders = async (value: Orders) => {
    //api call
    const payload = {
      ...value,
    };

    if (editData && editData?._id) {
      //update
      const { data, error } = await asyncPut(
        ordersUrl.put + editData._id,
        payload
      );
      if (data && !error) {
        swal({
          text: "Successfully created",
          icon: "Success",
        });
        // router.push("/user/order");
      }
    } else {
      //create
      const { data, error } = await asyncPost(ordersUrl.save, payload);
      if (data && !error) {
        swal({
          text: "Successfully created",
          icon: "Success",
        });
        // router.push("/user/order");
      }
    }
  };

  const fetchCategory = async () => {
    const { data, error } = await asyncGet(ordersUrl.get);
    if (data && !error) {
      setOrderList(data?.data);
    }
  };

  useEffect(() => {
    if (editData) {
      setValue("id", editData?._id);
      setValue("category", editData?.category);
      setValue("items", editData?.items);
      setValue("quantity", editData?.quantity);
      setValue("unit", editData?.unit);
      setValue("pickupDate", editData?.pickupDate);
      setValue("pickupTime", editData?.pickupTime);
      setValue("pickupLocation", editData?.pickupLocation);
      setValue("paymentMethod", editData?.paymentMethod);
    }
  }, [editData]);
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="flex  bg-white mx-auto p-12 justify-center  w-[100%]">
      <form
        onSubmit={handleSubmit(saveOrders)}
        action=""
        className="flex-col flex px-28 gap-y-5 w-full justify-center "
      >
        <div className=" relative items-center">
          <div className="flex gap-2">
            <label htmlFor="" className="text-xl w-[40%]">
              Category:
            </label>
            {/* <input
              placeholder=" Enter Category"
              {...register("category", { required: true })}
              className="outline-none px-2  border-gray-400 border py-1.5 w-[60%]"
              type="text"
            /> */}

            <select
              {...register("category", {
                validate: (value) => value != "null",
              })}
              className="px-2 bg-inherit outline-none w-[60%] border-gray-400 border py-1.5"
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
            <label htmlFor="" className="text-xl w-[40%]">
              Items:
            </label>
            {/* <input
              placeholder=" Enter Items"
              {...register("items", {
                required: { value: true, message: "item is required" },
                max: {
                  value: 20,
                  message: "items must be less than 20 character",
                },
              })}
              className="outline-none px-2 w-[60%]  border-gray-400 border py-1.5"
              type="text"
            /> */}

            <select
              {...register("items", {
                validate: (value) => value != "null",
              })}
              className="px-2 bg-inherit outline-none w-[60%] border-gray-400 border py-1.5"
            />
          </div>
          {errors?.items && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              {errors?.items?.message}
            </small>
          )}
        </div>

        {/* for quantity */}
        <div className="">
          <div className="flex gap-2 ">
            <label htmlFor="quantity" className="text-xl w-[40%]">
              Quantity:
            </label>
            <input
              placeholder=" Enter Quantity"
              {...register("quantity", {
                required: { value: true, message: "Quantity is required" },
                max: {
                  value: 20,
                  message: "Quantity must be in number",
                },
              })}
              className="outline-none px-2 w-[60%]  border-gray-400 border py-1.5"
              type="text"
            />
          </div>
          {errors?.quantity && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              {errors?.quantity?.message}
            </small>
          )}
        </div>

        {/* for units */}
        <div className="">
          <div className="flex gap-2 ">
            <label htmlFor="" className="text-xl w-[40%]">
              Unit:
            </label>
            {/* <input
              placeholder=" choose items: "
              {...register("items", {
                required: { value: true, message: "Item is required" },
                max: { value: 30, message: "Please, choose one item" },
              })}
              className="outline-none px-2  border-gray-400 border py-1.5"
              type="text"
            /> */}
            <select
              {...register("unit", {
                validate: (value) => value != "null",
              })}
              className="px-2 bg-inherit outline-none w-[60%] border-gray-400 border py-1.5"
            >
              <option selected value={"null"}>
                Choose Unit
              </option>
              <option value="Kg">Kg</option>
              <option value="Dozen">Dozen</option>
              <option value="Bundle">Bundle</option>
              <option value="Pack">Pack</option>
              <option value="Rim">Rim</option>
              <option value="Pcs">Pcs</option>
              <option value="Ton">Ton</option>
              <option value="Quintle">Quintle</option>
            </select>
          </div>
          {errors?.unit && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              {errors?.unit?.message}
            </small>
          )}
        </div>

        {/* for pickupDate */}
        <div className="">
          <div className="flex gap-2 ">
            <label htmlFor="" className="text-xl w-[40%]">
              Pickup Date:
            </label>
            <div className=" w-[60%]">
              <input
                placeholder=" Choose Suitable Pickup Date"
                {...register("pickupDate", {
                  required: { value: true, message: "date is required" },
                  // max: { value: 20, message: "addrsss must be less than 20" },
                })}
                className="outline-none px-2 w-full border-gray-400 border py-1.5"
                type="date"
              />
              {errors?.pickupDate && (
                <small className="w-full text-red-600 flex justify-center right-0 top-0">
                  {errors?.pickupDate?.message}
                </small>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-2 ">
            <label htmlFor="" className="text-xl w-[40%]">
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
              className="outline-none px-2 w-[60%] border-gray-400 border py-1.5"
              type="time"
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
            <label htmlFor="" className="text-xl w-[40%]">
              Pickup Location:
            </label>
            <input
              {...register("pickupLocation", {
                required: { value: true, message: "Location is required" },
              })}
              placeholder="Enter location or choose from map"
              className="outline-none px-2 w-[60%]  border-gray-400 border py-1.5"
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
              <label htmlFor="" className="text-xl w-[40%]">
                Payment Method:
              </label>
              <select
                {...register("paymentMethod", {
                  validate: (value) => value != "null",
                })}
                className="px-2 bg-inherit outline-none w-[60%] border-gray-400 border py-1.5"
              >
                <option selected value={"null"}>
                  Choose payment method
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
        <div className="flex justify-end">
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
