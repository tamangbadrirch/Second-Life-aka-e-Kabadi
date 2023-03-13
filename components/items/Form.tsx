import { itemsUrl } from "@/Apis/list.api";
import { asyncPost, asyncPut } from "@/Apis/rest.api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormProps {
  editData?: Items;
}
export interface Items {
  id: number;
  categoryName: string;
  items: string;
}
const Form = ({ editData }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Items>();
  const router = useRouter();
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
        alert("Successfully updated!");
        router.push("/items");
      }
    } else {
      //create
      const { data, error } = await asyncPost(itemsUrl.save, payload);
      if (data && !error) {
        alert("Successfully saved!");
        router.push("/items");
      }
    }
  };

  useEffect(() => {
    if (editData) {
      setValue("id", editData?.id);
      setValue("categoryName", editData?.categoryName);
      setValue("items", editData?.items);
    }
  }, [editData]);
  return (
    <div className="flex  bg-white mx-auto p-16 justify-center  w-[100%]">
      <form
        onSubmit={handleSubmit(saveItems)}
        action=""
        className="flex-col flex gap-6"
      >
        <div className=" relative items-center">
          <div className="flex gap-2">
            <label htmlFor="" className="text-xl w-[30%]">
              Category:
            </label>
            <input
              placeholder=" Enter Category Name:"
              {...register("categoryName", { required: true })}
              className="outline-none px-2  border-gray-400 border py-1.5"
              type="text"
            />
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
