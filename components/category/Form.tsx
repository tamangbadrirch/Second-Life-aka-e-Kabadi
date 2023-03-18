import { categoryUrl } from "@/Apis/list.api";
import { asyncPatch, asyncPost, asyncPut } from "@/Apis/rest.api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

//There won't be category for userside

interface FormProps {
  editData?: Category;
}
export interface Category {
  _id: string;
  category: string;
}
const Form = ({ editData }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Category>();
  const router = useRouter();
  //function that is call after submit
  const saveCategory = async (value: Category) => {
    //api call
    const payload = {
      ...value,
    };

    if (editData && editData?._id) {
      //update
      const { data, error } = await asyncPatch(
        categoryUrl.save + "/" + editData._id, //put ma / use garne
        payload
      );
      if (data && !error) {
        swal({
          icon: "success",
          text: "successfully updated record",
        });
        router.push("/admin/category");
      }
    } else {
      //create
      const { data, error } = await asyncPost(categoryUrl.save, payload);
      if (data && !error) {
        alert("saved success");
        router.push("/admin/category");
      }
    }
  };

  useEffect(() => {
    if (editData) {
      setValue("_id", editData?._id);
      setValue("category", editData?.category);
    }
  }, [editData]);
  return (
    <div className="flex  bg-white mx-auto p-16 justify-center  w-[100%]">
      <form
        onSubmit={handleSubmit(saveCategory)}
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
              {...register("category", { required: true })}
              className="outline-none px-2  border-gray-400 border py-1.5"
              type="text"
            />
          </div>
          {errors?.category && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              Name is required
            </small>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-700  text-black px-8 py-2 rounded-md"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
