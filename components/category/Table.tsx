import { categoryUrl } from "@/Apis/list.api";
import { asyncDelete, asyncGet } from "@/Apis/rest.api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Category } from "./Form";

const Table = () => {
  const [categorylist, setCategorylist] = useState<Category[]>([]);
  const [filteredCategorylist, setFilteredCategorylist] = useState<Category[]>(
    []
  );

  const fetchAllCategory = async () => {
    const { data, error } = await asyncGet(categoryUrl.get);
    if (data && !error) {
      setCategorylist(data?.data as Category[]);
      setFilteredCategorylist(data?.data as Category[]);
    }
  };
  const deleteCategory = async (id: number) => {
    const value = window.prompt("Are you sure, you want to delete?");
    if (value == "yes") {
      const { data, error } = await asyncDelete(categoryUrl.delete + id);
      if (data && !error) {
        // fetchAllEmploye();
        setCategorylist((c) => c.filter((f) => f.id != id));
        setCategorylist((c) => c.filter((f) => f.id != id));
      }
    }
  };

  // const callback=(a:any)=>{x
  //  return a.filter(filterCallback)
  // }
  // const filterCallback=(f:any)=>{
  // return  f.id!=id
  // }

  const filterSearch = (e: any) => {
    const value = e.target.value;
    if (value) {
      setFilteredCategorylist(
        categorylist.filter(
          (f) => f.categoryName?.toString().includes(value)
          // ||
          // f.address?.toString().includes(value)
        )
      );
    } else {
      setFilteredCategorylist(categorylist);
    }
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
    <div>
      <div className="flex justify-between my-3 mt-4">
        <div>
          <input
            type="text"
            onChange={filterSearch}
            className="border border-gray-400 rounded-md outline-none p-1.5"
          />
        </div>
        <Link href={"/category/create"}>
          <span className="bg-purple-500 text-black hover:bg-purple-800 rounded-md px-3 py-2">
            Add Category
          </span>
        </Link>
      </div>
      <div className="bg-white p-2">
        {/* {JSON.stringify(employeelist)} */}
        <table className="w-full mt-3">
          <thead className=" bg-purple-600  ">
            <tr className="">
              <th className="p-3">Id</th>
              <th className="p-3">categoryName</th>
              {/* <th className="p-3">Address</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Age</th>
              <th className="p-3">Action</th> */}
            </tr>
          </thead>
          <tbody className="">
            {filteredCategorylist?.length > 0 ? (
              filteredCategorylist?.map((data, i) => {
                return (
                  <tr className="hover:bg-gray-200  p-3 text-center">
                    <td className="p-3 ">{i + 1}</td>
                    <td className="p-3">{data.categoryName}</td>
                    {/* <td className="p-3">{data.address}</td>
                    <td className="p-3">{data.phone}</td>
                    <td className="p-3">{data.age}</td> */}
                    <td className="p-3 flex gap-2 justify-center">
                      <Link href={`/employee/${data.id}`}>
                        <button className="outline-none bg-green-600  px-2 py-0.5 rounded-md text-sm  text-white ">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteCategory(data.id)}
                        className="outline-none bg-red-600  px-2 py-0.5 rounded-md text-sm  text-white "
                      ></button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={2} className="text-center py-3">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* for pagination */}
      <div className="flex justify-end gap-2 absolute bottom-0 right-0">
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          1
        </button>
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          2
        </button>
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          3
        </button>
      </div>
    </div>
  );
};

export default Table;