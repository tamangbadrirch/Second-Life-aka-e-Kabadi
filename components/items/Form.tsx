import { categoryUrl, itemsUrl } from "@/Apis/list.api";
import { asyncGet, asyncPost, asyncPut } from "@/Apis/rest.api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import swal from "sweetalert";
interface FormProps {
  editData?: any;
}
export interface Items {
  id: number;
  categoryName: string;
  items: string;
  // unit: string;
}
const Form = ({ editData }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Items>();
  const router = useRouter();
  const [categoryList, setCategoryList] = useState([]);
  //function that is call after submit
  const saveItems = async (value: Items) => {
    //api call
    const payload = {
      ...value,
    };

    if (editData && editData?.id) {
      //update
      const { data, error } = await asyncPut(
        itemsUrl.save + "/" + editData.id,
        payload
      );
      if (data && !error) {
        swal({
          text: "successfully created",
          icon: "success",
        });
        router.push("/admin/items");
      }
    } else {
      //create
      const { data, error } = await asyncPost(itemsUrl.save, payload);
      if (data && !error) {
        swal({
          text: "successfully created",
          icon: "success",
        });
        router.push("/admin/items");
      }
    }
  };

  const fetchCategory = async () => {
    const { data, error } = await asyncGet(categoryUrl.get);
    if (data && !error) {
      setCategoryList(data?.data);
    }
  };

  useEffect(() => {
    if (editData) {
      setValue("id", editData?._id);
      setValue("categoryName", editData?.categoryId);
      setValue("items", editData?.itemName);
      // setValue("unit", editData?.unit);
    }
  }, [editData]);
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="flex  bg-white mx-auto p-16 justify-center  w-[100%]">
      {/* {JSON.stringify(editData)} */}
      <form
        onSubmit={handleSubmit(saveItems)}
        action=""
        className="flex-col flex gap-6"
      >
        <div className=" relative items-center">
          <div className="flex gap-2">
            <label htmlFor="" className="text-xl w-[40%]">
              Category:
            </label>
            <select
              className="outline-none px-2  border-gray-400 border py-1.5"
              {...register("categoryName", {
                required: true,
                validate: (v) => {
                  if (v == "null") return "category is required";
                },
              })}
            >
              <option value="null" selected>
                choose
              </option>
              {categoryList.map((m: any, i: number) => {
                return <option value={m?._id}>{m?.category}</option>;
              })}
            </select>
          </div>
          {errors?.categoryName && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              name required
            </small>
          )}
        </div>
        <div className="">
          <div className="flex gap-2 ">
            <label htmlFor="" className="text-xl w-[30%]">
              Item:
            </label>
            <input
              placeholder=" Enter item name: "
              {...register("items", {
                required: { value: true, message: "Item is required" },
                max: { value: 30, message: "Item must be less than 30" },
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
        {/* for button */}
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
