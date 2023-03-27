import { employeeUrl, itemsUrl } from "@/Apis/list.api";
import { asyncDelete, asyncGet } from "@/Apis/rest.api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Items } from "./Form";
import swal from "sweetalert";

const Table = () => {
  const [itemslist, setItemslist] = useState<any[]>([]);
  const [filteredItemslist, setFilteredItemslist] = useState<any[]>([]);

  const fetchAllItems = async () => {
    const { data, error } = await asyncGet(itemsUrl.get);
    if (data && !error) {
      setItemslist(data?.data as Items[]);
      setFilteredItemslist(data?.data as Items[]);
    }
  };

  const deleteItems = async (id: number) => {
    const dlt = async () => {
      const { data, error } = await asyncDelete(itemsUrl.delete + id);
      if (data && !error) {
        setItemslist((c) => c.filter((f) => f._id != id));
        setFilteredItemslist((c) => c.filter((f) => f._id != id));
      }
    };

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dlt().then(() => {
          swal("Good Job!", "Successfully deleted!", "Success");
        });
      }
    });
  };

  const filterSearch = (e: any) => {
    const value = e.target.value;
    if (value) {
      setFilteredItemslist(
        itemslist.filter(
          (f) => f.items?.toString().includes(value)
          // ||
          // f.address?.toString().includes(value)
        )
      );
    } else {
      setFilteredItemslist(itemslist);
    }
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div>
      {/* {JSON.stringify(itemslist)} */}
      <div className="flex justify-between my-3 mt-4">
        <div>
          <input
            type="text"
            onChange={filterSearch}
            className="border border-gray-400 rounded-md outline-none p-1.5"
          />
        </div>
        <Link href={"/admin/items/create"}>
          <span className="bg-purple-500 text-black hover:bg-purple-800 rounded-md px-3 py-2">
            Add Items
          </span>
        </Link>
      </div>
      <div className="bg-white p-2">
        {/* {JSON.stringify(employeelist)} */}
        <table className="w-full mt-3">
          <thead className=" text-black bg-purple-600  ">
            <tr className="">
              <th className="p-3">Id</th>
              <th className="p-3">categoryName</th>
              <th className="p-3">Items</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredItemslist?.length > 0 ? (
              filteredItemslist?.map((data, i) => {
                return (
                  <tr className="hover:bg-gray-200  p-3 text-center">
                    <td className="p-3 ">{i + 1}</td>
                    <td className="p-3">{data?.categoryId?.category}</td>
                    <td className="p-3">{data?.itemName}</td>
                    <td className="p-3 flex gap-2 justify-center">
                      <Link href={`/admin/items/${data._id}`}>
                        <button className="outline-none bg-green-600  px-2 py-0.5 rounded-md text-sm  text-white ">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteItems(data._id)}
                        className="outline-none bg-red-600  px-2 py-0.5 rounded-md text-sm  text-white "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-3">
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
